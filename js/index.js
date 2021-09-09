// Toggle Navbar
(function () {
    var toggle = document.querySelector('.toggler');
    var mainNav = document.querySelector('.menu')

    toggle.addEventListener('click', function(e) {
        mainNav.classList.toggle('active');
        toggle.classList.toggle('active');
    });
})();