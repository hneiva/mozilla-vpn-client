/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import QtQuick 2.5
import QtQuick.Controls 2.15
import QtQuick.Window 2.12
import Mozilla.VPN 1.0
import "./components"

Window {
    id: window

    property var safeContentHeight: Qt.platform.os === "ios" ? window.height - iosSafeAreaTopMargin.height : window.height

    function fullscreenRequired() {
        return Qt.platform.os === "android" ||
                Qt.platform.os === "ios" ||
                Qt.platform.os === "tvos";
    }

    flags: Qt.platform.os === "ios" ? Qt.MaximizeUsingFullscreenGeometryHint : Qt.Window

    visible: true
    width: fullscreenRequired() ? maximumWidth : 360
    height: fullscreenRequired() ? maximumHeight : 454
    maximumHeight: height
    maximumWidth: width
    minimumHeight: height
    minimumWidth: width
    //% "Mozilla VPN"
    title: qsTrId("vpn.main.productName")
    color: "#F9F9FA"
    onClosing: {
        console.log("Closing request handling");

        // No desktop, we go in background mode.
        if (!fullscreenRequired()) {
            close.accepted = false;
            window.hide();
            return;
        }

        if (VPNCloseEventHandler.eventHandled()) {
            close.accepted = false;
            return;
        }

        console.log("closing.");
    }
    Component.onCompleted: {
        if (VPN.startMinimized)
            this.showMinimized();

    }
    Rectangle {
        id: iosSafeAreaTopMargin

        color: "transparent"
        height: 40
        width: window.width
        visible: Qt.platform.os === "ios"
    }

    VPNStackView {
        id: mainStackView

        initialItem: mainView
        width: parent.width
        anchors.top: Qt.platform.os === "ios" ? iosSafeAreaTopMargin.bottom : parent.top
        height: safeContentHeight
    }

    Component {
        id: mainView

        Item {
            state: VPN.state
            states: [
                State {
                    name: VPN.StateInitialize

                    PropertyChanges {
                        target: loader
                        source: "states/StateInitialize.qml"
                    }

                },
                State {
                    name: VPN.StateAuthenticating

                    PropertyChanges {
                        target: loader
                        source: "states/StateAuthenticating.qml"
                    }

                },
                State {
                    name: VPN.StatePostAuthentication

                    PropertyChanges {
                        target: loader
                        source: "states/StatePostAuthentication.qml"
                    }

                },
                State {
                    name: VPN.StateMain

                    PropertyChanges {
                        target: loader
                        source: "states/StateMain.qml"
                    }

                },
                State {
                    name: VPN.StateUpdateRequired

                    PropertyChanges {
                        target: loader
                        source: "states/StateUpdateRequired.qml"
                    }

                },
                State {
                    name: VPN.StateSubscriptionNeeded

                    PropertyChanges {
                        target: loader
                        source: "states/StateSubscriptionNeeded.qml"
                    }

                },
                State {
                    name: VPN.StateDeviceLimit

                    PropertyChanges {
                        target: loader
                        source: "states/StateDeviceLimit.qml"
                    }

                }
            ]

            Loader {
                id: loader

                anchors.fill: parent
            }

        }

    }

    Connections {
        target: VPN
        function onViewLogsNeeded() {
            if (Qt.platform.os !== "android" &&
                    Qt.platform.os !== "ios" &&
                    Qt.platform.os !== "tvos") {
                VPN.viewLogs();
            } else {
                mainStackView.push("views/ViewLogs.qml");
            }
        }

        function onLoadAndroidAuthenticationView() {
            if (Qt.platform.os !== "android") {
                console.log("Unexpected android authentication view request!");
            }

            mainStackView.push("../platforms/android/androidauthenticationview.qml", StackView.Immediate)
        }
    }

    VPNSystemAlert {
        id: alertBox

        z: 2
    }

}
