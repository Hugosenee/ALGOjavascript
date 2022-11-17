var allumette1 = document.querySelector('.allumette1');
var allumette2 = document.querySelector('.allumette2');
var allumette3 = document.querySelector('.allumette3');
var allumette4 = document.querySelector('.allumette4');
var allumette5 = document.querySelector('.allumette5');
var allumette6 = document.querySelector('.allumette6');
var allumette7 = document.querySelector('.allumette7');
var allumette8 = document.querySelector('.allumette8');
var allumette9 = document.querySelector('.allumette9');
var allumette10 = document.querySelector('.allumette10');
var allumette11 = document.querySelector('.allumette11');
var allumette12 = document.querySelector('.allumette12');
var allumette13 = document.querySelector('.allumette13');
var allumette14 = document.querySelector('.allumette14');
var allumette15 = document.querySelector('.allumette15');
var allumette16 = document.querySelector('.allumette16');

var btn = document.querySelector('#btn');

var allumettes = [allumette1, allumette2, allumette3, allumette4, allumette5, allumette6, allumette7,
    allumette8, allumette9, allumette10, allumette11, allumette12, allumette13, allumette14,
    allumette15, allumette16];



allumettes.forEach(element =>
    element.addEventListener("click",function(){
        element.style.backgroundColor = "green"
        element.classList.add('a')
        const choice = document.querySelectorAll('.a')
        if (choice.length == 3){
            choice.forEach(choices =>
                choices.classList.add('remove'));
                choice.forEach(choicex =>
                    choicex.classList.remove('a'));
                    console.log(allumettes)
        }
        btn.addEventListener('click',function(){
            element.classList.add('remove')
            element.classList.remove('a')
            allumettes.splice(allumettes.indexOf(element),1)
            console.log(allumettes)
        })
        if (allumette1.classList == ('remove')){
            console.log('gagné')
        }
        if (element === allumette1){
            alert('Vous avez gagné')
        }
    })
);

