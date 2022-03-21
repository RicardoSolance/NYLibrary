
let formlogin = document.querySelector("form[name='formu2'");

formlogin.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = document.querySelector("#logmail").value
    let password = document.querySelector("#logPass").value
     console.log(email, password);
  login(email, password);
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
    });
  
  }