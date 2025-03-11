function startGame() {
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('game-text').innerText = "You are in a dark room... Something feels off.";
}

function revealMonster() {
    const gameText = document.getElementById('game-text');
    gameText.innerText = "Suddenly, a terrifying creature emerges from the shadows!";
    
    setTimeout(() => {
        alert("A monster attacks you... GAME OVER!");
        location.reload();  // Restart the game
    }, 3000);
}