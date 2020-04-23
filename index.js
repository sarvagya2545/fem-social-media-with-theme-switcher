let toggler = document.querySelector('.toggle');

toggler.addEventListener('change', function() {
    document.body.classList.toggle('dark');
});