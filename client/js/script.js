let player = document.getElementById('player');
let gameContainer = document.getElementById('game-container');

let isShiftPressed = false;
let speed = 10;

document.addEventListener('keydown', function (event) {
    let rect = player.getBoundingClientRect();
    let containerRect = gameContainer.getBoundingClientRect();

    let newX = player.offsetLeft;
    let newY = player.offsetTop;

    let movementSpeed = isShiftPressed ? speed * 2.5 : speed;

    switch (event.code) {
        case 'KeyW':
            newY -= movementSpeed;
            break;
        case 'KeyS':
            newY += movementSpeed;
            break;
        case 'KeyA':
            newX -= movementSpeed;
            break;
        case 'KeyD':
            newX += movementSpeed;
            break;
        default:
            break;
    }

    if(event.key === 'Shift') {
        isShiftPressed = true;
    }

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX > containerRect.width - rect.width) newX = containerRect.width - rect.width;
    if (newY > containerRect.height - rect.height) newY = containerRect.height - rect.height;

    player.style.left = newX + 'px';
    player.style.top = newY + 'px';
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'Shift') {
        isShiftPressed = false;
    }
});
