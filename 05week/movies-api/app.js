//textbox
const textbox = document.getElementById("textbox");
const movieUL = document.getElementById("movieUL");

//button
const button = document.getElementById("button");
button.addEventListener("click", () => {
  let textInput = textbox.value;
  searchMovie(textInput);
});

//searching for movies
function searchMovie(keyword) {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=54ba1cc9&`;

  let request = new XMLHttpRequest();

  request.open("GET", url);
  request.send();

  request.onload = function() {
    let movies = JSON.parse(this.response).Search;
    updateUI(movies);
  };
}
function updateUI(movies) {
  let moviesPost = movies.map(movie => {
    return `<li> <label>${movie.Title}</label>
                  <img src="${movie.Poster}" />`;
  });
  movieUL.innerHTML = moviesPost.join("  ");
}
