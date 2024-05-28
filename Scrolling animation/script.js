window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    document.querySelectorAll('.parallax-container').forEach((container, index) => {
        const background = container.querySelector('.parallax-background');
        const offset = scrollTop - container.offsetTop;
        
        if (offset >= 0 && offset <= window.innerHeight) {
            background.style.opacity = 1;
        } else {
            background.style.opacity = 0;
        }
    });
});
