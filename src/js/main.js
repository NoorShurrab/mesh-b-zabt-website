import { initNav }       from './modules/nav.js'
import { initReveal }    from './modules/reveal.js'
import { initCounter }   from './modules/counter.js'
import { initAccordion } from './modules/accordion.js'
import { initFilter }    from './modules/filter.js'

document.addEventListener('DOMContentLoaded', () => {
  initNav()
  initReveal()
  initCounter()
  initAccordion()
  initFilter()
})