let div1 = document.getElementById("main");
let div2 = document.getElementById("main-2");
let baby = document.getElementById("baby-1")
let baby2 = document.getElementById("baby-2");


let isExpanded = false;

function display() {
    
    if (!isExpanded) {
        div1.style.height = "400px";
        baby.style.transform = "rotate(-180deg)";
        isExpanded = true;

    } else {
        div1.style.height = "60px"; // or set it to the original height
        baby.style.transform = "rotate(0deg)";
        div2.style.height = "60px";

        isExpanded = false;
    }
}
baby.addEventListener('click', display);

function displayAllTwo() {
    let div2 = document.getElementById('main-2');
    if (!isExpanded) {
        div2.style.height = "400px";
        baby2.style.transform = "rotate(-180deg)";
       div1.style.height = "60px";
        isExpanded = true;
    } else {
        div2.style.height = "60px"; // or set it to the original height
        baby2.style.transform = "rotate(0deg)";
        isExpanded = false;
    }
}
baby2.addEventListener('click', displayAllTwo);