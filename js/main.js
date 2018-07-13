//
// var images = [
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5Y_Qu87Q4uOSkg2M9x62kxmLDffjGNn9MtaylAkdEgk8XOl4',
//   'https://defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg',
//   'http://www.slate.com/content/dam/slate/articles/health_and_science/science/2017/11/171116_SCI_trophyElephant2.jpg.CROP.promo-xlarge2.jpg'
// ];
//
// var main = document.getElementsByClassName('main')[0];
// var myBtn = document.createElement('button');
// main.className = 'col-6';
// myBtn.className = 'btn btn-outline-info';
// myBtn.textContent = 'click';
// main.appendChild(myBtn);
//
//
// var icon = document.getElementById('icon');
// icon.className = 'img-fluid'
// var counter = 0;
//
// myBtn.onclick = function imgChange() {
//   counter++;
//
//   if(counter >= images.length) {
//     counter = 0;
//   }
//   icon.src = images[counter];
// };

var animals = [];

function Animal(name, path, array) {
  this.name = name;
  this.path = path;

  populateHTML(this);
  pushToArray(array, this)
}

function pushToArray(array,item) {
  array.push(item);
}

function populateHTML(object) {
  var myP = document.createElement('p')
  var myImg = document.createElement('img')


  myP.innerText = object.name;
  myImg.src = object.path;
  myImg.className = 'img-fluid col-3';
  myImg.setAttribute('style', 'height: 200px;')

  var myDiv = document.getElementsByClassName('main')[0];
  myDiv.appendChild(myP);
  myDiv.appendChild(myImg);
}


var lion = new Animal('lion', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5Y_Qu87Q4uOSkg2M9x62kxmLDffjGNn9MtaylAkdEgk8XOl4', animals)
var tiger = new Animal('tiger', 'https://defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg', animals)
var elephant = new Animal('elephant', 'http://www.slate.com/content/dam/slate/articles/health_and_science/science/2017/11/171116_SCI_trophyElephant2.jpg.CROP.promo-xlarge2.jpg', animals)


var images = document.getElementsByTagName('img');
// var newImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGO5wKbxdUeOrtdvRjXy4yOkFNWQzBVrL-30sd9rjv3rC4iASU';

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
      document.body.style.backgroundColor = 'tomato';
    })
}
// or we can do this as same
// $('img').click(function() {
//   $('body').css('background-color', 'tomato');
// })
