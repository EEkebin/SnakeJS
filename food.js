class Food {
    constructor() {
        this.x = floor(random(width / scl)) * scl;
        this.y = floor(random(height / scl)) * scl;

        // While the apple is in the body of the snake, generate a new position
        while (snake.tail.some(function (pos) {
            return pos.x === this.x && pos.y === this.y;
        }, this)) {
            this.x = floor(random(width / scl)) * scl;
            this.y = floor(random(height / scl)) * scl;
        }


        this.show = function () {
            fill(255, 0, 100);
            circle(this.x + scl / 2, this.y + scl / 2, scl, scl);
        };
    }
}
