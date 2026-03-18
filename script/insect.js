screens = document.querySelectorAll('.screen')
choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
start_btn = document.getElementById('start-btn')


start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})
