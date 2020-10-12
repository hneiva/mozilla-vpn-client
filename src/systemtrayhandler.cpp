/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "systemtrayhandler.h"
#include "mozillavpn.h"

#include <QDebug>
#include <QMenu>

SystemTrayHandler::SystemTrayHandler(const QIcon &icon, QObject *parent)
    : QSystemTrayIcon(icon, parent)
{   //% "Quit"
    m_menu.addAction(qtTrId("systrayQuit"), this, &SystemTrayHandler::quit);
    setContextMenu(&m_menu);
}

void SystemTrayHandler::controllerStateChanged()
{
    qDebug() << "Show notification";

    if (!supportsMessages()) {
        return;
    }

    switch (MozillaVPN::instance()->controller()->state()) {
    case Controller::StateOn:
        //% "Mozilla VPN connected"
        showMessage(qtTrId("systrayStatusConnected"), qtTrId("TODO"), NoIcon, 2000);
        break;

    case Controller::StateOff:
        //% "Mozilla VPN disconnected"
        showMessage(qtTrId("systrayStatusDisconnected"), qtTrId("TODO"), NoIcon, 2000);
        break;

    case Controller::StateSwitching:
        //% "Mozilla VPN switching"
        showMessage(qtTrId("systrayStatusSwitch"), qtTrId("TODO"), NoIcon, 2000);
        break;

    default:
        // Nothing to do.
        break;
    }
}
