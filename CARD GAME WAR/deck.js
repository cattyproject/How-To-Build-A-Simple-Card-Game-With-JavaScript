const SUITS=["♠","♣","♥","♦"]
const VALUES =["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

export default class Deck {
    constructor(cards=freshDeck()){
        this.cards=cards
    }

    get numberOfCards(){
        return this.cards.length
    }
    shuffle (){
        for( let i = this.numberOfCards.length -1; i>0; i--){
            const newIndex = Math.floor(Math.random *(i+1))
        }
    }
}

class Card {
    constructor(suit, value){
        this.suit=suit
        this.value=value
    }
}

function freshDeck(){
    return SUITS.flatMap(suit =>{
        return VALUES.map(value=>{
            return new Card(suit, value)
        })
    })
}