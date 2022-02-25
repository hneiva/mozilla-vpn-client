/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import QtQuick 2.5
import QtQuick.Layouts 1.14

import Mozilla.VPN 1.0
import components 0.1
import components.forms 0.1

ColumnLayout {
    id: base
    property string _inputPlaceholderText: ""
    property string _inputErrorMessage: ""
    property var _buttonOnClicked
    property alias _buttonEnabled: btn.enabled
    property alias _buttonText: btn.text
    property bool _isSignInView: (VPNAuthInApp.state === VPNAuthInApp.StateSignIn || VPNAuthInApp.state === VPNAuthInApp.StateSigningIn)

    function activeInput() {
        return _isSignInView ? passwordInput : textInput
    }

    Component.onCompleted:activeInput().forceActiveFocus();

    spacing: VPNTheme.theme.vSpacing - VPNTheme.theme.listSpacing

    ColumnLayout {
        id: col
        Layout.fillWidth: true
        spacing: VPNTheme.theme.listSpacing

        function submitInfo(input) {
            if (!input.hasError && input.text.length > 0) btn.clicked();
        }

        VPNTextField {
            id: textInput
            Layout.fillWidth: true
            _placeholderText: _inputPlaceholderText
            Keys.onReturnPressed: col.submitInfo(textInput)
            onTextChanged: if (hasError) hasError = false
        }

        VPNPasswordInput {
            id: passwordInput
            _placeholderText: _inputPlaceholderText
            Layout.fillWidth: true
            Keys.onReturnPressed: col.submitInfo(passwordInput)
            onTextChanged: if (hasError) hasError = false
        }

        VPNContextualAlerts {
            anchors.left: undefined
            anchors.right: undefined
            anchors.topMargin: undefined
            Layout.minimumHeight: VPNTheme.theme.vSpacing
            Layout.fillHeight: false
            messages: [
                {
                    type: "error",
                    message: base._inputErrorMessage,
                    visible: activeInput().hasError
                }
            ]
        }
    }

    states: [
        State {
            when: _isSignInView
            PropertyChanges {
                target: textInput
                visible: false
            }
            PropertyChanges {
                target: passwordInput
                visible: true
            }
        },
        State {
            when: !_isSignInView
            PropertyChanges {
                target: textInput
                visible: true
            }
            PropertyChanges {
                target: passwordInput
                visible: false
            }
        }
    ]

    VPNButton {
        id: btn
        Layout.fillWidth: true
        onClicked: _buttonOnClicked(activeInput().text)
    }

    Connections {
        target: VPNAuthInApp
        function onErrorOccurred(e) {
            switch(e) {
            case 2:
                base._inputErrorMessage =  VPNl18n.InAppAuthInvalidPasswordErrorMessage;
                break;
            case 4:
                base._inputErrorMessage = "email type not supported";
                break;
            case 3:
                base._inputErrorMessage = "invalid or expired verification code";
                break;
            case 8:
                base._inputErrorMessage = "too many login attempts, try again in 15 minutes";
                break;
            case 10:
                base._inputErrorMessage = "invalid 2fa unblock code";
                break;
            }

            activeInput().hasError = true;
            activeInput().forceActiveFocus();
        }
    }
}
