class Game {
    constructor() {
        this.playGame = true;
        this.canvas = document.getElementsByClassName('game');
        this.ctx = this.canvas[0].getContext("2d");
    }

    sleep(time) {return new Promise((resolve) => setTimeout(resolve, time))}

    init() {
        this.loop();
        this.ctx.globalCompositeOperation = 'destination-under';
    }

    loop() {
        document.addEventListener("keydown", (e) => e.code == "Escape" ? this.playGame = false : this.playGame = true);
        
        if(this.playGame) this.sleep(60/1000).then(() => this.draw()).then(() => {this.loop()});
        else this.abort();
    }

    draw() {
       
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

//setup
document.addEventListener("DOMContentLoaded", () => {
    let game = new Game();
    game.init();
});

