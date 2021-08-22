
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyD_dtwhN0mXpznaMrLVPVIsCdirK5ViZ8U","authDomain":"lottery-ncn.firebaseapp.com","databaseURL":"https:\u002F\u002Flottery-ncn-default-rtdb.asia-southeast1.firebasedatabase.app","projectId":"lottery-ncn","storageBucket":"lottery-ncn.appspot.com","messagingSenderId":"667286825039","appId":"1:667286825039:web:b7c1ba803f38632b37623a","measurementId":"G-6RQ03J7DLN"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"goToLupasGithub","url":"https:\u002F\u002Fgithub.com\u002Flupas"},{"action":"goToModuleGithub","url":"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Ffirebase-module"}]
  const action = actions.find(x => x.action === e.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
