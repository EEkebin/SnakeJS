class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = "right";
        this.total = 0;
        this.tail = [];
        this.comb = [];
        this.dead = false;

        this.eat = function (pos) {
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.total++;
                return true;
            } else {
                return false;
            }
        };

        this.update = function () {

            if (this.total === this.tail.length) {
                for (var i = 0; i < this.tail.length - 1; i++) {
                    this.tail[i] = this.tail[i + 1];
                }
            }
            this.tail[this.total - 1] = createVector(this.x, this.y);

            if (this.comb.length > 0) {
                if (this.comb[0] === UP_ARROW && this.direction !== "down") {
                    this.direction = "up";
                } else if (this.comb[0] === DOWN_ARROW && this.direction !== "up") {
                    this.direction = "down";
                } else if (this.comb[0] === LEFT_ARROW && this.direction !== "right") {
                    this.direction = "left";
                } else if (this.comb[0] === RIGHT_ARROW && this.direction !== "left") {
                    this.direction = "right";
                }
                this.comb.splice(0, 1);
            }

            if (this.direction === "right") {
                this.x = this.x + scl;
            } else if (this.direction === "left") {
                this.x = this.x - scl;
            } else if (this.direction === "up") {
                this.y = this.y - scl;
            } else if (this.direction === "down") {
                this.y = this.y + scl;
            }

            if (this.x > width - scl || this.x < 0 || this.y > height - scl || this.y < 0) {
                this.dead = true;
            }
            for (var i = 0; i < this.tail.length; i++) {
                var pos = this.tail[i];
                var d = dist(this.x, this.y, pos.x, pos.y);
                if (d < 1) {
                    this.dead = true;
                }
            }
        };

        this.show = function () {
            fill(75, 0, 130);
            for (var i = 0; i < this.tail.length; i++) {
                rect(this.tail[i].x, this.tail[i].y, scl, scl);
            }
            fill("pink");
            rect(this.x, this.y, scl, scl);
        };
    }
}  
