const readline = require('readline-sync');

function prompt(string) {
  console.log('=>' + string);
}

function initializeDeck() {
  const suits = ['hearts', 'spades', 'clubs', 'diamonds'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let card = {suit : suits[i], value : values[j]};
      deck.push(card);
    }
  }

  return deck;
}

function shuffle(deck) {
  for (let index = 0; index < deck.length; index++) {
    let otherIndex = Math.floor(Math.random() * deck.length);
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }

}

function deal(deck, playerCards, dealerCards) {
  shuffle(deck);
  playerCards.push(deck.shift(), deck.shift());
  dealerCards.push(deck.shift(), deck.shift());
  console.log(deck.length);

}

function showCards(playerCards, dealerCards) {
  console.log('You have');
  for (let i = 0; i < playerCards.length; i++) {
    prompt(playerCards[i]['value'] + ' of ' + playerCards[i]['suit']);
  }
  console.log('Dealer has');
  let randomIndex = Math.floor(Math.random() * 2);
  prompt(dealerCards[randomIndex]['value'] + ' of ' + dealerCards[randomIndex]['suit'] + ' and unknown');
}

function playerTurn(deck, playerCards, dealerCards) {
  while (true) {
    prompt('Hit or Stay? (h or s)');
    let choice = readline.question();
    if (choice === 's') break;
    else if (choice === 'h') {
      playerCards.push(deck.shift());
    }
    showCards(playerCards,dealerCards);
  }
}
let playerCards = [];
let dealerCards = [];
let deck = initializeDeck();
deal(deck, playerCards, dealerCards);

console.log(playerCards, dealerCards);

showCards(playerCards,dealerCards);

playerTurn(deck, playerCards, dealerCards);

