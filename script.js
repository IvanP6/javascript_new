let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let vhod = document.getElementById("vhod").value;
let words = vhod.split(" ");
let button = document.getElementById("end");
let obekt = {
    name: "Чеченеца",
    age: 34
}
let predmet = {
	name: "Чеченска раница"
}
console.log(obekt);
console.log(predmet);
console.log(button);


let nx = 8;
let ny = 8;
let sqside = 50;
let herox = 2;
let heroy = 1;
let heroimg = new Image();
heroimg.src = "che.jpg";
canvas.width = nx * sqside;
canvas.height = ny * sqside;
let hero1x = 7;
let hero1y = 7;
let hero1img = new Image();
hero1img.src = "ranica.jpg"




function drawmap(){
	context.clearRect(0,0 , canvas.width, canvas.height);
	context.drawImage(heroimg, herox * sqside, heroy * sqside, sqside, sqside);
	context.drawImage(hero1img, hero1x * sqside, hero1y * sqside, sqside, sqside);

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
    if (herox == hero1x && heroy == hero1y)alert("End");
    drawmap();
}

function moveLeft() {
    herox--;
    if (herox == hero1x && heroy == hero1y)alert("End");
    drawmap();
}
function moveRight() {
    herox++;
    if (herox == hero1x && heroy == hero1y)alert("End");
    drawmap();
}
function moveUp() {
    heroy--;
    if (herox == hero1x && heroy == hero1y)alert("End");
    drawmap();
}
function moveDown() {
    heroy++;
    if (herox == hero1x && heroy == hero1y)alert("End");
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
button.onclick = function(e){
	alert("The end");
}




