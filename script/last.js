gsap.to(".for-h1-tag",{
x:900,
duration:2,
scrollTrigger:{
    scroller:"body",
    trigger:".cake-part",
    markers:"true",
    start:"top 50%",
    end:"top 30%",
    scrub:"true",

}
})
gsap.to(".slider2",{
x:900,
duration:2,
scrollTrigger:{
    scroller:"body",
    trigger:".for-h2-tag1",
    markers:"true",
    start:"top 70%",
    end:"top 50%",
    scrub:"true",

}
})