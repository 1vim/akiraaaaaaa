document.querySelector("#dino").addEventListener("mousedown", sourisEnBas)
document.querySelector("#dino").addEventListener("mouseup", sourisEnHaut)


// POUR QUE LE COOKIE BOUGE :
function sourisEnBas() {
    document.querySelector("#dino").src="images/1.png"
}
function sourisEnHaut() {
    document.querySelector("#dino").src="images/2.png"
}


// LES VARIABLES !

var result = 0 // score affiché
var multiplier = 1
var prixMultiplier = 5
var compteur = 2 // prochain (affiché)
var scoreCalc = 1 // permet d'augmenter le score affiché (sorte de ponderation)
var prixAuto = 500
var compteurAuto = 1


// var score = 0
// var nb_meteorites_per_click = 1;
// document.querySelector('#dino').addEventListener('click', mettreAJourMonResult)
//         function mettreAJourMonResult(){
//             score = score + nb_meteorites_per_click;
//             document.querySelector('#result').innerHTML = 'Nombre de météorites en chemin : ' + score;
//         }


// POUR QUE LE SCORE AUGMENTE

function addRico(){
    result = result + scoreCalc
    document.querySelector('#result').innerHTML = 'Score : ' + result;
}

document.querySelector("#dino").addEventListener("click", addRico)




// VIDEOOOOO

// var video = document.getElementById("background-video");

// var btn = document.getElementById("btnVideo");


// function playAndPause () {
//     if (video.paused) {
//     video.play();
//     btn.innerHTML = " II";
//     } else {

//     video.pause();
//     btn.innerHTML = " ▶";
//     }
// }

// AU BOUT DE 100 CLICK ON MULTIPLIE PAR 2 

// Qand on arrive à 50 click/crédit, on peut acheter un multicateur
// à 50 clicks et on revient à zéro click/crédit mais les clicks compte x2

// document.querySelector("#Multiplier").addEventListener("click", function() {
//     if (score>=50) {
//         nb_meteorites_per_click = nb_meteorites_per_click * 2 ;
//         document.querySelector('#result').innerHTML == 0
//     }
//     else {
//         console.log("Pas assez de sous")
//     }
// });

//opela test pas sur de ce qui suit mais j'ai tenté
//test de faire augmenter les cookies à chaque palliers 100, 200, 300 ...


// document.querySelector("#Multiplier").addEventListener("click", function() {
//     if (score>=100) {
//         nb_meteorites_per_click = nb_meteorites_per_click * 3 ;
//         document.querySelector('#result').innerHTML == 0
//     }
//     else {
//         console.log("Pas assez de sous")
//     }
// });

// document.querySelector("#Multiplier").addEventListener("click", function() {
//     if (score>=200) {
//         nb_meteorites_per_click = nb_meteorites_per_click * 4 ;
//         document.querySelector('#result').innerHTML == 0
//     }
//     else {
//         console.log("Pas assez de sous")
//     }
// });

// document.querySelector("#Multiplier").addEventListener("click", function() {
//     if (score>=300) {
//         nb_meteorites_per_click = nb_meteorites_per_click * 5 ;
//         document.querySelector('#result').innerHTML == 0
//     }
//     else {
//         console.log("Pas assez de sous")
//     }
// });


// POUR MULTIPLIER


function multiplierfunction(){
     if (result < prixMultiplier) {
         alert("Pas sassez d'argent, charbonne plus.");
         return;
     } 
 
     scoreCalc += 1
 
     result = result - prixMultiplier
     document.querySelector('#result').innerHTML = 'Score : ' + result;
 
     prixMultiplier = prixMultiplier * 2
     document.querySelector('#prix').innerHTML = prixMultiplier + ' clicks ';
 
     compteur = compteur + 1
     document.querySelector('#compteur').innerHTML = 'X' + compteur;

 }


 document.querySelector("#multiplier").addEventListener("click", multiplierfunction)




//on corse un peu le jeu c'est tout les 200 en plus que ca se multiplie 

// document.querySelector("#Multiplier").addEventListener("click", function() {
//     if (score>=500) {
//         nb_meteorites_per_click = nb_meteorites_per_click * 6 ;
//         document.querySelector('#result').innerHTML == 0
//     }
//     else {
//         console.log("Pas assez de sous")
//     }
// });

// document.querySelector("#Multiplier").addEventListener("click", function() {
//     if (score>=700) {
//         nb_meteorites_per_click = nb_meteorites_per_click * 7 ;
//         document.querySelector('#result').innerHTML == 0
//     }
//     else {
//         console.log("Pas assez de sous")
//     }
// });

// le pallier des milles on multiplie plus vite 

// document.querySelector("#Multiplier").addEventListener("click", function() {
//     if (score>=1000) {
//         nb_meteorites_per_click = nb_meteorites_per_click * 10 ;
//         document.querySelector('#result').innerHTML == 0
//     }
//     else {
//         console.log("Pas assez de sous")
//     }
// });

//test du bouton qui click tout seul

// var score = 1
// var nb_meteorites_per_click = 1;
// document.querySelector('#dino').addEventListener('click', mettreAJourMonResult)
//         function mettreAJourMonResult(){
//             score = score + nb_meteorites_per_click;
//             document.querySelector('#result').innerHTML = 'Nombre de météorites en chemin : ' + score;
//         }


// AUTOCLICKER

function autoclick(){

    if (result < prixAuto) {
        alert("Toujours pas assez de clicks. Plus vite !");
        return;
    }
    setInterval(auto_clik, 1000)

    result = result - prixAuto
    document.querySelector('#result').innerHTML = 'Score : ' + result;

    prixAuto = prixAuto * 2
    document.querySelector('#prixAuto').innerHTML = prixAuto + ' clicks ';

    compteurAuto = compteurAuto + 1
    document.querySelector('#compteurAuto').innerHTML = compteurAuto; 
}

function auto_clik(){
    result ++
    mettreAjourAffichage(result)
}

function mettreAjourAffichage(){
    document.querySelector('#result').innerHTML = 'Score : ' + result;
}

document.querySelector("#autoclick").addEventListener("click", autoclick)




        //je comprend pas je tente un autre truc dcp :)

        //test d'une boucle 

        // autoclick 

// function autoclickEnabler() {
//   if (!autoclickOn && score >= autoclickCost) {
//     autoclick.disabled = false;
//   } else {
//     autoclick.disabled = true;
//   }
// }


function PLUIE(){

    const NB_CATS = 10;
    for (let index = 0; index < NB_CATS; index++) {
        const element = document.createElement('img');
        element.src = 'images/curseur.png'
        element.className = 'pilule'
        x = Math.round(Math.random() * 100)
        y = Math.round(Math.random() * 10)
        element.style.left = x + 'vw';
        element.style.top = y + 'vh';
        document.querySelector('body').appendChild(element)
    }

    const NB_DROITE = 10;
    for (let index = 0; index < NB_DROITE; index++) {
        const element = document.createElement('img');
        element.src = 'images/curseur2.png'
        element.className = 'droite'
        x = Math.round(Math.random() * 100)
        y = Math.round(Math.random() * 10)
        element.style.left = x + 'vw';
        element.style.top = y + 'vh';
        document.querySelector('body').appendChild(element)
    }
}

document.querySelector("#multiplier").addEventListener("click", PLUIE)