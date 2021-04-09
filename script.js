

var name = "Isabella";
console.log(name);

var number = "1";
console.log(number);

const mynumber = "1";
console.log(mynumber.toString);

console.log(null || 1);

console.log('I','S','A','B','L','L','A');

console.log(2 + 3, 'hi', true);

var firstname = 'Isabella';
var lastname = 'QIAO';
console.log(firstname,lastname);

var intergers = 50 + 50; 
console.log(intergers);

var yourname = "Isabella";

var lengthstring = 'supercalifragilisticexpialidocious';
console.log(lengthstring.length);

var first_name = 'Isabella';
var last_name = 'Qiao';
console.log(first_name) == console.log(last_name);

var loopthearray = ['I', 'A', 'Q'];
loopthearray.forEach(function(item) {
  console.log(item);
});

var time = new Date().getHours();
if (time >= 19 & time <=21.40) {
  console.log ("Not_Yet");
} 
else {
  console.log ("class_begins");
}

var today = new Date();

var date = today.getFullYear()+'pinterest.com'+(today.getMonth()+1)+'pinterest.com'+today.getDate(); 

if (date = 2021 + 3 + 5) {
  console.log ("This week!");
} 
else {
  console.log ("Not this week");
}

console.log("3 Favorite restaurants:");
var restaurant = ['HaiDiLao Hotpot', 'TOKYTO SUSHI', 'Pizzahut'];
restaurant.forEach(function(item) {
  console.log(item);
});

console.log("3 Things cannot do in pandemic:");
var cantdo = ['watch movie', 'dance', 'travelling'];
cantdo.forEach(function(item) {
  console.log(item);
});

console.log("3 Places in NYC:");
var places = ['MOMA', 'Time Square', 'Central Park'];
places.forEach(function(item) {
  console.log(item);
});

console.log("3 Favourite movies:");
var movies = ['Toy Stories', 'La la land', 'Green Book'];
movies.forEach(function(item) {
  console.log(item);
});

var restaurant = ['3 Favorite restaurants:','HaiDiLao Hotpot', 'TOKYTO SUSHI', 'Pizzahut'];
var pandemic = ['3 Things cannot do in pandemic:','watch movie', 'dance', 'travelling'];
var places = ['3 Places in NYC:','MOMA', 'Time Square', 'Central Park'];
var movies = ['3 Favourite movies:','Toy Stories', 'La la land', 'Green Book'];

var items = [[restaurant],[pandemic],[places],[movies]];
console.log(items);


console.log("3 Favorite restaurants:");
var restaurant = ['HaiDiLao Hotpot', 'TOKYTO SUSHI', 'Pizzahut'];
var arrayLength = restaurant.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(restaurant[i]);
}

console.log("3 Things cannot do in pandemic:");
var cantdo = ['watch movie', 'dance', 'travelling'];
var arrayLength = pandemic.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(cantdo[i]);
}

console.log("3 Places in NYC:");
var places = ['MOMA', 'Time Square', 'Central Park'];
var arrayLength = places.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(places[i]);
}

console.log("3 Favourite movies:");
var movies = ['Toy Stories', 'La la land', 'Green Book'];
var arrayLength = movies.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(movies[i]);
}

