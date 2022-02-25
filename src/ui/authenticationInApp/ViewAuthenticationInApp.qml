/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import QtQuick 2.5
import QtQuick.Layouts 1.14

import Mozilla.VPN 1.0
import components 0.1
import components.forms 0.1

Item {
    id: viewAuthenticationInApp

    Loader {
        id: loader

        asynchronous: true
        anchors.fill: parent
    }

    VPNPopup {
        Component.onCompleted: open();
        id: authError
        anchors.centerIn: parent
        focus: true
        width: Math.min(parent.width * 0.83, VPNTheme.theme.maxHorizontalContentWidth)

        ColumnLayout {
            id: col
            anchors.top: parent.top
            anchors.topMargin:40
            spacing: VPNTheme.theme.vSpacing
            Rectangle {
                id: warningIconWrapper
                Layout.preferredHeight: VPNTheme.theme.rowHeight
                Layout.preferredWidth: Layout.preferredHeight
                Layout.alignment: Qt.AlignHCenter;
                color: VPNTheme.theme.red
                radius: height / 2

                Image {
                    source: "qrc:/ui/resources/warning-white.svg"
                    antialiasing: true
                    sourceSize.height: VPNTheme.theme.windowMargin
                    sourceSize.width: sourceSize.height
                    anchors.centerIn: parent
                }
            }

            VPNTextBlock {
                id: authErrorMessage
                text: " "
                horizontalAlignment: Text.AlignHCenter
                Layout.preferredWidth: parent.width
                width: undefined
            }
        }

        Connections {
            target: VPNAuthInApp
            function onErrorOccurred(e) {
                switch(e) {
                case VPNAuthInApp.ErrorTooManyRequests:
                    authErrorMessage.text = "Too many login attempts, hold off for 15 minutes"
                    authError.open();
                    break;

                case VPNAuthInApp.ErrorEmailTypeNotSupported:
                    authErrorMessage.text = "email type not supported";
                    authError.open();
                    break;
                }
            }
        }
    }

    states: [
        State {
            name: "StateInitializing"
            when: VPNAuthInApp.state === VPNAuthInApp.StateInitializing
            PropertyChanges {
                target: loader
                source: "ViewAuthenticationInitializing.qml"
            }
        },

        State {
            name: "StateStart"
            when: VPNAuthInApp.state === VPNAuthInApp.StateStart || VPNAuthInApp.state === VPNAuthInApp.StateCheckingAccount
            PropertyChanges {
                target: loader
                source: "ViewAuthenticationStart.qml"
            }
        },

        State {
            name: "StateSignIn"
            when: VPNAuthInApp.state === VPNAuthInApp.StateSignIn || VPNAuthInApp.state === VPNAuthInApp.StateSigningIn
            PropertyChanges {
                target: loader
                source: "ViewAuthenticationSignIn.qml"
            }
        },

        State {
            when: VPNAuthInApp.state === VPNAuthInApp.StateSignUp || VPNAuthInApp.state === VPNAuthInApp.StateSigningUp
            PropertyChanges {
                target: loader
                source: "ViewAuthenticationSignUp.qml"
            }
        },

        State {
            name: "StateUnblockCodeNeeded"
            when: VPNAuthInApp.state === VPNAuthInApp.StateUnblockCodeNeeded || VPNAuthInApp.state === VPNAuthInApp.StateVerifyingUnblockCode
            PropertyChanges {
                target: loader
                source: "ViewAuthenticationUnblockCodeNeeded.qml"
            }
        },

        State {
            name: "StateVerificationSessionByEmailNeeded"
            when: VPNAuthInApp.state === VPNAuthInApp.StateVerificationSessionByEmailNeeded || VPNAuthInApp.state === VPNAuthInApp.StateVerifyingSessionEmailCode
            PropertyChanges {
                target: loader
                source: "ViewAuthenticationVerificationSessionByEmailNeeded.qml"
            }
        },

        State {
            name: "StateVerificationSessionByTotpNeeded"
            when: VPNAuthInApp.state === VPNAuthInApp.StateVerificationSessionByTotpNeeded || VPNAuthInApp.state === VPNAuthInApp.StateVerifyingSessionTotpCode
            PropertyChanges {
                target: loader
                source: "ViewAuthenticationVerificationSessionByTotpNeeded.qml"
            }
        },

        State {
            name: "StateFallbackInBrowser"
            when: VPNAuthInApp.state === VPNAuthInApp.StateFallbackInBrowser
            PropertyChanges {
                target: loader
                source: "ViewAuthenticationFallbackInBrowser.qml"
            }
        }
    ]
}
