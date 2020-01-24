const gameField = document.getElementById("gamefield");

setInterval(() => {
    seconds += 0.01;
    totalFloat += 0.01;
    total = parseInt(totalFloat);
    document.getElementById("total").innerHTML = "total: " + total;
    document.getElementById("timer").innerHTML = "current: " + seconds.toFixed(2);
}, 10);

const generate = () => {
    x = Math.ceil(Math.random() * 1860);
    y = Math.ceil(Math.random() * 350);
    word = Math.ceil(Math.random() * 5);
    previous = seconds.toFixed(2);
    seconds = 0;
    document.getElementById("timer").innerHTML = "current: " + seconds;
    document.getElementById("previous").innerHTML = "previous: " + previous;
    if ( word === 1 ) {
        word = "Нет";
    } else word = "Да";
    gameField.innerHTML = `
    <h2 style="position: absolute; left: ${ x }px; top: ${ y }px; cursor: pointer;" onclick="generate()">${ word }</h2>
    `;
};

let word = Math.ceil(Math.random() * 5);
let seconds = 0;
let previous = 0;
let total = 0;
let totalFloat = 0;

let x = Math.ceil(Math.random() * 1860);
x += 25;
let y = Math.ceil(Math.random() * 350);

if ( word === 1 ) {
    word = "Нет";
} else word = "Да";

gameField.style.position = "relative";

gameField.innerHTML = `
    <h2 style="position: absolute; left: ${ x }px; top: ${ y }px; cursor: pointer;" onclick="generate()">${ word }</h2>
`;