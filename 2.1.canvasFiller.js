const canvas = document.querySelector('#canvasField');
const context = canvas.getContext('2d', { willReadFrequently: true });

canvas.width = 500;
canvas.height = 500;

let recursionStep = 0;

drawLine(0,0,canvas.width,0)
drawLine(canvas.width,0,canvas.width, canvas.height)
drawLine(canvas.width,canvas.height,0,canvas.height)
drawLine(0,canvas.height,0,0)


drawLine(0, 0 , 100, 100, 'red', 2);
drawCircle(100, 100, 50, 'green', 10);
drawBall(300, 300, 50, 'green', 2);
drawRect(100, 100, 75, 120, 'blue');
drawRect(300, 100, 75, 120, );

const canvasClick = (event) => {
    const x = event.pageX;
    const y = event.pageY;
    filler(x, y);

}
canvas.addEventListener('click', canvasClick);

function drawLine(x1,y1,x2,y2, color='black', width= 1) {
    context.strokeStyle = color;
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}
function drawCircle(x, y, r, color='black', width=1, antiClock=true) {
    context.strokeStyle = color;
    context.lineWidth = width;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, antiClock);
    context.stroke();
}
function drawBall(x, y, r, color='black') {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2);
    context.fill();
}
function drawRect(x, y, width, height, color='black' ) {
    context.strokeStyle = color;
    context.fillStyle = color;
    context.beginPath();
    context.rect(x, y, width, height);
    context.fill();
}

function filler (x, y) {
    recursionStep++;
    if(x < 0 || x > canvas.width || y < 0 || y > canvas.height) {return;}
    if(!isEmpty(x, y)) {return;}
    if(recursionStep === 2) {
        recursionStep = 0;
        return;
    }


    drawBall(x,y, 1);

    filler(x-10, y);
    filler(x+10, y);
    filler(x, y-10);
    filler(x, y+10);
}

function isEmpty(x, y) {
    let [red, green, blue, alpha] = context.getImageData(x, y, 1,1).data;
    return !red && !blue && !green && !alpha;
}



const timeScale= 0.1;

// setInterval(loop);
requestAnimationFrame(loop);

function loop(timestamp) {
    timestamp *= timeScale;
    requestAnimationFrame(loop);

    context.clearRect(canvas.width/2 - 100, canvas.height/2 - 100,200 * 2 + 100, 200 * 2  + 100);
    // canvas.width = canvas.width;
    // canvas.width |= 0;
    drawLine(
        canvas.width/2 - 200 * Math.cos(timestamp * Math.PI / 180),
        canvas.height/2 + 200 * Math.sin(timestamp * Math.PI / 180),
        canvas.width/2 + 200 * Math.cos(timestamp * Math.PI / 180),
        canvas.height/2 - 200 * Math.sin(timestamp * Math.PI / 180), 'gray', 8);
}

