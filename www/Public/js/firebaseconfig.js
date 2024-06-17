const firebaseConfig = {
  apiKey: "AIzaSyD0F7StFQPEjiVNmOQrurGIxaAD7-LJv3Y",
  authDomain: "inventory-app-e7055.firebaseapp.com",
  projectId: "inventory-app-e7055",
  storageBucket: "inventory-app-e7055.appspot.com",
  messagingSenderId: "404969365119",
  appId: "1:404969365119:web:c071c049d02b506ba9694a"
};

// Inicialización de Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage(); // Agregamos la inicialización de Firebase Storage

