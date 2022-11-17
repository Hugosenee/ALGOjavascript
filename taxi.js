class Personnage {
    constructor(name, health){
        this.name = name;
        this.health = health;
    }
}

var Brevin = new Personnage("Brevin", 10);

class track{
    constructor(musique, feux, random){
        this.musique = musique;
        this.feux = feux;
        this.random = random;
    }
}

var taxi = new track(
    ['Anissa ; Wejdene', 'All I want for christmas is you ; Mariah Carey', 'La Feve ; Mauvais Payeur', 'Goosebumps ; Travis Scott', 'When I was your man ; Bruno Mars', 'Duel of the fates ; John Williams'],
    30,
    Math.floor(Math.random() * (4 + 1))
);







while(Brevin.health != 0 && taxi.feux != 0){
    if(taxi.musique[taxi.random] == taxi.musique[0]){
        Brevin.health --;
        taxi.feux --;
        console.log('la musique est' , taxi.musique[taxi.random] , 'Il reste ' ,taxi.feux, 'feu et brevin n\'a plus que ', Brevin.health , 'de santé mentale')
    }   else {
        taxi.feux --;
        console.log('la musique est' , taxi.musique[taxi.random] ,'Il reste ' ,taxi.feux, 'feu')
    }
    taxi.random++;
    if(taxi.random == 5){
        taxi.random = 0;
    }
}   if(Brevin.health == 0){
    console.log('brévin est mort')
}   else {
    console.log('Brévin est arrivé chez lui')
}

