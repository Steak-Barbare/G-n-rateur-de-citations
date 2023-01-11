/*Début*/ 
let citations = [
    'Vis comme si tu devais mourir demain',
    'Ce qui est vérité',
    'Le bonheur c\'est lorsque',
    'Vivre tous simplement',
    'Soyez le changement',
]

/*Milieu*/
let citations2 = [
    'apprends comme si tu',
    'pour un, peut être',
    'vos actes sont en accord',
    'pour que tous puissent',
    'que vous désirez voir',
]

/*Fin*/
let citations3 = [
    'devais vivre toujours. -Gandhi',
    'erreur pour lautre. -Gandhi',
    'avec vos paroles. -Gandhi',
    'simplement vivre. -Gandhi',
    'dans ce monde. -Gandhi',
]

/*Séparation Citation*/

let citations4 = [
    'Le temps, l\'espace, la vue et la réalité',
    'L\'émotion la plus ancienne et la plus forte de l\'humanité est',
    'La chose la plus miséricordieuse en ce bas monde est',
    'N\'est pas mort ce qui semble à jamais dormir, ',
    'Dans sa demeure de R\'lyeh,',
]

let citations5 = [
    'ont leurs tours et détours que',
    'la peur. Et le genre le plus ancien et le plus fort',
    'l\'incapacité de l\'esprit humain à mettre en corrélation',
    'en d\'étranges éternités,',
    'le défunt Cthulhu',
]

let citations6 = [
    'seul un rêveur peut percer à jour. -H.P.Lovecraft',
    'de la peur est la peur de l\'inconnu. -H.P.Lovecraft',
    'toutes les informations qu\'il contient. -H.P.Lovecraft',
    'la mort peut même mourir. -H.P. Lovecraft',
    'attend en rêvant. -H.P. Lovecraft',
]


function nouvelleCitation() {

    let affichageCitation = document.getElementById('affichageCitation');
    if (myMenu.value == "0") {
        alert('Veuillez sélectionner une valeur');
    }
    else {
        console.log(myMenu.value)
        affichageCitation.innerHTML = "";
        for (let i = 0; i < myMenu.value; i++) {
            let randomNumber = Math.floor(Math.random() * (citations.length));
            let randomNumber2 = Math.floor(Math.random() * (citations2.length));
            let randomNumber3 = Math.floor(Math.random() * (citations3.length));
            affichageCitation.innerHTML += "<br>" + citations[randomNumber] + " " + citations2[randomNumber2] + " " + citations3[randomNumber3];
            affichageCitation.style.fontSize = '1.2em';
        }
    }
}

function nouvelleCitation2() {

    let affichageCitation2 = document.getElementById('affichageCitation2');
    if (myMenu.value == "0") {
        alert('veuillez sélectionner une valeur');
    }
    else {
        console.log(myMenu.value)
        affichageCitation2.innerHTML = "" ;
        for (let i = 0; i < myMenu.value; i++) {
            let randomNumber4 = Math.floor(Math.random() * (citations4.length));
            let randomNumber5 = Math.floor(Math.random() * (citations5.length));
            let randomNumber6 = Math.floor(Math.random() * (citations6.length));
            affichageCitation2.innerHTML += "<br>" + citations4[randomNumber4] + " " + citations5[randomNumber5] + " " + citations6[randomNumber6];
            affichageCitation2.style.color = 'white';
            affichageCitation2.style.fontSize = '1.2em';
        }
    }
}
