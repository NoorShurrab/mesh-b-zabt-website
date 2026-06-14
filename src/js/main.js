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
import { initReviews } from './modules/reviews.js'
import { initFaq } from './modules/faq.js'
document.addEventListener('DOMContentLoaded', () => {
  initNav()
  initReveal()
  initCounter()
  initAccordion()
  initFilter()
  initChallenges()
  initSolutions()
  initSteps()
  initPackages()
  initTestimonials()
  initReviews()
 initFaq()

})