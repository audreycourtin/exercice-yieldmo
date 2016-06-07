/**
 ** Javascript functionality for ym-brand components.
 **
 **
 */
setTimeout(function() {

  // Add listener to menu bars.
  if (document.getElementById('ymb_header-menu-bars')) {
    document.getElementById('ymb_header-menu-bars')
      .addEventListener('click', ymbToggleYieldmoMenu);
  }

  // Build in functionality for menu toggle if all elements exist.
  function ymbToggleYieldmoMenu() {
    var menuBars = document.getElementById('ymb_header-menu-bars'),
        c = menuBars.className;

    if (c.search('active') != -1) {
      ymb_toggleYieldmoMenuOff();
    } else {
      ymb_toggleYieldmoMenuOn();
    }
  }

  // Toggle menu to ON.
  function ymb_toggleYieldmoMenuOn() {
    if (document.getElementById('ymb_header-menu-bars')) {
      var menu = document.getElementById('ymb_header-menu-bars');
      menu.className = menu.className.replace('initial', 'active');
    }
    if (document.getElementById('ymb_header-bar')) {
      var header = document.getElementById('ymb_header-bar');
      header.className = header.className.replace('initial', 'active');
    }
    if (document.getElementById('ymb_sidenav')) {
      var sideNav = document.getElementById('ymb_sidenav');
      sideNav.className = sideNav.className.replace('initial', 'active');
    }
    if (document.getElementById('ymb_header-logo')) {
      var logo = document.getElementById('ymb_header-logo');
      logo.className = logo.className + ' ymb_header-logo-active';
    }
    if (document.getElementById('ymb_header-application-name')) {
      var appName = document.getElementById('ymb_header-application-name');
      appName.className = appName.className + ' ymb_header-application-name-active';
    }
    var links = document.getElementsByClassName('ymb_header-topnav-link');
    for (var i = 0; i < links.length; i++) {
      links[i].style.opacity = '0.0';
    }
  }
}, 800);

// Toggle menu to OFF.
var ymb_toggleYieldmoMenuOff = function() {
  if (document.getElementById('ymb_header-menu-bars')) {
    var menu = document.getElementById('ymb_header-menu-bars');
    menu.className = menu.className.replace('active', 'initial');
  }
  if (document.getElementById('ymb_header-bar')) {
    var header = document.getElementById('ymb_header-bar');
    header.className = header.className.replace('active', 'initial');
  }
  if (document.getElementById('ymb_sidenav')) {
    var sideNav = document.getElementById('ymb_sidenav');
    sideNav.className = sideNav.className.replace('active', 'initial');
  }
  if (document.getElementById('ymb_header-logo')) {
    var logo = document.getElementById('ymb_header-logo');
    logo.className = logo.className.replace('ymb_header-logo-active', '');
  }
  if (document.getElementById('ymb_header-application-name')) {
    var appName = document.getElementById('ymb_header-application-name');
    appName.className = appName.className.replace('ymb_header-application-name-active', '');
  }
  var links = document.getElementsByClassName('ymb_header-topnav-link');
  for (var i = 0; i < links.length; i++) {
    links[i].style.opacity = '1.0';
  }
};
