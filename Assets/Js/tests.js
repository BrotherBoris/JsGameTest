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

class Pod{
    constructor(occupant, target){
        this.occupant = occupant;
        this.target = target;
    }
    
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

function begin() {
    let pod1 = new Pod(null,null);
    let pod2 = new Pod(null,null);

    pod1.occupant = cardArray[0];
    pod2.occupant = cardArray[1];
    
    pod1.target = pod2.occupant;
    pod2.target = pod1.occupant;


    console.log("p1o "+ pod1.occupant.name);
    console.log("p1t "+ pod1.target.name);

    console.log("p2o "+ pod2.occupant.name);
    console.log("p2t "+ pod2.target.name);
    graphics(pod1.occupant.name, pod2.occupant.name);
}

function graphics(t1,t2) {
    let a = document.getElementById("a");
    let b = document.getElementById("b");

    a.innerText = t1;
    b.innerText = t2;
}

begin();