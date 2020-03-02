
//Affiche "click" dans la console quand on clique dans le Footer ! 

var footer1 = document.querySelector('footer');

  footer1.addEventListener('click', function(){
    console.log("click")
  });

//Affiche "click" dans la console avec le numéro de click ! 

var footer1 = document.querySelector('footer');
var result = 0;

  
  footer1.addEventListener('click', function(){
  result ++;
  console.log(`click numero ${result}`)
  });

// Faire marcher le Hamburger

var navbar1 = document.getElementById("navbarHeader");
var menuBouton = document.getElementsByClassName("navbar-toggler-icon")[0]

menuBouton.addEventListener('click', function(){
  navbar1.classList.toggle("collapse")

});


//Le bouton Edit qui colore le texte en rouge

var cardEdit = document.getElementsByClassName("card mb-4 box-shadow")[0];
var boutonEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
console.log(cardEdit);
console.log(boutonEdit);

boutonEdit.addEventListener('click', function(){
  cardEdit.style.color = "red";
});

// deuxieme carte devient verte et normal si on reclique dessus

var secondCardEdit = document.getElementsByClassName("card mb-4 box-shadow")[1];
var secondBoutonEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];


secondBoutonEdit.addEventListener('click', function(){
  if (secondCardEdit.style.color === 'green')
    secondCardEdit.style.color = "";
  else
    secondCardEdit.style.color ="green";

});

//disable bootstrap

var homeButton = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0];
var lnkBoot = document.getElementsByTagName("link")[0];

homeButton.addEventListener('click', function(){
  if (lnkBoot.disabled == true) 
    lnkBoot.disabled = false 
  else
    lnkBoot.disabled = true  ;

});

// exo 6


let boutonView = document.querySelectorAll('button.btn.btn-sm.btn-success')
let p = document.querySelectorAll('body > main > div > div > div > div > div > div > p')
let image = document.querySelectorAll('body > main > div > div > div > div > div > img')
let status = false

for (let i = 0; i < boutonView.length; i++) {

  let button = boutonView[i]
    button.addEventListener("mouseover", function () {

  if (status === false){
    image[i].style.width='20%'
    p[i].style.visibility='hidden'
    status = true
  }
  else {
    image[i].style.width='100%'
    p[i].style.visibility='visible'
    status = false
  }


  });
}


