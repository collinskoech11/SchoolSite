window.addEventListener('scroll',
    function(){
        var head = document.querySelector('.topnavhead');
        head.classList.toggle('fixed', window.scrollY > 400, behavior = 'smooth');
    })