

class Card {
    constructor(name, maxHealth, maxDefense, maxAttack){
        this.name = name;
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
        this.maxDefense = maxDefense;
        this.currentDefense = maxDefense;
        this.maxAttack = maxAttack;
        this.currentAttack = maxAttack;
    }
    toString(){
        return "name:["+this.name+"]health:["+this.currentHealth+"/"+this.maxHealth+"]"+"defense:["+this.currentDefense+"/"+this.maxDefense+"]"+"attack:["+this.currentAttack+"/"+this.maxAttack+"]";
    }

}
newCardo = new Card("cardo",2);

function creatNewCard() {
    let newCard = new Card("jose",5);
    console.log(newCard.toString());

}

let cardArray = [];

function dumpCards(array) {
    array.push(peasant = new Card("Peasant", 2, 1, 2));
    array.push(swrdKng = new Card("Sword Knight", 3, 2, 3));
    array.push(turtleKng = new Card("Turtle Knight", 4, 7, 2));
    array.push(dragon = new Card("Dragon", 5, 5, 6));
}

dumpCards(cardArray);


for (let i = 0; i < cardArray.length; i++) {
    console.log(cardArray[i].toString());
    
}
