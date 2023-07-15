class Game {
    constructor() {
        this.playGame = true;
        this.canvas = document.getElementById('game');
        this.velocity = [0, 0];
        this.position = [0.0, 0.0];
        this.deltaTime;
        this.lastFrame;
    }

    sleep(time) {return new Promise((resolve) => setTimeout(resolve, time))}

    init() {
        if(this.canvas.getContext) {
            this.ctx = this.canvas.getContext("2d");
            this.ctx.globalCompositeOperation = 'destination-over';   
            this.lastFrame = 0;
            window.requestAnimationFrame(this.loop());
        }
    }

    update() {
        // Update the state of the world for the elapsed time since last render
        document.addEventListener("keydown", (e) => e.code == "Escape" ? this.playGame = false : this.playGame = true);
        document.addEventListener("keydown", (e) => {
            for(let i = 0; i < 2; i++) {
                this.velocity[i] = 0.0;
            }
            if(e.code == "KeyD") {
                
                this.velocity[0] = 1.0;
            }
            if(e.code == "KeyW") {
                this.velocity[1] = 1.0;
            }
            if(e.code == "KeyS") {
                this.velocity[1] = -1.0;
            }
            if(e.code == "KeyA") {
                this.velocity[0] = -1.0;
            }
            console.log({"Position: ": this.position, "Velocity: ": this.velocity});
            
        });
        console.log("test");
        for(let i = 0; i < 2; i++) {
            this.position[i] += this.velocity[i];
        }
    }
      
    draw() {
        this.ctx.fillStyle = "rgb(200, 0, 0)";
        
        this.ctx.fillRect(this.position[0], this.position[1], 10, 10);
    }
      
    loop(timestamp = 0) {
        this.deltaTime = timestamp - this.lastRender;
      
        this.update();
        this.draw();
      
        this.lastFrame = timestamp;
        if(this.playGame) window.requestAnimationFrame(this.loop());
        else this.abort();
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

