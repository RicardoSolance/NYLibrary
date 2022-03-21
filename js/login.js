
let formlogin = document.querySelector("form[name='formu2'");
let logout = document.querySelector("#logout");


formlogin.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = document.querySelector("#logmail").value
    let password = document.querySelector("#logPass").value
  login(email, password);
  window.location.href = "../index.html";
})

//funcion para hacer login
const login = (email, password) => {
    //metodo para hacer sign-in con email y password
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(`Se ha logado ${user.email} ID ${user.uid}`);
      alert(`Se ha logado ${user.email} ID ${user.uid}`)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Este usuario no está registrado, registrese")
    });
  
}
logout.addEventListener('click', function () {
  console.log("funciona_logout")
});

const signOut = () => {

  let user = firebase.auth().currentUser;
  firebase.auth().signOut.then(() => {
    console.log("Sale del Sistema : "+user.email)
  }).catch((error) => {
    console.log("Hubo un error : "+error)
  })
}

