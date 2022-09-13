// BlackJack Logic
 
let cards = [] // array --> ordered list of items.
let sum =  0
let hasBlackJack = false
let isAlive =false
let message =  ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl  = document.getElementById("cards-el")
// above line can also be represented as 
// let sumEl = document.querySelector("#sum-el") --> this is more general and the above one is more specifi

//  This is how you create an object in javascript
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    // if 1 --> return 11
    // if 11-13 --> return 10
    
    let randomnumber =  Math.floor(Math.random() * 13) + 1
    if (randomnumber > 10){
        return 10 
    } else if(randomnumber===1){
        return 11
    } else { 
        return randomnumber
    }
}






function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum =  firstCard + secondCard
    renderGame()
}

function renderGame(){
    // cardsEl.textContent = "Cards : " + firstCard + " " + secondCard
    // above line can also be written as 
    cardsEl.textContent = "Cards : "  
    // Create a for loop that renders out all the cards instead of two
    for (let i = 0 ; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum : " + sum   

    if (sum<=20){
        message="Do you want to draw another card?"
    } else if (sum === 21) {
        message="YOU have got the BlackJack!"
        hasBlackJack = true
    } else {
        message="You're out of the Game"
        isAlive = false
    }
    
    messageEl.textContent = message

}

// SHort Way 

function newCardfunc(){
    // Only allow the player to get a new card if she is ALIVE and does NOT have Blackjack
    if ( isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()

    }
    
}
 

// 4 conditions
// alive no blackjack
// no alive blackjack
// no alive no blackjack

// Long Way (this is the way i did it. Logic was there but the codelines were big. learning hehe)

// function newCardfunc(){
//     let newCard = 6
//     let aftersum =  firstCard + secondCard + newCard
//     cardsEl.textContent = "Cards : " + firstCard + " " + secondCard + " " + newCard
//     sumEl.textContent = "Sum : " + aftersum
//     if (aftersum<=20){
//         message="You have no cards left"
//     } else if (aftersum === 21) {
//         message="YOU have got the BlackJack!"
//         hasBlackJack = true
//     } else {
//         message="You're out of the Game"
//         isAlive = false
//     }

//     messageEl.textContent = message
// }

// hasBlackJack Variable

// Now if we want to keep track of the game. We can add Boolean datatype variable.  
// it will be hasBlackJack variable
// console.log(hasBlackJack)
// console.log(isAlive)


// isAlive variable
// - assign value of isAlive variable to true
// - flip its value to false in appropriate code block
// Basic Principle here is - if you have more than 21 than you're out of the game that means you are not alive.
// we have assign isAlive value to true but wehn you have more than 21 that you are not alive anymore.



// Add the message variables
// sare msgs jo output me print karane the usko message variable me store kardo aur sirf last me 
// console log message kardena


// Adding a start button and linking it with startGame function

// Store the message-el paragraph in messageEl variable
//Display the message in the messageEl unsing messageEl.textContent 

// display sum

// display cards

// adding new card button 


