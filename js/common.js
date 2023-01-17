const menu = document.querySelector('.navbar_menu');
const toggleBtn = document.querySelector('.navbar_togleBtn');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
