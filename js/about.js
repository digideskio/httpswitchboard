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

$(function() {

/******************************************************************************/

function gethttpsb() {
    return chrome.extension.getBackgroundPage().HTTPSB;
}

/******************************************************************************/

var httpsb = gethttpsb();
$('#version').html(httpsb.manifest.version);
$('#storageUsed').html(httpsb.storageQuota ? (httpsb.storageUsed / httpsb.storageQuota * 100).toFixed(1) : 0);

// Open links in the proper window
$('a[href^="http"]').attr('target', '__blank');
$('a[href^="dashboard.html"]').attr('target', 'httpsb-dashboard');

/******************************************************************************/

});