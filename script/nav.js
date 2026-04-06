nav = document.querySelector('.nav')
window.addEventListener('scroll', () => {
    if(scrollY > 520) {
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
})

function goHome() {
    window.location.href = "index.html"; // Redirect to homepage
}
