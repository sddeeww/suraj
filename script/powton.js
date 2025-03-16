gsap.to(".main-container",{
    x:-300,
    duration:3,
    scrollTrigger:{
        scroller:"body",
        trigger:".break-through",
        markers:"true,",
        start:"top 50%",
        end:"top 20%",
        

    }
})