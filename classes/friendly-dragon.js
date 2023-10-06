// Your code here
const Dragons = require('./dragon.js');

class FriendlyDragon extends Dragons {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals() {
        this.lifeGoals.forEach(goal =>
            console.log(`${this.name} likes to ${goal}`))

    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`;
    }



}


const puff = new FriendlyDragon(
    'Puff',
    'green',
    [
        'live by the sea',
        'frolick in the autumn mist',
        'help small children'
    ],
    'Jackie Paper'
);

console.log(puff);
console.log(puff.breathesFire());
puff.hasLifeGoals();
console.log(puff.helpsPeople());

const tooth = new FriendlyDragon(
    "Toothless",
    "black",
    [
      "save the town of Burke",
      "fly with a kid on his back",
      "hang out with Vikings"
    ],
    "Hiccup"
  );

console.log(tooth);
console.log(tooth.breathesFire());
tooth.hasLifeGoals();
console.log(tooth.helpsPeople());

module.exports = FriendlyDragon;
