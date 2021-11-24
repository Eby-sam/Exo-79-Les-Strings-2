let pomme = document.getElementById("index-pomme");
pomme = "Elle est belle ma pomme !";

if(pomme.startsWith("Elle")){
    console.log("Elle est belle ma pomme !commence par Elle");
}

if(pomme.endsWith("!")){
    console.log("Elle est belle ma pomme !fini par !");
}


// Avec substring, récupérez le mot 'pomme' et affichez le dans le paragraphe ayant #pomme pour ID.
let pomme2 = document.getElementById("pomme");
pomme2.innerHTML = pomme.substring(18);

//Utilisez la méthode qui va bien pour transformer votre chaîne de caractères en tableau
// Créez ensuite une boucle et affichez chaque caractère sur une ligne dans le paragraphe #one-line
// Si vous en avez besoin, vous pouvez utiliser les br !

for( let i = 0; i <pomme.length; + i++){
    console.log(pomme[i]);
}
console.log(pomme.lastIndexOf('m'));