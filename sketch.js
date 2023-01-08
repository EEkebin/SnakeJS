var snake;
var food;
var scl = 50;
var score = 0;
var fps = 10;

function setup() {
    createCanvas(1000, 600);
    snake = new Snake();
    food = new Food();
    frameRate(fps);
}

function draw() {
    background(45);
    snake.update();
    food.show();
    snake.show();
    if (snake.eat(food)) {
        food = new Food();
    }
    score = snake.total;
    fill(255);
    textSize(32);
    text(score * 15, 10, 30);
    if (snake.dead) {
        background(0);
        fill(255);
        textSize(32);
        textAlign(CENTER);
        text("Game Over! Your score was: " + score * 15 + "\nPress Space to start a new game.", width / 2, height / 2);
        if (keyIsPressed && keyCode === 32) {
            snake = new Snake();
            food = new Food();
            frameRate(fps);
        }
    }
}

function keyPressed() {
    if (keyCode === (UP_ARROW) || keyCode === (DOWN_ARROW) || keyCode === (LEFT_ARROW) || keyCode === (RIGHT_ARROW)) {
        snake.comb.push(keyCode);
    }
    else if (key === "p") {
        if (frameRate() === 0) {
            frameRate(fps);
        } else {
            frameRate(0);
        }
    }
}
