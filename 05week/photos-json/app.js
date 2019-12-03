let postsUL = document.getElementById("postsUL");

const url = "https://jsonplaceholder.typicode.com/photos";

function getPhotos() {
  let photos = [];
  let request = new XMLHttpRequest();

  request.onload = function() {
    console.log(this.responseText);
    photos = JSON.parse(this.responseText);
  };
  request.open("GET", url);
  request.send();
}
getPhotos();

// let photoItems = photos.map(photo => {
//     return `<li>
//                 <label>${photo.title}</label>
//                 <img src="${photo.thumbnailUrl}" />

//       </li>`;
//   });
//   postsUL.innerHTML = photoItems.join("  ");
