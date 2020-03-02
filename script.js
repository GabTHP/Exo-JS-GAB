
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
