let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let vhod = document.getElementById("vhod").value;
let words = vhod.split(" ");
let obekt = {
    name: "Чеченеца",
    age: 34
}
let predmet = {
	name: "Чеченска раница"
}
console.log(obekt);
console.log(predmet);


let nx = 8;
let ny = 8;
let sqside = 50;
let herox = 2;
let heroy = 1;
let heroimg = new Image();
heroimg.src = "che.jpg";
canvas.width = nx * sqside;
canvas.height = ny * sqside;



function drawmap(){
	context.clearRect(0,0 , canvas.width, canvas.height);
	context.drawImage(heroimg, herox * sqside, heroy * sqside, sqside, sqside);
	for (let i = 0; i < nx; i++){
		for(let j = 0; j < ny; j++){
		context.strokeRect(i * sqside, j * sqside, sqside, sqside);
		}
	}
}

drawmap();


canvas.onclick = function(e) {
    let x = e.x - canvas.offsetLeft;
    let y = e.y - canvas.offsetTop;
    herox = Math.floor(x / sqside);
    heroy = Math.floor(y / sqside);
    drawmap();
}

function moveLeft() {
    herox--;
    drawmap();
}
function moveRight() {
    herox++;
    drawmap();
}
function moveUp() {
    heroy--;
    drawmap();
}
function moveDown() {
    heroy++;
    drawmap();
}    

document.onkeypress = function(e) {
    let key = e.key;
    switch(key) {
        case "a": moveLeft(); break;
        case "s": moveDown(); break;
        case "d": moveRight(); break;
        case "w": moveUp(); break;
    }
}



