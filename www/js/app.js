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

let editorIds = [
  {
    class: '#reflection-text',
    val: true
  },
  {
    class: '#reflection-edit',
    val: true
  },
  {
    class: '#reflection-save',
    val: false
  },
  {
    class: '#text-editor',
    val: false
  },
  {
    class: '#reflection-title-text',
    val: true
  },
  {
    class: '#reflection-title-edit',
    val: false
  },
]

// Text Editor Create/Destroy
function toggleEditor() {
  editorIds.forEach(id => {
    if(id.val) {
      $(id.class).addClass('invisible')
    } else {
      $(id.class).removeClass('invisible')
    }
    id.val = !id.val
  });
}

$('#reflection-edit').on('click', () => {
  toggleEditor()
  $('#reflection-title-edit input').val($('#reflection-title-text').text());
});

$('#reflection-save').on('click', () => {
  let textEditor = app.textEditor.get('#text-editor')
  $('#reflection-text-inner').html((textEditor.value ? textEditor.value : "No reflection yet..."))
  $('#reflection-title-text').text($('#reflection-title-edit input').val());
  toggleEditor()
});