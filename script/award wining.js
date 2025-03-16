gsap.to(".how-to,.left-navbar ul li",{
    y:-200,
    duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:".main",
        markers:"true",
        start:"top 20%",
        end:"top 0%",
      scrub:"true"

    }
})
gsap.to(".svg",{
    y:-150,
    duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:".main",
        markers:"true",
        start:"top 14%",
        end:"top 0%",
      scrub:"true"

    }
})

