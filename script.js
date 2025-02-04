document.addEventListener('DOMContentLoaded', function() {
    const colors = ["teal", "coral", "olive", "maroon", "navy", "chocolate"];
    let score = 0;
    let targetColor = '';
    let gameActive = true; 

    const colorBox = document.querySelector('[data-testid="colorBox"]');
    const colorOptions = document.querySelectorAll('[data-testid="colorOption"]');
    const gameStatus = document.querySelector('[data-testid="gameStatus"]');
    const scoreDisplay = document.querySelector('[data-testid="score"]');
    const newGameButton = document.querySelector('[data-testid="newGameButton"]');

    function startNewGame() {
        gameActive = true; 
        targetColor = colors[Math.floor(Math.random() * colors.length)];
        colorBox.style.backgroundColor = targetColor;

        const shuffledColors = colors.slice().sort(() => 0.5 - Math.random());
        colorOptions.forEach((button, index) => {
            const randomColor = shuffledColors[index];
            button.style.backgroundColor = randomColor;
            button.onclick = () => checkGuess(randomColor);
        });

        gameStatus.textContent = '';
        gameStatus.className = '';
    }

    function checkGuess(color) {
        if (!gameActive) {
            gameStatus.textContent = 'Please click "New Game" to start a new round.';
            gameStatus.className = 'warning';
            return;
        }

        if (color === targetColor) {
            gameStatus.textContent = 'Correct! Well done!';
            gameStatus.className = 'correct';
            score++;
            scoreDisplay.textContent = score;
            gameActive = false; 
        } else {
            gameStatus.textContent = 'Wrong! Try again!';
            gameStatus.className = 'wrong';
            gameActive = false; 
        }
    }

    newGameButton.addEventListener('click', startNewGame);

    startNewGame();
});