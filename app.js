const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    play: function () {
        this.secretNum = Math.floor(Math.random() *
            (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        console.log(this.secretNum);
        this.getGuess()
        this.correctGuess = false;
        this.prevGuesses = [];
    },
};

game.prevGuesses = [];
game.correctGuess = false

game.validate = function (userGuess) {
    let validGuess;
    //Checking to make sure the user's guess is a number
    isNaN(userGuess) ? validGuess = false : validGuess = true

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

    this.prevGuesses.includes(userGuess) ? validGuess = false : validGuess = true
    if (!validGuess) {
        alert(`You've already entered the number ${userGuess}, try again.`)
        return this.getGuess()
    }

    //Pushing if the guess is valid
    this.prevGuesses.push(userGuess)
    this.render(userGuess)
}

game.getGuess = function () {
    if (this.secretNum && !this.correctGuess) {
        let userGuess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`);
        userGuess = Number(userGuess)
        this.validate(userGuess)
        this.getGuess()
    } else {
        return
    }

}

game.render = function (userGuess) {
    if (userGuess === this.secretNum) {
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
        this.correctGuess = true
        return
    } else if (userGuess < this.secretNum) {
        alert(`Your guess ${userGuess} is too Low
Previous guesses ${this.prevGuesses.join(', ')}`)
    } else if (userGuess > this.secretNum) {
        alert(`Your guess ${userGuess} is too High
Previous guesses ${this.prevGuesses.join(', ')}`)
    }
}