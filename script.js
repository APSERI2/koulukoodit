console.log("Täältä tullaan!")

const canvas = document.getElementById("canvaasi")

canvas.width = 600;
canvas.height = 400;

const ctx = canvas.getContext("2d")

x = 50;

function luuppi() {




    ctx.clearRect(0,0,600,400);

    ctx.fillStyle = "red";
    ctx.fillRect(50, 150, 150, 70);

    ctx.beginPath();
    ctx.arc(120, 150, 50, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(85, 250, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(85, 250, 30, 0, 2 * Math.PI);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(175, 250, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(175, 250, 30, 0, 2 * Math.PI);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.clearRect(0,0,600,400);

    ctx.fillStyle = "red";
    ctx.fillRect(x, 150, 150, 70);

    ctx.beginPath();
    ctx.arc(x+70, 160, 50, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x+35, 250, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x+35, 250, 30, 0, 2 * Math.PI);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x+125, 250, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x+125, 250, 30, 0, 2 * Math.PI);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 8;
    ctx.stroke();

    x = x + 5;
    if (x >650) x = -150

}

setInterval(luuppi, 10);