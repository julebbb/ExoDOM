//Exercise 1
var element = document.getElementsByClassName('exercise1');

element[0].addEventListener("click", function() {
  element[1].style.backgroundColor = "lightblue";
})

//Exercise 2
var google = document.getElementById('google');
var result = document.getElementsByTagName('p')[1];
var button = document.getElementsByTagName('button')[1];
var attribute = new Array([]);

button.addEventListener("click", function() {
  result.innerHTML = google.attributes[0];
})
for (var i = 0; i < google.attributes.length; i++) {
  // attribute.push(google.attributes[i][i]);
}
console.log(google.attributes);
