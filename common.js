// $(document).ready(function(){
//     $('li.links a').hover(onHover, offHover);
// });

// function onHover(){
//     var id = this.href;
//     var imgURL;
//     switch(id){
//         case "#History":
//             imgURL = "https://animalwellnessmagazine.com/wp-content/uploads/shutterstock_73922713-e1524587090701.jpg";
//             break;
//         case "#About":
//             imgURL = "logo.png";
//             break;
//         case "#Philosophy":
//             imgURL = "https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/pet-care/images/yellow-lab-puppy-high-five.jpg";
//             break;
//         default:
//             imgURL = "https://media2.s-nbcnews.com/i/newscms/2016_43/1169669/girl-dog-1-today-101626-tease_e3ef43e4afd3d5bd4b4379a64dadff3f.jpg";
//     }
//     $('body#index').css({
//         background: `url("${imgURL}") fixed no-repeat center`
//     })
// }

// function offHover(){
//     $('body#index').css({
//         background: 'url("https://media2.s-nbcnews.com/i/newscms/2016_43/1169669/girl-dog-1-today-101626-tease_e3ef43e4afd3d5bd4b4379a64dadff3f.jpg") fixed no-repeat center',
//         "background-size": "cover"
//     });
// }

// background: url("https://media2.s-nbcnews.com/i/newscms/2016_43/1169669/girl-dog-1-today-101626-tease_e3ef43e4afd3d5bd4b4379a64dadff3f.jpg") fixed no-repeat center;
// background-size: cover;


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav sticky-top") {
	  x.className += " responsive";
	  console.log(x.className);
	} else {
	  x.className = "topnav sticky-top";
	  console.log(x.className);
	}
  }

$(function () {
	$('[data-toggle="popover"]').popover();
});