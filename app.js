const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    play: function () {
        this.secretNum = Math.floor(Math.random() *
            (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        this.getGuess()
    },
};

game.prevGuesses = [];

game.validate = function (userGuess) {
    let validGuess;
    //Checking to make sure the user's guess is a number
    isNaN(userGuess) ? validGuess = false : validGuess = true
    console.log(validGuess, userGuess);
    if (!validGuess) {
        alert(`Please enter numbers only`)
        return this.getGuess()
    }

    //Validating if the users guess is between biggestNum and smallestNum
    userGuess < 1 || userGuess > 100 ? validGuess = false : validGuess = true
    if (!validGuess) {
        alert(`Please enter numbers between ${this.smallestNum} and ${this.biggestNum}`)
        return this.getGuess()
    }
}

game.getGuess = function () {
    if (this.secretNum) {
        let userGuess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`);
        userGuess = Number(userGuess)
        this.validate(userGuess)
        console.log(typeof (userGuess));
    }
}

console.log(game);
