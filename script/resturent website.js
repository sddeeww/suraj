gsap.to(".navbar",{
    y:-200,
    duration:3,
    scrollTrigger:{
        trigger:".card-menu-header",
        scrppler:"body",
        start:"top 20%",
        end:"top 0%",
        scrub:"true",
    }
})
gsap.to(".navbar",{
    backgroundColor:"#575b5b",
    position:"fixed",
    top:200,
    duration:3,
    scrollTrigger:{
        trigger:".section2",
        scrppler:"body",
        start:"top 20%",
        end:"top 0%",
        scrub:"true",
    }
})