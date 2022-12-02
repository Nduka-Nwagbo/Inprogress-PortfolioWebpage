const navToggle = document.querySelector('.navtoggle');
const navLinks = document.querySelectorAll('.nav_link')
navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open')
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})