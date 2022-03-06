// gsap.from('.navy', { duration: 1, y: '-100%', ease: 'bounce'})
// gsap.from('.fade', { duration: 1, opacity: 0, stagger: .5} )
// gsap.from('.slide', { duration: 1, x: '-100vw', ease: 'power2.in'})


const timeline = gsap.timeline({})
.from('.navy', { y: '-100%', ease: 'bounce'})
.from ('.fade', { opacity: 0, stagger: .5} )
.from('.slide', { x: '-100vw', ease: 'power.in'})
.fromTo('.hiya', { opacity: 0, scale: 0, rotation: 720}, { opacity: 1, scale: 1, rotation: 0},)
.from('.about', {duarion:1, opacity: 0, y: -50, })
.from('.bio', {duarion:1, y: 30, opacity: 0 })
.from('.skill', { duration: 2.5, ease: "bounce.in", x: '-100vw' });