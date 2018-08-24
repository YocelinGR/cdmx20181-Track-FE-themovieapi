let DB = initializing();
const authentificating = (provider) =>{
  firebase.auth().signInWithPopup(provider).then(function(result) { // Genera pantalla emergente para pedir autenticación
      // Da el Token de acceso a Google. Usar para acceder a la API de Google
      console.log("Succes");
      let token = result.credential.accessToken;
      // Datos del usuario logeado
      let user = result.user;
      console.log(user);
      // Guardar usuario
      localStorage.setItem("user", user);
      window.location.assign('showMovies.html');
    }).catch(function(error) {
      // generar error
  	  let errorCode = error.code;
      let errorMessage = error.message;
      // Este email ya esta en uso
      let email = error.email;
      console.log(email);
      // Los permisos del firebase.auth.AuthCredential ya fueron usados.
      let credential = error.credential;
      console.log(credential);
    });
  };
  // Instancias
  //  Proveedor de credenciales de Gmail. Pasa credenciales a la autenticación
  const authGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    authentificating(provider);
  };
  //  Proveedor de credenciales de facebook. Pasa credenciales a la autenticación
  const authFacebook = () => {
    let provider = new firebase.auth.FacebookAuthProvider();
    authentificating(provider);
  };
  //  Proveedor de credenciales de facebook. Pasa credenciales a la autenticación
  const authGithub = () => {
    let provider = new firebase.auth.GithubAuthProvider();
    authentificating(provider);
  };
// Evento de autenticaciíon con Gmail de Google
document.getElementById('btn-google').addEventListener('click', (event) =>{
  authGoogle();
});
// Evento de autenticaciíon con facebook
document.getElementById('btn-facebook').addEventListener('click', (event) =>{
  authFacebook();
});
// Evento de autenticaciíon con facebook
document.getElementById('btn-github').addEventListener('click', (event) =>{
  authGithub();
});
