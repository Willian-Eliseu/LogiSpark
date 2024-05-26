function handleKeyPress(event){
    if(event.code === "Space"){
        window.location.href = 'game.html';
    }
}

document.addEventListener('keydown', handleKeyPress);