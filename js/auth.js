
import { initializeApp } from "firebase/app";
// configuracion del proyecto firebase
const firebaseConfig = {
  apiKey: "AIzaSyD3FCNrTu2BZCwRCO_akbUciaCNQc0es7o",
  authDomain: "nytimesapiproject-891e6.firebaseapp.com",
  projectId: "nytimesapiproject-891e6",
  storageBucket: "nytimesapiproject-891e6.appspot.com",
  messagingSenderId: "900368165948",
  appId: "1:900368165948:web:baec156f3893ef88ac6739"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);


//crear usario con email y password
function createAccounfromForm(name, password, email) {
    
}