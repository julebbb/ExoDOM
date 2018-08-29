//Exercise 1
var element = document.getElementsByClassName('exercise1');

//Take the button and change the color of the p background
element[0].addEventListener("click", function() {
  element[1].style.backgroundColor = "lightblue";
});

//Exercise 2
var google = document.getElementById('google');
var result = document.getElementsByTagName('p')[1];
var button = document.getElementsByTagName('button')[1];

//Table who take all names of attributes
var attribute = new Array([]);

button.addEventListener("click", function() {
  result.innerHTML = attribute;
});

for (var i = 0; i < google.attributes.length; i++) {
  attribute.push(google.attributes[i].name + " ");
}

//Exercice 3
var divSelected = document.getElementsByClassName('exercise3')[0];

divSelected.addEventListener("mouseover", function() {
  //Change background and text div when the mouse hover
  divSelected.style.background = "white";
  divSelected.childNodes[1].innerHTML = "Bienvenue !";

});

divSelected.addEventListener("mouseout", function() {
  //return to normal
  divSelected.style.background = "lightgrey";
  divSelected.childNodes[1].innerHTML = "Survolez moi !";

});

//Exercise 4
var timeElement = document.getElementsByClassName('exercise4');

timeElement[1].addEventListener("click", function(){
  timeElement[0].innerHTML = Date();
});

//Exercise 5
var time = 0;
var paragraph = document.getElementsByClassName('exercise5')[0];

var tempsPas = setInterval(temps, 1000);

function temps() {
  var date = Date();
  date = date.substr(15, 15);
  date = date.substr(0, 9);

  time = time + 1;
  paragraph.innerHTML = "Temps depuis que tu es sur la page : " + time + " s "+ "<br>" + "Il est: " + date;
}

//Exercice 6

var buttonColor = document.getElementsByClassName('exercise6')[0];
var nbrClick = 0;

buttonColor.addEventListener("click", function(){
  nbrClick++;

  if (nbrClick === 1) {
    buttonColor.style.backgroundColor = "lightblue";
  } else if (nbrClick === 2) {
    buttonColor.style.backgroundColor = "lightgrey";
  } else if (nbrClick === 3) {
    buttonColor.style.backgroundColor = "hotpink";
  }
});

//Exercice 7

var table = document.getElementById("tableau");
var buttonEx7 = document.getElementsByTagName('button')[4];
var numbLigne = 2;

buttonEx7.addEventListener("click", function(){

  numbLigne++;

  var line = document.createElement('tr');
  var cell1 = document.createElement('td');
  var cell2 = document.createElement('td');
  var text = document.createTextNode('Ligne' + numbLigne);
  var text2 = document.createTextNode('Ligne' + numbLigne);

  line.appendChild(cell1);
  line.appendChild(cell2);
  cell1.appendChild(text);
  cell2.appendChild(text2);
  table.appendChild(line);
});

//Exercice 8

var div = document.createElement('div');

var link = document.createElement('a');
var attrLink1 = document.createAttribute('href');
var attrLink2 = document.createAttribute('target');

var image = document.createElement('img');
var attrImage1 = document.createAttribute("src");
var attrImage2 = document.createAttribute('alt');

var paragraphEx8 = document.createElement('p');
var textP = document.createTextNode("description de l'image");

//add link in div
div.appendChild(link);
//add img and p in a
link.appendChild(image);
link.appendChild(paragraphEx8);

//add attribute href and target with link
link.setAttributeNode(attrLink1);
link.setAttributeNode(attrLink2);

//add attribute src and alt with link
image.setAttributeNode(attrImage1);
image.setAttributeNode(attrImage2);

//add text in p
paragraphEx8.appendChild(textP);

link.href = "#";
link.target = "_blank";

image.src = "img/img1.jpg";
image.alt = "image 1";

var main = document.getElementsByTagName('main')[0];
main.appendChild(div);

//Exercise 9

var paragraphEx9 = document.getElementsByClassName('exercise9')[0];
var imgSelected = document.getElementsByTagName('img');
var stockImg = new Array([]);

//For repete click action
for (let i = 0; i < imgSelected.length; i++) {
  imgSelected[i].addEventListener("click", function() {

    stock(this);

  });
}

function stock(element) {

  if (stockImg.length === 3) {
    //if stockImg have 3 content

    //take off img
    imgSelected[0].style.display = "none";
    imgSelected[1].style.display = "none";
    imgSelected[2].style.display = "none";
    //display the paragraph with id in table
    paragraphEx9.innerHTML = "Félicitations, vous avez cliqué sur les 3 images. Voici leurs id :" + stockImg + "," + element.id;

  } else if ((stockImg.indexOf("paon") === -1 && element.id === "paon") || (stockImg.indexOf("oiseau") === -1 && element.id === "oiseau") || (stockImg.indexOf("hibou") === -1 && element.id === "hibou")) {
    //if table are not the id
    stockImg.push(element.id);
    //take id
    element.style.cursor = "context-menu";
    //display cusor pointer and change class
    element.className = "active";
  }
}

//Exercice 10

var buttonEx10 = document.getElementsByClassName('exercise10')[1];
var divEx10 = document.getElementsByClassName('exercise10')[0];

buttonEx10.addEventListener("click", function() {
  setTimeout(change, 2000);
});

function change() {
  divEx10.innerHTML = "le contenu a changé";
}
