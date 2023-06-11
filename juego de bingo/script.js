var numbers = [];
for (var i = 1; i <= 75; i++) {
    numbers.push(i);
}

function generateBingoCard() {
    var card = [];
    while (card.length < 25) {
        var randomNumber = Math.floor(Math.random() * 75) + 1;
        if (!card.includes(randomNumber)) {
            card.push(randomNumber);
        }
    }
    return card;
}

function createBingoBoard(numPlayers) {
    var board = document.getElementById("bingo-board");
    for (var i = 0; i < numPlayers; i++) {
        var card = generateBingoCard();
        for (var j = 0; j < card.length; j++) {
            var cell = document.createElement("div");
            cell.textContent = card[j];
            board.appendChild(cell);
        }
    }
}

function createRouletteNumbers() {
    var wheel = document.getElementById("roulette-wheel");
    for (var i = 1; i <= 75; i++) {
        var numberDiv = document.createElement("div");
        numberDiv.className = "number";
        numberDiv.textContent = i;
        wheel.appendChild(numberDiv);
    }
}

function spinRoulette() {
    var ball = document.getElementById("roulette-ball");
    var wheel =
