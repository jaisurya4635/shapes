let button = document.getElementById("button"); // Access button
var numberInShape = 1;
let oldValue = 0;

button.onclick = () => {
    let numberBox = parseInt(document.getElementById("number").value) || 0;
    const circle = document.getElementById("circle"); // Get actual elements
    const square = document.getElementById("square");
    const rectangle = document.getElementById("rectangle");
    const triangle = document.getElementById("triangle");

    const box = document.getElementById("box");
    const clr = document.getElementById("colour").value;

    numberBox = numberBox + oldValue; // Ensure correct numerical addition

    for (let j = numberInShape; j <= numberBox; j++) {
        let shape = document.createElement("div");
        shape.innerHTML = numberInShape;

        if (circle.checked) {
            shape.classList.add("circle");
        } else if (square.checked) {
            shape.classList.add("square");
        } else if (rectangle.checked) {
            shape.classList.add("rectangle");
            
        } else {
            document.write("Invalid Input");
        }
        shape.style.backgroundColor = clr;
        numberInShape++;
        box.appendChild(shape);
        oldValue = (document.getElementById("box").lastElementChild.innerHTML) ;
    }};