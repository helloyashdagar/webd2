let colors = ["red", "blue", "green", "yellow", "pink", "orange"];
let index = 0;

function changecolor() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}

function changeheading() {
    let input = document.getElementById("inputtext").value;
    document.getElementById("heading").innerText = input;
}

function increasefont() {
    let h1 = document.getElementById("heading");
    let style = window.getComputedStyle(h1).fontSize;
    let size = parseInt(style);
    h1.style.fontSize = (size + 5) + "px";
}

function togglepara() {
    let para = document.getElementById("para");
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}