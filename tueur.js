class tueur{
    constructor(name, health){
        this.name = name;
        this.health = health;
    }
}

let Jason = new tueur("Jason", 100);


class survivant{
    constructor(name, caracteristique){
        this.name = name;
        this.caracteristique = caracteristique;
    }
}

class caracteristiques{
    constructor(caracteristique, prob_dead, prob_degat, prob_dead_degat){
        this.caracteristique = caracteristique;
        this.prob_dead = prob_dead;
        this.prob_degat = prob_degat;
        this.prob_dead_degat = prob_dead_degat;
    }
}

let nerds = new caracteristiques('nerds', 0.3, 0.4, 0.7);
let blonde = new caracteristiques('blonde', 0.8, 0.3, 0.3);
let sportif = new caracteristiques('sportif', 0.5, 0.8, 0.6);
let normal = new caracteristiques('normal', 0.5, 0.5, 0.5);



let nbsurvivant = [];
let prenomArray = ["Emilien","Brevin","Arthur","Clement","Amandine","Blanche","Eva","Marvin","Quentin","Brevin","Ambre"];
let caractArray = [nerds, blonde, sportif, normal];


for (let i = 0; i < 5; i++) {
    nbsurvivant.push(new survivant(prenomArray[Math.floor(Math.random()*10)], caractArray[Math.floor(Math.random()*4)]))
}



while(Jason.health >= 0 ){
    let random_number = Math.random();
    let random_player = nbsurvivant[Math.floor(Math.random() * nbsurvivant.length)];
    if (random_player.caracteristique.prob_dead > random_number){
        console.log('Jason a tué ',random_player.name)
        nbsurvivant.splice(nbsurvivant.indexOf(random_player), 1)
    }   else if (random_player.caracteristique.prob_degat > random_number){
        Jason.health -= 10;
        console.log(random_player.name , 'a réussi à esquiver et inflige 10 de dégats à Jason')
    }   else {
        Jason.health -= 15;
        console.log(random_player.name , 'est mort mais a réussi à infliger 15 de dégats à Jason')
        nbsurvivant.splice(nbsurvivant.indexOf(random_player), 1)
    }
    if(nbsurvivant == 0){
        break
    }

}   if(nbsurvivant.length == 0){
    console.log('Jason a triomphé il lui restait ', jason.health , 'de vie')
}   else {
    console.log('Jason est vaincu, les survivants ont gagnés')
}


console.log(nbsurvivant);
