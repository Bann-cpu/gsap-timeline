var baseAnim = gsap.timeline({defaults: {duration:3, rotate: 360, backgroundColor: "green", yoyo: true, repeatDelay: 4, repeat: -1, ease: "power1.out"}})

baseAnim.to(".first", {x: 758}).to(".second", {x: 758}, ">")

/*
gsap.to(".first", {x: 758, duration: 2, ease: "power1"})
gsap.to(".second", {x: 737, duration: 2, ease: "power1.out"}, ">") End of previous animation
*/

