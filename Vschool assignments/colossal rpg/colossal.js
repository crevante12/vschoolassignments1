const readline = require('readline-sync');
const name = readline.question(" What is you name traveler?: ");
console.log( 'Hi ' + name  +  '  Lets start our adventure! ');

readline.setDefaultOptions( { limit: ['enter', 'check items']})
const question1 = readline.keyIn('While taking you journey to the next level you encounter a mysterious forest, what would you like to do? Choose [e]nter and [c]heck items:', {limit: 'ec'})
    
if(question1 === 'e' ){
    console.log( name + ' you have entered the forrest')
}else if ( question1 === 'c'){
    console.log(name + 'All your items are safe and secure')
}

const question2 = readline.keyIn('You have entered the forest all items are accounted for, What is next?: [w]alk or [q]', {limit: 'wq'})
let inventory = []
let isfighting= true
let isAlive= true;
let isRunning=true
const playerStat = [ 
    { 
        health: 150,
        damage:110
    }]
    const enemiesArr = [
        {
            name: 'Nurd',
            health:100,
            damage:5
        },
        {
            name:'Warnurd',
            health:100,
            damage:10
        },
    {
        name: "Lordnurd",
        health:100,
        damage:15
    }
]
//let randomOpp = enemiesArr[Math.floor(Math.random()*3)].name 
//enemiesArr[Math.floor(Math.random()*3)]
function walking(){
    const index4 = readline.keyIn('No enemies in sight, [c]ontinue adventure or [q]uit', {limit:'cq'})
    let chance = Math.floor(Math.random()*3);
    console.log(index4)
    if (index4 === 'c'){
        if(chance > 0){
            fight()
        }
        
    } else {
        console.log(name + "  We are all winners! ")
        isAlive=false
    } 
}


while(isAlive===true){
    if (question2 === 'w'){
        walking()
    }
    else if (question2 === 'q'){
        console.log(name + "    we all are winners in someones eyes! ")
        isAlive=false
    } }
    
            
            function fight(){
                // while(isfighting === true) {  
                    const randomOppIndex = Math.floor(Math.random() * enemiesArr.length)
                    const randomOpp = enemiesArr[randomOppIndex]

                    const index3 = readline.keyIn (randomOpp.name + ' encountered! would you like to [a]ttack, [r]un',{limit:'ar'})
                    switch (index3) {
        case 'a' : 
            attack(randomOpp)
            break;
            case 'r':
                escape()
                break;
                default: 
                console.log('enter correct entry  f or r. ')
                break;
            }
            
         }  
        function attack(opp){
            while(isfighting === true){
            var playerStat =  {
                
                health: 150,
                damage:110,
                skull:0
            }
            let enemiesAttack = [Math.floor(Math.random()*30)]
            let playerAttack =  [Math.floor(Math.random()*30)]

            //represent the player and the enemy being alive
            // if (playerAttack>enemiesAttack){
            //     playerStat.health += 300;
            //     opp.health - playerAttack

            //  console.log('What a great hit!!!')
            // }
        //console.log(opp, "testing opp")

            if(playerStat.health > 0 && opp.health > 0) {
                playerStat.health -= enemiesAttack
                opp.health -= playerAttack
                console.log(  'your health is:' +   playerStat.health +     'The opponent'    +     opp.health   )
            }

            //represent the player dying and the enemy is alive
            if(playerStat.health < 0 && opp.health > 0) {
                lose()
           
                break
            }
            if( playerStat.health > 0 && opp.health <= 0){
                console.log(' you have defeated ' + opp.name)
                const oppIndex = enemiesArr.indexOf(opp)
                enemiesArr.splice(oppIndex, 1)
                // console.log(enemiesArr, "testing arr")
                playerStat.health += 20
                playerStat.skull ++
                console.log(  name + 'Health status:  ' +   playerStat.health )
                win()
                isfighting=== false
                break
    
            }

        
            //use indexOf to get the index of the opponent
            //inside of the paramater of splice, pass in the index of the opponent in the first parameter and the pass how many items you want to delete from the arrray(1) in the second parameter
            // enemiesArr.splice(index, 1)
//             if(playerAttack> enemiesAttack){
//                 playerStat.health += 10
//                 playerStat.skull +=  1
//                 console.log('Right in the kisser!! great hit!!')
//                 console.log(playerStat)
//                 isfighting=true
    
//   } else if( playerAttack<enemiesAttack){ 
//             playerStat.health -= 100
//     console.log('Good try to bad it hurt you more')
//     console.log( playerStat)
//     isfighting=true
//   } else {
//   console.log(' Even match of power!!!')
//   isfighting=false
//   }
        }
    }

function escape(){
    
    let playerDodge =  [Math.floor(Math.random()*10)]
    if(playerDodge < 5){
        playerStat.health -= 50
        console.log(' you could not escape and took damage!')
        console.log(playerStat)
    } else { 
        console.log(' you have gotten away')
        isRunning=false

    }
}

function lose(){
    if( playerStat.health === 0){
        console.log('you have died')
    }
}

function win(){
    if(enemiesArr.length === 0)

    console.log(name + ' you have defeated all enemies! and completed the game thank you for playing please press [q] to exit' )
}