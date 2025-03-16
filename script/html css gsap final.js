gsap.to(".m3 h1 pre",{
    x:-4000,
    duration:20,
    repeat:-1,
    yoyo:true,
   color:"red"
})

gsap.to(".hr",{
    y:20,
    duration:1,
    repeat:-1,
    yoyo:true,
})

gsap.to(".m2 #e1",{
    y:20,
    duration:1,
    repeat:-1,
    yoyo:true,
    color:"red",
})


gsap.to(".m2 #e2",{
    y:20,
    duration:1,
    repeat:-1,
    yoyo:true,
})

gsap.from(".navbar,.m1,.m2",{
    y:-300,
    duration:1.5,
    opacity:0,
    stagger:1,
})


gsap.from(".m3",{
    x:0,
    delay:3,
    duration:2,
    opacity:0,

})


gsap.from(".section1",{
    scale:0.3,
    duration:3,
    scrollTrigger:{
        scroller:"body",
        trigger:".section1",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:5,
    }
})


gsap.to(".secright img",{
    scale:0.4,
    duration:2,
    x:100,
    scrollTrigger:{
        scroller:"body",
        trigger:".secright",
        start:"top 45%",
        end:"top 10%",
        scrub:5,
    }
})


gsap.to(".section3",{
    x:-1200,
    duration:3,
    scrollTrigger:{
        scroller:"body",
        trigger:".section3",
        // markers:true,
        start:"top 20%",
        end:"top -10%",
        scrub:5,

    }
})

gsap.from(".section5",{
    x:800,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:".section5",
        // markers:true,
        start:"top 60%",
        end:"top 10%",
        scrub:5,
    }
   
})