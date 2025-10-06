const p = document.querySelector("p");
let fontSize = 18;
window.addEventListener("keydown", event => {
    if (event.key === "ArrowUp") {
        console.log("Up");
        fontSize *=  1.2;
        p.style.fontSize = `${fontSize}px`;
    } else if (event.key === "ArrowDown") {
        console.log("Down");
        fontSize /= 1.2;
        p.style.fontSize = `${fontSize}px`;
    }
});
