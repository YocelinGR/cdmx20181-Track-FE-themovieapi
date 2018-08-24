// Inicializar variables que aseguran la conexión a firebase
let DB = initializing();
const getUserActivity = () => {
	firebase.auth().onAuthStateChanged(user =>{
		if(user){
			let apikey = "6f93936";
			let disney = "Disney";
			let pirates = "Pirates";
			let sherlock = "Sherlock";

			let btnDisney = document.getElementById("btn-disney");
			let btnPirates = document.getElementById("btn-pirates");
			let btnSherlock = document.getElementById("btn-sherlock");

			if (user.displayName === null) {
				document.getElementById("user").innerHTML = user.email;
			} else {
				document.getElementById("user").innerHTML = user.displayName;
			}
			btnDisney.addEventListener("click", (event) => {
				event.preventDefault();
				let allmoviesD = cinema.getMovies(apikey, disney);
			});

			btnPirates.addEventListener("click", (event) => {
				event.preventDefault();
				let allmoviesP = cinema.getMovies(apikey, pirates);
			});

			btnSherlock.addEventListener("click", (event) => {
				event.preventDefault();
				let allmoviesS = cinema.getMovies(apikey, sherlock);
			});
			// Función de logOut
			document.getElementById("btn-logOut").addEventListener("click", event => {
				event.preventDefault();
				firebase.auth().signOut()
					.then(element => {
						location.href("../index.html");
					}).catch(error => {
						console.log("Error al cerrar sesión");
					});
			});
		} else  {
			location.href = ("../index.html");
		}
	});
};
getUserActivity();
// jquery modal
$(document).ready(function(){
	$(".modal").modal();
});
