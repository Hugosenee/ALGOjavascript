/*
EXO IF ://///////////////////////////

const a = 1;
const b = 4;
const c = 2;


if (a === b) {
    console.log('c egal');
}

if (c < b && a + c !== 3) {
    console.log('ok');
} else {
    console.log('c raté');
}
*/


/*const a = 4
const b = 4
const c = 3

switch(a){
    case b :
        console.log('égal a b');
        break;
    case c :
        console.log('égal a c');
        break;
    default:
        console.log('égal a rien');
}*/

/*var a = 5

for(let i = 0; i < a ; i++){
    console.log('oklm')
}*/

/*var a = 3

while(a < 9){
    a++;
    if(a == 8){
        break
    }
    if(a == 7){
        continue
    }
    console.log(a)
}
console.log('j\'ai cassé la boucle de '+ a +' tours');*/

/*var a = 'Hugo'
var b = 'Paul'
var result = verif(a, b)

function verif(nom1,nom2){
    return nom1 === nom2;
}
console.log(result)*/

/*let names = [];

names.push('Vincent','Paul','Arthur');

names.forEach(name=>{
    name += ' va à la pêche';
    console.log(name)
})
*/



class Pokemon {
    constructor( name, attack,defense,hp,luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky(){
        if(Math.random() > this.luck){
            return true
        } else {
            return false
        }
    }
    attackPokemon(anPokemon){
        if(this.isLucky > this.attack){
            let degats = this.attack - anPokemon.defense
            anPokemon.hp -= degats
        }
    }
}

let Carapuce = new Pokemon("Carapuce", 10, 9, 20, 0.5);
let Salameche = new Pokemon("Salameche", 7, 6, 20, 0.8);

while (Carapuce.hp > 0 && Salameche.hp > 0) {
    Carapuce.attackPokemon(Salameche)
    console.log(Carapuce.name + " a infligé " + Carapuce.attack + " dégâts. Il reste " + Salameche.hp + "hp à Pika");
    if (Salameche.hp <= 0){
        console.log("Salameche est mort. GAME OVER");
        break
    } else {
        Salameche.attackPokemon(Carapuce)
        console.log(Salameche.name + " a infligé " + Salameche.attack + " dégâts. Il reste " + Carapuce.hp + "hp à Bulbi");
        if (Carapuce.hp <= 0){
            console.log("Carapuce est mort. GAME OVER");
            break
        }
    }
}








