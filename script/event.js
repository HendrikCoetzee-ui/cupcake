clickBox = document.querySelector('.click')
spinBox = document.querySelector('.spin')
moveBox = document.querySelector('.move')
hoverBox = document.querySelector('.hover')
dblclickBox = document.querySelector('.dblclick')
colors = ['blue', 'green', 'purple', 'red']
index = 0
clickBox.addEventListener('click', () => {
    clickBox.style.background = 'colors[index]'
    index = index + 1
    if (index == colors.length) {
        index = 0
    }
    clickBox.style.color = 'white'
})

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {
        x = x + 10
    }
    if (event.key == 'ArrowUp') {
        y = y - 10
    }
    if (event.key == 'ArrowLeft') {
        x = x - 10
    }
    if (event.key == 'ArrowDown') {
        y = y + 10
    }
    moveBox.style.transform = 'translate(${x}px, ${y}px)'
})

hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.transform = "scale(3)"
    //hoverBox.style.height = "20px"
    //hoverBox.style.width = "100px"
})

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.transform = "scale(1)"
   //hoverBox.style.height = "60px"
   //hoverbox.style.width = "250px"
})

dblclickBox.addEventListener("dblclick", () => {
    
})
