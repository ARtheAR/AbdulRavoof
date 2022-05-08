const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

var particles_array = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = 6;

var color_number = Math.random() * 2.4 + 1;
var color_chooser = Math.trunc(color_number);

if (color_chooser == 2) {
    ctx.strokeStyle = "rgb(0,0,255)"
}

else {
    ctx.strokeStyle = "rgb(255,0,0)"
}

const mouse = { 
    x : null,
    y : null,
}

canvas.addEventListener("mousemove",(event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i < 2; i++) {
        particles_array.push(new Particle());
    }
})

canvas.addEventListener("click",(event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i < 50; i++) {
        particles_array.push(new Particle());
    }
})

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 40 + 1;
        this.speedX = Math.random() * 1 + -20;
        this.speedY = Math.random() * 10 - -5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2){
            this.size -= 0.5;
        }
    }

    draw() {
        const n = 5;
        const insert = 0.4;
    
        ctx.fillStyle = "rgb(25, 0, 35)";
        ctx.beginPath();
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.moveTo(0,0-this.size);

        for (let i = 0;i<n;i++) {
            ctx.rotate(Math.PI/n);
            ctx.lineTo(0,0-(this.size*insert));
            ctx.rotate(Math.PI/n);
            ctx.lineTo(0,0-this.size);
        }

        ctx.restore();
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}

function particlehandler() {
    for(let i = 0; i < particles_array.length; i++){
        particles_array[i].update();
        particles_array[i].draw();
        if(particles_array[i].size <= 0.2) {
            particles_array.splice(i ,1);
            i--;
        }
    }
}

function animate() {
    ctx.fillStyle = "rgba(25,0,35,0.6)"
    ctx.fillRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
    particlehandler();
}

animate();