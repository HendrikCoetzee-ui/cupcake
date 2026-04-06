const colors = ['red', 'blue', 'yellow', 'green', 'pink', 'orange', 'purple', 'brown', ]
let index = 0;

function changeColor() {
    document.body.style.backgroundColor = colors[index];
    index++;

    if (index === colors.length) {
        index = 0;
    }
}

function goHome() {
    window.location.href = "index.html"; // Redirect to homepage
}
