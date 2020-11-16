/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import QtQuick 2.5
import QtQuick.Controls 2.15
import QtQuick.Layouts 1.15
import Mozilla.VPN 1.0
import "../themes/themes.js" as Theme

VPNButtonBase {
    id: iconButton

    property var accessibleName
    property var buttonColorScheme: Theme.iconButtonLightBackground

    height: Theme.rowHeight
    width: Theme.rowHeight

    Accessible.name: accessibleName
    Component.onCompleted: state = uiState.stateDefault

    VPNToolTip {
        text: accessibleName
    }

    VPNMouseArea {
        id: mouseArea
    }

    VPNUIStates {
        itemToFocus: iconButton
        colorScheme: buttonColorScheme
    }

}
