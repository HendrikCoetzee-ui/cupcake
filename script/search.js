search = document.querySelector('.search')
btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
})

function goHome() {
    window.location.href = "index.html"; // Redirect to homepage
}
