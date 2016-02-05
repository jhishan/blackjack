var generateCards = function(){
    arrayOfCards = [
    {suit: "♠", face:'A'},
    {suit: "♠", face:'2'},
    {suit: "♠", face:'3'},
    {suit: "♠", face:'4'},
    {suit: "♠", face:'5'},
    {suit: "♠", face:'6'},
    {suit: "♠", face:'7'},
    {suit: "♠", face:'8'},
    {suit: "♠", face:'9'},
    {suit: "♠", face:'10'},
    {suit: "♠", face:'J'},
    {suit: "♠", face:'Q'},
    {suit: "♠", face:'K'},
    {suit: "♥", face:'A'},
    {suit: "♥", face:'2'},
    {suit: "♥", face:'3'},
    {suit: "♥", face:'4'},
    {suit: "♥", face:'5'},
    {suit: "♥", face:'6'},
    {suit: "♥", face:'7'},
    {suit: "♥", face:'8'},
    {suit: "♥", face:'9'},
    {suit: "♥", face:'10'},
    {suit: "♥", face:'J'},
    {suit: "♥", face:'Q'},
    {suit: "♥", face:'K'},
    {suit: "♦", face:'A'},
    {suit: "♦", face:'2'},
    {suit: "♦", face:'3'},
    {suit: "♦", face:'4'},
    {suit: "♦", face:'5'},
    {suit: "♦", face:'6'},
    {suit: "♦", face:'7'},
    {suit: "♦", face:'8'},
    {suit: "♦", face:'9'},
    {suit: "♦", face:'10'},
    {suit: "♦", face:'J'},
    {suit: "♦", face:'Q'},
    {suit: "♦", face:'K'},
    {suit: "♣", face:'A'},
    {suit: "♣", face:'2'},
    {suit: "♣", face:'3'},
    {suit: "♣", face:'4'},
    {suit: "♣", face:'5'},
    {suit: "♣", face:'6'},
    {suit: "♣", face:'7'},
    {suit: "♣", face:'8'},
    {suit: "♣", face:'9'},
    {suit: "♣", face:'10'},
    {suit: "♣", face:'J'},
    {suit: "♣", face:'Q'},
    {suit: "♣", face:'K'}]
    return arrayOfCards;
};

var shuffle = function(deckOfCards){
    for(var i = deckOfCards.length-1; i > 0; i--){
        var index = (Math.floor(Math.random() * (52 - 0)));
        var temp = deckOfCards[i];
        deckOfCards[i] = deckOfCards[index];
        deckOfCards[index] = temp;
    }
    return deckOfCards;

};

var calculateHand =  function(hand){
    var valueOfHand = 0;
    var aceBag = 0;
    for(var i = 0; i < hand.length; i++){
        var card = hand[i];
        if(card.face == "J" || card.face == "Q" || card.face == "K"){
            valueOfHand += 10;
        } else if(card.face == "A"){
            aceBag += 1;
            valueOfHand += 11;
        } else{
            valueOfHand += Number(card.face);
        }
    }
    if(valueOfHand > 21){
        while(aceBag != 0){
            if(valueOfHand > 21){
                valueOfHand -= 10;
            } else{
                break;
            }
            aceBag -= 1;
        }
    }
    return valueOfHand;
};

var determineWinner = function(playerTotal, computerTotal){
    if(playerTotal > 21 && computerTotal > 21){
        return "Tie";
    } else if(playerTotal == computerTotal){
        return "Tie";
    } else{
        var differenceTo21Player = 21 - playerTotal;
        var differenceTo21Computer = 21 - computerTotal;
        if(differenceTo21Player < 0){
            return "Computer";
        } else if(differenceTo21Computer < 0){
            return "Player";
        } else{
            if(differenceTo21Player > differenceTo21Computer){
                return "Computer";
            } else{
                return "Player";
            }
        }
    }
};

var stringifyHand = function(hand){
    var stringified = "";
    for(var i = 0; i < hand.length; i++){
        stringified += hand[i].face;
        stringified += hand[i].suit;
        stringified += " ";
    }

    var handTotal = calculateHand(hand);
    stringified += "(" + handTotal + ")";
    return stringified;
}

exports.determineWinner = determineWinner;
exports.calculateHand = calculateHand;
exports.shuffle = shuffle;
exports.generateCards = generateCards;
exports.stringifyHand = stringifyHand;
