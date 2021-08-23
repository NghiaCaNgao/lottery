export default {
  head: {
    title: "Lottery",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: [],

  plugins: ["~/plugins/element", { src: "~/plugins/unicons", mode: "client" }],

  components: true,

  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/firebase",
    "vue-toastification/nuxt"
  ],

  // Toast NOtifications config
  toast: {},

  // Router
  router: {
    middleware: "auth"
  },

  // Axios config
  axios: {},

  // PWA config
  pwa: {
    // disable the modules you don't need
    meta: false,
    icon: false,

    workbox: {
      importScripts: ["/firebase-auth-sw.js"],
      dev: process.env.NODE_ENV === "development"
    },

    manifest: {
      lang: "en"
    }
  },

  // Firebase config
  firebase: {
    config: {
      apiKey: "AIzaSyD_dtwhN0mXpznaMrLVPVIsCdirK5ViZ8U",
      authDomain: "lottery-ncn.firebaseapp.com",
      databaseURL:
        "https://lottery-ncn-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "lottery-ncn",
      storageBucket: "lottery-ncn.appspot.com",
      messagingSenderId: "667286825039",
      appId: "1:667286825039:web:b7c1ba803f38632b37623a",
      measurementId: "G-6RQ03J7DLN"
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: "onAuthStateChanged"
        },
        ssr: true
      },
      firestore: {
        memoryOnly: false,
        enablePersistence: true
      },
      storage: true,
      database: true,
      performance: true,
      analytics: true,
      messaging: {
        createServiceWorker: true,
        actions: [
          {
            action: "goToLupasGithub",
            url: "https://github.com/lupas"
          },
          {
            action: "goToModuleGithub",
            url: "https://github.com/nuxt-community/firebase-module"
          }
        ],
        fcmPublicVapidKey:
          "BKEjWgybC6Y8QMhs3LQGkkpbO3W1lpnAkGY-UnAA_DB5Xxu0mJMjQvjzwVI2uukp8-I3cL0857pttjedkFXjjCI"
      }
    }
  },

  build: {}
};
