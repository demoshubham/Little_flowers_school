
document.addEventListener('DOMContentLoaded', function() {
    const navbarCollapse = document.getElementById('navbarCollapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    /* navbarToggler.addEventListener('click', function() {
       console.log("hello man");
    }); */
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            if(navbarCollapse.classList.contains('show') && !navbarToggler.classList.contains('collapsed')){
                navbarCollapse.classList.remove('show');
                navbarToggler.classList.add('collapsed');
            }
        } else {
            console.log("woowwww");
        }
        
    }


    
    /* document.addEventListener('click', function(event) {
        if (!navbarCollapse.contains(event.target) && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });

    window.addEventListener('scroll', function() {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    }); */
    
    // Handle scrolling event to close navbar
    /* window.addEventListener('scroll', function() {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    }); */
});

