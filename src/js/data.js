window.cinema = {
  getMoviInfo : (data) => {

    let movieArray = [];
    let poster = '';
    let title = '';
    let type = '';
    let year = '';
    let id = '';
        let infoMovie = data.Search;
        for (eachMovie in infoMovie) {
          let moviesObj = {};
          if (infoMovie[eachMovie].Poster == "N/A") {
            poster = 'http://www.animated-gifs.eu/category_nature/space-ufo-abductions/0024.gif';
          } else {
            poster = infoMovie[eachMovie].Poster;
          }
          title = infoMovie[eachMovie].Title;
          type = infoMovie[eachMovie].Type;
          year = infoMovie[eachMovie].Year;
          id = infoMovie[eachMovie].imdbID;
          moviesObj.poster = poster;
          moviesObj.title = title;
          moviesObj.type = type;
          moviesObj.year = year;
          moviesObj.id = id;
          movieArray.push(moviesObj);
          poster = '';
          title = '';
          type = '';
          year = '';
          id = '';
        }
        return movieArray;
  },
  moviesPrint : (allmovies) => {
      let movieCard = document.getElementById('movieCard');
      let cards = '';
      for (let i = 0; i<allmovies.length; i++) {
        cards +=
        `<div class ="item>"
        <div class="row">
          <div class="col s12 m12">
            <div class="card">
              <div class="card-image">
                <img src="${allmovies[i].poster}">
              </div>
              <div class="card-content">
                <span class="card-title">${allmovies[i].title}</span>
                <p>${allmovies[i].year}</p>
                <!-- Modal Trigger -->
                  <a class="waves-effect waves-light btn modal-trigger" href="#${allmovies[i].id}">Ver</a>
              </div>
            </div>
          </div>
        </div>
        </div>
          <!-- Modal Structure -->
          <div id="${allmovies[i].id}" class="modal bottom-sheet">
            <div class="modal-content">
              <h4>${allmovies[i].title}</h4>
              <p>${allmovies[i].year}</p>
              <p>${allmovies[i].type}</p>
              <div class="card-image">
                <img src="${allmovies[i].poster}">
              </div>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
            </div>
          </div>`;
      }
      movieCard.innerHTML = cards;
      $(document).ready(function(){
        $('.modal').modal();
      });
  },
  getMovies : (apikey, movie) => {
	let movieLink = "https://www.omdbapi.com/?apikey="+apikey+"&s="+movie+"&plot=full&type=series";
	fetch(movieLink)
		.then(data => data.json())
		.then(data => {
			cinema.moviesPrint(cinema.getMoviInfo(data));
		})
		.catch(error => {
			console.log("Error", error);
		});
  }
}
