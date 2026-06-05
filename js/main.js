//const isInPages = window.location.pathname.includes('/pages/');
//const headerPath = isInPages ? '../components/header.html' : '/components/header.html';
fetch('/components/header.html').then(res => res.text()).then(html => {
document.body.insertAdjacentHTML('afterbegin', html);
// Highlight active link
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('text-primary', 'border-b-2', 'border-primary', 'pd-1');
    }
});

// const menuBtn = document.getElementById('menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');
// const hamburgerIcon = document.getElementById('hamburger-icon');
// const closeIcon = document.getElementById('close-icon');

// if (menuBtn) {
//     menuBtn.addEventListener('click', () => {
//         const isHidden = mobileMenu.classList.toggle('hidden');
//         hamburgerIcon.classList.toggle('scale-0', !isHidden);
//         hamburgerIcon.classList.toggle('opacity-0', !isHidden);
//         closeIcon.classList.toggle('scale-0', isHidden);
//         closeIcon.classList.toggle('opacity-0', isHidden);
//     });
// }
});

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.count-up');
    const speed = 200; // يمكنك تقليل الرقم لتسريع الحركة أو زيادته لإبطائها

    const startCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
            const count = +counter.innerText;
            const inc = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + inc > target ? target : count + inc;
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    // تفعيل العداد عندما يصل المستخدم إلى القسم على الشاشة
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target); // يعمل مرة واحدة فقط عند الرؤية الأولى
            }
        });
    }, { threshold: 0.2 }); // تم تقليل النسبة لتبدأ الحركة فور ظهور جزء بسيط من الصندوق

    counters.forEach(counter => observer.observe(counter));
});