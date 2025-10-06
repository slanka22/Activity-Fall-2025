window.addEventListener("keydown", event => {
    if (event.key == "v") {
        console.log("keydown");
        document.body.style.background = "violet";
    }
});
window.addEventListener("keyup", event => {
    if (event.key == "v") {
        console.log("keyup");
        document.body.style.background = "";
    }
});
