var baseAnim = gsap.timeline({
    defaults: {duration:3, rotate: 360, backgroundColor: "green", yoyo: true, repeatDelay: 3, repeat: -1, ease: "power2.out", delay: 4}
    ,onStart : () => console.log("L'animation a débuté")
    ,onComplete: () => console.log("Complété")
    ,onUpdate: () => console.log("Actualisé")
    ,onRepeat: () => console.log("On repeat")

})
baseAnim.to(".first", {x: 758}).to(".second", {x: 758}, ">")