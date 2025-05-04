body = document.getElementsByTagName('body');

btn_toggler = document.getElementById('btn-toggler');
navbar_collapse = document.getElementById('navbar-collapse');

open_icon = document.getElementById('open-icon');
close_icon = document.getElementById('close-icon');

function open_nav() {
    navbar_collapse.classList.remove('close-nav');
    navbar_collapse.classList.add('open-nav');

    open_icon.classList.remove('fade-in');
    open_icon.classList.add('fade-out');

    close_icon.classList.add('fade-in');
    close_icon.classList.remove('fade-out');
}

function close_nav() {
    navbar_collapse.classList.remove('open-nav');
    navbar_collapse.classList.add('close-nav');

    close_icon.classList.remove('fade-in');
    close_icon.classList.add('fade-out');
    
    open_icon.classList.remove('fade-out');
    open_icon.classList.add('fade-in');
}

// Toggle menu
btn_toggler.addEventListener('click', () => {
    if (navbar_collapse.classList.contains('open-nav')) {
        close_nav();
    } else {
        open_nav();
    }
});

// ปิดเมื่อกดนอกเมนู
document.body.addEventListener('click', (e) => {
    if (navbar_collapse.classList.contains('open-nav') && 
        !navbar_collapse.contains(e.target) &&
        !btn_toggler.contains(e.target)
    ) {
        close_nav();
    }
});


// 

// window.addEventListener('scroll', function() {
//     const scrolled = window.pageYOffset;
//     const star = document.querySelector('.star1');
//     star.style.transform = 'translateY(' + scrolled * -0.05 + 'px)';
//   });

//   window.addEventListener('scroll', function() {
//     const scrolled = window.pageYOffset;
//     const star = document.querySelector('.star2');
//     star.style.transform = 'translateY(' + scrolled * -0.1 + 'px) scale(1.5) rotate(180deg)';
//     console.log(10);
//   });