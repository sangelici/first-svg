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
const lines = [lineOne, lineTwo, lineThree]

// we don't need to define the starting point, the starting point is what it initially is
// acts very similarly to keyframes (except easier - no percentages)
hamburger.addEventListener('mouseenter', () => {
    // lineOne will grow
    // lineOne will shrink back down
    // can also chain methods with one semicolon at the end
    // tl
    //     .to(lineOne, .25, {scaleX: 1.5})
    //     .to(lineOne, .25, {scaleX: 1});

    // staggarTo, when calling on the array of lines in this case, allows you to chain events called on each line with an added delay (0.3)
    tl.staggerTo(lines, .5, {scaleX: 1.5, repeat: 3, yoyo: true},  0.125)
})
