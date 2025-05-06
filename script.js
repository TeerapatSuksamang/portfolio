// window.addEventListener('scroll', () => {
//     console.log('Scrolling...'); // ตรวจสอบว่า scroll ทำงานหรือไม่
// });

document.addEventListener("DOMContentLoaded", function () {
    const btn_toggler = document.getElementById('btn-toggler');
    const navbar_collapse = document.getElementById('navbar-collapse');
    const open_icon = document.getElementById('open-icon');
    const close_icon = document.getElementById('close-icon');

    let isOpen = false;  // ใช้ตัวแปรเก็บสถานะเปิด/ปิดของเมนู

    // ฟังก์ชั่นเปิดเมนู
    function open_nav() {
        navbar_collapse.classList.remove('close-nav');
        navbar_collapse.classList.add('open-nav');
        open_icon.classList.remove('fade-in');
        open_icon.classList.add('fade-out');
        close_icon.classList.add('fade-in');
        close_icon.classList.remove('fade-out');
        isOpen = true; // อัปเดตสถานะเมนู
    }

    // ฟังก์ชั่นปิดเมนู
    function close_nav() {
        navbar_collapse.classList.remove('open-nav');
        navbar_collapse.classList.add('close-nav');
        close_icon.classList.remove('fade-in');
        close_icon.classList.add('fade-out');
        open_icon.classList.remove('fade-out');
        open_icon.classList.add('fade-in');
        isOpen = false; // อัปเดตสถานะเมนู
    }

    // เมนูคลิกจะเปิด/ปิด
    btn_toggler.addEventListener('click', (e) => {
        e.stopPropagation(); // หยุดการ propagation ของเหตุการณ์ คลิกที่ปุ่มจะไม่ส่งต่อไปยัง body
        if (isOpen) {
            close_nav();
        } else {
            open_nav();
        }
    });

    // ปิดเมนูเมื่อคลิกนอกเมนู
    document.body.addEventListener('click', (e) => {
        if (isOpen && !navbar_collapse.contains(e.target) && !btn_toggler.contains(e.target)) {
            close_nav();
        }
    });
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

// const sections = document.querySelectorAll('div[id]');  
// const navLinks = document.querySelectorAll('nav ul li a');

// window.addEventListener('scroll', () => {
//   let scrollY = window.pageYOffset;

//   sections.forEach(section => {
//     const sectionTop = section.offsetTop - 150;
//     const sectionHeight = section.offsetHeight;
//     const sectionId = section.getAttribute('id');

//     if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
//       navLinks.forEach(link => {
//         link.classList.remove('active-link');
//         if (link.getAttribute('href') === `#${sectionId}`) {
//           link.classList.add('active-link');
//         }
//       });
//     }
//   });
// });


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    const observerOptions = {
        root: null, // ใช้ viewport เป็น root
        rootMargin: '-50px 0px 0px 0px', // ปรับ offset ให้เหมาะสม (ชนกับ navbar)
        threshold: 0.5 // 50% ของ section ต้องอยู่ใน viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`.navbar a[href="#${id}"]`);

            if (entry.isIntersecting) {
                // เพิ่มคลาส active-link ให้กับลิงก์ที่เกี่ยวข้อง
                navLinks.forEach(link => link.classList.remove('active-link'));
                if (link) link.classList.add('active-link');
            }
        });
    }, observerOptions);

    // สังเกตทุก section
    sections.forEach(section => observer.observe(section));
});
 

// Preloader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const main = document.getElementById("main-content");

    // loader.style.display = "none";
    // main.style.display = "block";
    loader.classList.add("fade-out");
    main.classList.add("fade-in");
}); 
