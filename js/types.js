/*******************************************************************************

    httpswitchboard - a Chromium browser extension to black/white list requests.
    Copyright (C) 2013  Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/httpswitchboard
*/

/******************************************************************************/

function _WebRequestStats() {
    this.all =
    this.main_frame =
    this.stylesheet =
    this.sub_frame =
    this.script =
    this.image =
    this.object =
    this.xmlhttprequest =
    this.other =
    this.cookie = 0;
}

function WebRequestStats() {
    this.allowed = new _WebRequestStats();
    this.blocked = new _WebRequestStats();
}

function PermissionList(filters) {
    this.list = {};
    this.count = 0;
    if ( filters !== undefined ) {
        this.fromArray(filters);
    }
}

function PermissionScope() {
    this.off = false;
    this.white = new PermissionList();
    this.black = new PermissionList();
    this.gray = new PermissionList();
    this.mtxFiltering = true;
    this.abpFiltering = true;
    this.lastUsedTime = Date.now();
    this.httpsb = HTTPSB;
}

function PermissionScopes() {
    this.scopes = {};
    this.scopes['*'] = new PermissionScope();
    this.scopes['chrome-scheme'] = new PermissionScope();
    this.scopes['chrome-scheme'].whitelist('*', '*');
}
