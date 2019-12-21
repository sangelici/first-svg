// gsap Syntax
// duration is in seconds
// vars = properties that will be changed (size, scale, etc)
// gsap.method(element, duration, vars)

const hamburger = document.querySelector('.hamburger');
const lineOne = hamburger.querySelector('.line-one')
const lineTwo = hamburger.querySelector('.line-two')
const lineThree = hamburger.querySelector('.line-three')

//  acts as a container for tweens and other timelines, making it simple to control them as a whole and precisely manage their timing
const tl = gsap.timeline({})

// we don't need to define the starting point, the starting point is what it initially is
// acts very similarly to keyframes
hamburger.addEventListener('mouseenter', () => {
    // lineOne will grow
    tl.to(lineOne, 1, {scale: 1.5});
    // lineOne will shrink back down
    tl.to(lineOne, 1, {scale: 1})
})