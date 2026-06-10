import { initNav }       from './modules/nav.js'
import { initReveal }    from './modules/reveal.js'
import { initCounter }   from './modules/counter.js'
import { initAccordion } from './modules/accordion.js'
import { initFilter }    from './modules/filter.js'
import { initChallenges } from './modules/challenges.js'
import { initSolutions } from './modules/solutions.js'
import { initSteps } from './modules/steps.js'
import { initPackages } from './modules/packages.js'
import { initTestimonials } from './modules/testimonials.js';
import { initFAQ } from './modules/faq.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav()
  initReveal()
  initCounter()
  initAccordion()
  initFilter()
})
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.count-up');
    const speed = 200; 
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

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);  
            }
        });
    }, { threshold: 0.2 });
    counters.forEach(counter => observer.observe(counter));
});


