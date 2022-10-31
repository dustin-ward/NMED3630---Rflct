var $ = Dom7;

var device = Framework7.getDevice();
var app = new Framework7({
  name: 'Rflct', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element

  id: 'io.framework7.rflct', // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});

// Login Screen Demo
$('#my-login-screen .login-button').on('click', function () {
  var username = $('#my-login-screen [name="username"]').val();
  var password = $('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br/>Password: ' + password);
});


// Text Editor Create/Destroy
$('#reflection-edit').on('click', () => {
  console.log("Creating text editor")
  $('#reflection-text').addClass('invisible')
  $('#text-editor').removeClass('invisible');
});

$('#reflection-save').on('click', () => {
  console.log("Closing text editor")

  let textEditor = app.textEditor.get('#text-editor')
  console.log(textEditor.value)
  $('#reflection-text-inner').html(textEditor.value)

  $('#reflection-text').removeClass('invisible')
  $('#text-editor').addClass('invisible')
});