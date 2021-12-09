var canvas = document.getElementById("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d')

const PIXEL_SIZE = 10
const DRAW_COLOR = '#000000'
const POINTER_COLOR = '#ff0000'

var positionX = window.innerWidth/2
var positionY = window.innerHeight/2

draw(POINTER_COLOR)

const ACTIONS_MAP = {
    'ArrowLeft': moveLeft,
    'ArrowUp': moveUp,
    'ArrowRight': moveRight,
    'ArrowDown': moveDown
}

onkeydown = function(event) {
    var keyCode = event.key
    ACTIONS_MAP[keyCode]()
}

function moveLeft() {
    draw(DRAW_COLOR)
    positionX = positionX - PIXEL_SIZE
    draw(POINTER_COLOR)
}

function moveUp() {
    draw(DRAW_COLOR)
    positionY = positionY - PIXEL_SIZE
    draw(POINTER_COLOR)
}

function moveRight() {
    draw(DRAW_COLOR)
    positionX = positionX + PIXEL_SIZE
    draw(POINTER_COLOR)
}

function moveDown() {
    draw(DRAW_COLOR)
    positionY = positionY + PIXEL_SIZE
    draw(POINTER_COLOR)
}


function draw(color) {
    context.fillStyle= color
    putPixel(positionX, positionY)
}

function putPixel(x, y) {
    context.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE)
}