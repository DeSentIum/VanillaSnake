// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// Usage!


class Game {

    constructor() {
        this.playGame = true;
        this.canvas = document.getElementsByClassName('game');
        this.ctx = this.canvas[0].getContext("2d");
    }

    init() {
        console.log("Hello World!");
        this.loop();

        this.ctx.globalCompositeOperation = 'destination-under';
    }

    loop() {
        document.addEventListener("keydown", (e) => {
            if(e.code == "Escape") {
                this.playGame = false;
            }
        });
        
        if(this.playGame) {
            sleep(60/1000).then(() => this.draw()).then(() => {this.loop()});
        } else {
            console.log("Exit");
            this.abort();
        }
    }

    draw() {
        let randomRed = Math.floor(Math.random() * 255);
        let randomBlue = Math.floor(Math.random() * 255);
        let randomGreen = Math.floor(Math.random() * 255);
        console.log("ddd");
        this.ctx.fillStyle = "blue";
        
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    abort() {
        document.addEventListener("keydown", (e) => {
            if(e.code == "Space") {
                this.playGame = true;
                this.loop();
            }
        });
    }

}
document.addEventListener("DOMContentLoaded", () => {
    let game = new Game();
    game.init();
});

