 gsap.to(".first-navbar",{
    position:"fixed",
    top:"0%",
    // backgroundColor:"#083895",
    duration:0.5,
    // paddingRight:"20",
    paddingBottom:"0",
    display:"flex",
    left:"50%",
    transform:"translateX(-50%)",
    justifyContent:"space-around",
    marginBottom:"30px",
    // width:"90%",
    scrollTrigger:{
        trigger:".second-navbar",
        scroller:"body",
        // markers:"true",
        start:"top 18%",
        end:"top 0%",
        scrub:"5",
    }
})
gsap.to(".design-rush-navbar",{
    backgroundColor:"#083895",
    // opacity:"1",
   
    scrollTrigger:{
        trigger:".third-navbar",
        scroller:"body",
        // markers:"true",
        start:"top 16%",
        end:"top 0%",
        scrub:"true",
    }
})



gsap.to(".right-feature-design figure img",{
    position:"sticky",
    top:200,

})

gsap.to(".amazing-navbar",{
    position:"fixed",
    top:"9%",
    scrollTrigger:{
        trigger:".amazing-navbar",
        scroller:"body",
        markers:"true",
        scrub:"true",
        start:"top 15%",
        end:"top 12%",


    }
})