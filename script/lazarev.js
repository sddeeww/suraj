  

 gsap.to(".navbar-main", {
    backgroundColor:"white",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".main-heading-pase-wallapaper",
      scroller: "body",
    //   markers: true,
      start: "top 3%",
      end: "top -5%",
      scrub: 5,
    },
  });
  gsap.to(".navbar-ul-tag li , .bell i , .last-adobi",{
    color:"black",
    duration:0.1,
    scrollTrigger: {
        trigger: ".main-heading-pase-wallapaper",
        scroller: "body",
        // markers: true,
        start: "top 1%",
        end: "top -5%",
        scrub: 5,
      },
  })
  gsap.to(".center-raper",{
    backgroundColor:"black",
    duration:0.1,
    scrollTrigger: {
        trigger: ".main-heading-pase-wallapaper",
        scroller: "body",
        // markers: true,
        start: "top 1%",
        end: "top -5%",
        scrub: 5,
      },
  })

    let apprecianties_button=document.getElementById("apprecianties-button")
    apprecianties_button.addEventListener("click",()=>{
        // let work_button=document.getElementById("work-buttton")
        // work_button.style.display="none"
        let fosrt_part=document.getElementById("work-botton-click-event")
        fosrt_part.style.display="none"
    })
    apprecianties_button.addEventListener("click",()=>{
        // let work_button=document.getElementById("work-buttton")
        // work_button.style.display="none"
        // let apprecianties_button=document.getElementById("apprecianties-button")
        // let second_container=document.getElementById("work-image-container")
        // second_container.style.display="block"
        // second_container.style.flexDirection="row"
        // second_container.classList.add("work-image-container-main3")
        let second_container=document.getElementsByClassName("appreprience-button-click-event")[0]
        second_container.style.display="block"
        
    })
    
    
    let first_buttton=document.getElementById("work-buttton")
    first_buttton.addEventListener("click",()=>{
        let second_container=document.getElementsByClassName("appreprience-button-click-event")[0]
        second_container.style.display="none"
    })
    first_buttton.addEventListener("click",()=>{
        let fosrt_part=document.getElementById("work-botton-click-event")
        fosrt_part.style.display="block"
     
    })
    
    
    
    setTimeout(() => {
        let pase1=document.getElementById("pase2")
        pase1.style.display="block"
    }, 5000);
    
    
    
    function search_input(){
        let cut=document.getElementsByClassName("fa-scissors")[0]
    cut.addEventListener("click",()=>{
        let pase1=document.getElementById("pase2")
        pase1.style.display="none"
    })
    
        let input=document.getElementById("input-box-main")
        let hide="false"
        input.addEventListener("click",()=>{
    if(hide=="false"){
        hide="true"
        let main_details=document.getElementsByClassName("center-details-main")[0]
        main_details.style.display="block"
    }
    else{
        hide="false"
        let main_details=document.getElementsByClassName("center-details-main")[0]
        main_details.style.display="none"
    }
        })
        
    }
    search_input();
    
    
    
    let short_button=document.getElementById("apprecianties-button")
    short_button.addEventListener("click",()=>{
        let a=document.getElementById("main-display-left-part")
        a.style.height="35%"
    })
    
    let long_button=document.getElementById("work-buttton")
    long_button.addEventListener("click",()=>{
        let a=document.getElementById("main-display-left-part")
        a.style.height="70%"
    })



  let menu=document.getElementById("menu")
  menu.addEventListener("click",()=>{
    let part=document.getElementsByClassName("upper-menu-part")[0]
    console.log(part);
    part.style.left="0%"
  })

  let mark=document.getElementById("mark")
  mark.addEventListener("click",()=>{
    let part=document.getElementsByClassName("upper-menu-part")[0]
    console.log(part);
    part.style.left="-100%"
  })
  