var readlineSync = require('readline-sync');
var cardUtils = require('./cardUtils');

var cards;

if(process.argv[2]) {
  cards = JSON.parse(process.argv[2])
} else {
  cards = cardUtils.shuffle(cardUtils.generateCards());
}

while(cards.length > 25){
    var computerHand = [];
    var playerHand = [];

    var compCard1 = cards.pop();
    var compCard2 = cards.pop();
    var playerCard1 = cards.pop();
    var playerCard2 = cards.pop();

    computerHand.push(compCard1);
    computerHand.push(compCard2);
    playerHand.push(playerCard1);
    playerHand.push(playerCard2);

    var playerStop = false;

    if(cardUtils.calculateHand(playerHand) != 21){
        while((!(playerStop)) && (cardUtils.calculateHand(playerHand) <= 21)){
            var stringified = cardUtils.stringifyHand(playerHand);
            console.log("Your hand is " + stringified);

            var letter = readlineSync.question('type h to (h)it or s to (s)tay: ');
            if(letter == "h"){
                var newCard = cards.pop();
                playerHand.push(newCard);
            } else{
                playerStop = true;
            }
        }
    }

    while(cardUtils.calculateHand(computerHand) < 17){
        var newCard = cards.pop();
        computerHand.push(newCard);
    }

    console.log("Your hand: " + cardUtils.stringifyHand(playerHand) + ", Computer Hand: " + cardUtils.stringifyHand(computerHand));
    console.log("The winner is: " + cardUtils.determineWinner(cardUtils.calculateHand(playerHand), cardUtils.calculateHand(computerHand)));
    console.log("\nThere are " + cards.length + " cards left in the deck");
    console.log("-------------------------------\n")

}
