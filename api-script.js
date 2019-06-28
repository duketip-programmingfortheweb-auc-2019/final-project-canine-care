function getDog() {
    var question = 'yes';
    var breed= document.getElementById('dogSearch').value;
console.log(breed);
switch(breed) {
case "beagle":
$.getJSON("https://dog.ceo/api/breed/beagle/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "boxer":
$.getJSON("https://dog.ceo/api/breed/boxer/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "bulldog":
$.getJSON("https://dog.ceo/api/breed/bulldog/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "bull terrier":
$.getJSON("https://dog.ceo/api/breed/bullterrier/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "chihuahua":
$.getJSON("https://dog.ceo/api/breed/chihuahua/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "chow chow":
$.getJSON("https://dog.ceo/api/breed/chow/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "border collie":
$.getJSON("https://dog.ceo/api/breed/collie/border/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "corgi":
$.getJSON("https://dog.ceo/api/breed/corgi/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "dachshund":
$.getJSON("https://dog.ceo/api/breed/dachshund/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "dalmatian":
$.getJSON("https://dog.ceo/api/breed/dalmatian/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "great dane":
$.getJSON("https://dog.ceo/api/breed/dane/great/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
case "doberman":
$.getJSON("https://dog.ceo/api/breed/doberman/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "german shepherd":
$.getJSON("https://dog.ceo/api/breed/germanshepherd/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "greyhound":
$.getJSON("https://dog.ceo/api/breed/greyhound/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "basset hound":
$.getJSON("https://dog.ceo/api/breed/hound/basset/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "bloodhound":
$.getJSON("https://dog.ceo/api/breed/hound/blood/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "husky":
$.getJSON("https://dog.ceo/api/breed/husky/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "labrador":
$.getJSON("https://dog.ceo/api/breed/labrador/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "malamute":
$.getJSON("https://dog.ceo/api/breed/malamute/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "mastiff":
$.getJSON("https://dog.ceo/api/breed/mastiff/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "mexican hairless":
$.getJSON("https://dog.ceo/api/breed/mexicanhairless/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "mixed breed":
case "mutt":
case "mix":
$.getJSON("https://dog.ceo/api/breed/mix/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "newfoundland":
$.getJSON("https://dog.ceo/api/breed/newfoundland/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "pomeranian":
$.getJSON("https://dog.ceo/api/breed/pomeranian/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "poodle":
$.getJSON("https://dog.ceo/api/breed/poodle/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "pug":
$.getJSON("https://dog.ceo/api/breed/pug/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "shiba inu":
$.getJSON("https://dog.ceo/api/breed/shiba/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "golden retriever":
$.getJSON("https://dog.ceo/api/breed/retriever/golden/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "rottweiler":
$.getJSON("https://dog.ceo/api/breed/rottweiler/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "sheepdog":
$.getJSON("https://dog.ceo/api/breed/sheepdog/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "cocker spaniel":
$.getJSON("https://dog.ceo/api/breed/spaniel/cocker/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "st bernard":
$.getJSON("https://dog.ceo/api/breed/stbernard/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
case "terrier":
$.getJSON("https://dog.ceo/api/breed/terrier/images/random", function(data){
console.log(data);
var imageLink = (data.message);
console.log(imageLink);
$("#dogImage").html('<img src="' + imageLink + '" alt="Dog">');
});
break;
default:
$('#dogImage').html('<p>Sorry, no dogs of this breed could be found.</p>');
var question = 'no'
break;
};
if (question == 'yes') {
var genderArray = ['he', 'she'];
var nameArray = ['Alex', 'Leslie', 'Jesse', 'Sam', 'Bobbi', 'Biscuit', 'Adrian', 'Ash', 'Bandit', 'Bailey', 'Riley', 'Blaine', 'Charlie', 'Coco', 'Dot', 'Harper', 'Kennedy', 'Lucky', 'Muffin', 'Cookie', 'Pepper', 'Pebbles', 'Taylor', 'Phoenix', 'Pumpkin', 'Rascal', 'Shadow', 'Skylar', 'Twilight'];
var goodArray = ['friendly','good with children', 'playful', 'mellow', 'good at cheering people up', 'loyal', 'gentle'];
var badArray = ['sometimes chews on furniture', "is stubborn", 'likes digging holes in the yard', "is very hyper", 'barks at doorbells', 'can be dog-aggressive', "tries to chase squirrels all the time"];
var gender = genderArray[Math.floor(Math.random()*genderArray.length)];
console.log(gender);
if (gender == 'she') {
    var gender2 = 'her';
}else{
    var gender2 = 'him';
}
var name = nameArray[Math.floor(Math.random()*nameArray.length)];
console.log(name);
var goodQuality = goodArray[Math.floor(Math.random()*goodArray.length)];
console.log(goodQuality);
var badQuality = badArray[Math.floor(Math.random()*badArray.length)];
console.log(badQuality);
var end1 = "Adopt " + gender2 + " today!";
var end2 = "Take " + name +" home now!";
var end3 = "You should bring " + gender2 +" into your home!";
var endArray = [end1, end2, end3];
var endChoice = endArray[Math.floor(Math.random()*endArray.length)];
var description = "Even though " + name + ' ' + badQuality + ", " + gender + " is very " + goodQuality + " and sweet. " + endChoice;
console.log(description);
$('#dogDescription').html(description);
}};