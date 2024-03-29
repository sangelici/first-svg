// gsap Syntax
// duration is in seconds
// vars = properties that will be changed (size, scale, etc)
// gsap.method(element, duration, vars)

const hamburger = document.querySelector('.hamburger');
const lineOne = hamburger.querySelector('.line-one')
const lineTwo = hamburger.querySelector('.line-two')
const lineThree = hamburger.querySelector('.line-three')

const lines = [lineOne, lineTwo, lineThree]

//  acts as a container for tweens and other timelines, making it simple to control them as a whole and precisely manage their timing
const tl = gsap.timeline({})
const toggleMenu = gsap.timeline({paused: true, reversed: true})

// we don't need to define the starting point, the starting point is what it initially is
// acts very similarly to keyframes (except easier - no percentages)
hamburger.addEventListener('mouseenter', () => {
    // hover event listener will only work when the js-x class is not present!
    // if statement returns, it will never reach the 'tl.staggerTo()' line
    if (hamburger.classList.contains('js-x')) {
        return
    }
    // lineOne will grow
    // lineOne will shrink back down
    // can also chain methods with one semicolon at the end
    // tl
    //     .to(lineOne, .25, {scaleX: 1.5})
    //     .to(lineOne, .25, {scaleX: 1});

    // staggarTo, when calling on the array of lines in this case, allows you to chain events called on each line with an added delay (0.3)
    tl.staggerTo(lines, .5, {scaleX: 1.5, transformOrigin: "50% 50%", repeat: 1, yoyo: true, ease: Power2.easeInOut},  0.125)
})


// "cross" label will fire all animations labelled "cross" at the same time
// adding =+1 will add a delay to the label
toggleMenu
    .to(lineTwo, .25, {scaleX: 0})
    // line 1 + 3 slide down to the center to form "one line"
    .to(lineOne, .25, {transformOrigin: "50% 50%", y: 8, ease: Power2.easeInOut}, "slide")
    .to(lineThree, .25, {transformOrigin: "50% 50%", y: -8, ease: Power2.easeInOut}, "slide")
    // line 1 + 3 angle to form an 'X'
    .to(lineOne, .25, {rotation: 45, ease: Power2.easeInOut}, "cross")
    .to(lineThree, .25, {rotation: -45, ease: Power2.easeInOut}, "cross");;

    // Center line disappears and lines 1 + 3 cross to form an 'X'
    // .to(lineOne, .25, {rotation: 45, transformOrigin: "50% 50%", y: 8, ease: Power2.easeInOut}, "cross")
    // .to(lineThree, .25, {rotation: -45, transformOrigin: "50% 50%", y: -8, ease: Power2.easeInOut}, "cross");

hamburger.addEventListener('click', () => {
    // 'js' - this class is only here for javascript purposed only, x is for cross 'x' shape
    // not JSX
    hamburger.classList.toggle('js-x');
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse()
})
