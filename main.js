const canvas = document.querySelector("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

let direction = {
    x: Math.random()*2-1,
    y: Math.random()*2-1
}

class Ball{
    constructor(x,y,size,speed){
        this.x = x,
        this.y = y,
        this.size = size,
        this.speed = speed
    }

    AnimateBall = () =>{
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); 
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
    }

    MoveBall = (dir) => { 
        dir.x = this.x <= 0 ? dir.x*-1 : this.x >= canvas.width ? dir.x*-1 : dir.x
        dir.y = this.y <= 0 ? dir.y*-1 : this.y >= canvas.height ? dir.y*-1 : dir.y 

        this.x += this.speed * dir.x
        this.y += this.speed * dir.y

        return dir
    }
}

let ball = new Ball(canvas.width/2,canvas.height/2,5,3)

/*
Animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ball.AnimateBall()
    direction = ball.MoveBall(direction)
    requestAnimationFrame(Animate);
}
Animate();
*/

setInterval(()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ball.AnimateBall()
    direction = ball.MoveBall(direction)
},10)