gsap.from(".menu, .follow", {
  y: -100,
  duration: 1,
  stagger: 0.2,
  opacity: 0,
  delay: 0.2,
});

gsap.from(".follow button", {
  y: 100,
  duration: 1,
  stagger: 1,
  opacity: 0,
});

gsap.from(".left h1,.left h2,.z1", {
  x: -400,
  opacity: 0,
  stagger: 0.9,
  duration: 1,
  delay: 0.4,
});

// gsap.from(".right img",{
//     scale:0,
//     delay:0.8,
//     duration:3,
// })

// gsap.to(".box1",{
//     scale:0.3,
//     scrollTrigger:{
//         trigger:".box1",
//         scroller:"body",
//          markers:true,
//         start:"top 70%",
//         end:"top 30%",

//     }
// })

// gsap.from(".right img",{
//     backgroundColor:"red",
//     duration:1,
//     scrollTrigger:{
//         scroller:"body",
//         trigger:".right",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:true,
//     }
// })

gsap.from(".section1", {
  // backgroundColor:"red",
  duration: 1,
  x: 200,
  boxShadow: "red",
  scale: 0.9,
  scrollTrigger: {
    trigger: ".section1",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 20%",
    scrub: 5,
  },
});

gsap.from(".right img", {
  // backgroundColor:"red",
  duration: 4,
  rotate: 360,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".right img",
    scroller: "body",
    // markers:true,
    start: "top 20%",
    end: "top 1%",
    scrub: 5,
    pin:true,
  },
});

gsap.to(".lt h1,h3", {
  fontSize: 100,
  duration: 3,
  scrollTrigger: {
    trigger: ".lt ",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 20%",
    scrub: 5,
  },
});

gsap.to(".rt img", {
  // fontSize:100,
 scale:0.5,
  // backgroundColor:"red",
  shadow:"cyan ",
//   fontFamily:"roman",
  duration: 3,
  borderRadius: 20,
  scrollTrigger: {
    trigger: ".rt img ",
    scroller: "body",
    // markers: true,
    start: "top 40%",
    end: "top 10%",
    scrub: 5,
  },
});



gsap.to(" .section3 .lt1 h1,h3",{
    fontSize:30,
    delay:0.5,
    // duration:2,
    color:"red",
    // fontSize: 100,
    scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 10%",
        scrub: 4,
      },
})



gsap.to(".section3 .rt1 img",{
    height:500,
    width:500,
    duration:3,
    scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 10%",
        scrub: 4,
      },

})


gsap.from(".section4 .rt2 img",{
  x:-530,
  duration:4,
  scrollTrigger:{
    trigger:".section4",
    scroller:"body",
    markers:true,
    start:"top 60%",
    end:"top 30%",
    scrub:true,
  }
})