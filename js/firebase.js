
  // Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCXGa4sx6GW-naaDKhsxhrKOcyAixFI6kU",
  authDomain: "nytimesapi-b9bff.firebaseapp.com",
  projectId: "nytimesapi-b9bff",
  storageBucket: "nytimesapi-b9bff.appspot.com",
  messagingSenderId: "1079520698742",
  appId: "1:1079520698742:web:dff0d7d1c25b68aa765a57"
};
 // Initialize Firebase
firebase.initializeApp(firebaseConfig)
//const app = initializeApp(firebaseConfig);
//---------------------- FIRESTORE SECTION ------------------------------------------------
const db = firebase.firestore();  //db representa mi BBDD
const createUser = (user) => {
   db.collection("users")
     .add(user)
     .then((docRef) => console.log("Document written with ID: ", docRef.id))
     .catch((error) => console.error("Error adding document: ", error));
 };
//----------------------------------------------------------------------------------
let enviar = document.querySelector("#enviar");
let form = document.querySelector("form[name='formulario'")
let containerMain = document.querySelector("#login-container");



//hacer  y login por primera vez
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.querySelector("#userName").value;
  let password = document.querySelector("#userPass").value;
  let password2 = document.querySelector("#userPass2").value;
  let email = document.querySelector("#umail").value;

  if (password === password2) {
    //llamamo a la funcion de autententicacion, pasandole los valores obtenidos en el formulario de registo
    signInUser(name,email,password)
    
  } else {
    alert("Las contraseñas no coinciden");
  }
  

  form.reset();
})


//funcion que te registra y autentica por primera vez
const signInUser = (name,email,password)=> {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(`Se ha logado ${user.email} ID ${user.uid}`);
    alert(`Se ha logado ${user.email} ID ${user.uid}`)
    console.log(user);
    createUser({
      id: user.uid,
      name: name,
      password: password,
      email: email
    })

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

//funcion firebase para hacer login por email y contraseña
const login = (email, password) => {
  //metodo para hacer sign in con email y password
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

}

function loginObserver() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function divAlert() {
  let alerta = document.querySelector("#alerta");
  alerta.style.diplay = "flex";
  alerta.innerHTML = `<h3>usuario registrado </h3>`
  // setTimeout(function() {
  //   alerta.style.diplay = "none";
  // }, 2500)
  
}


    
