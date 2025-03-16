let center_image=document.getElementById("image-hover-part1")

let all_div=document.getElementById("feature-product1")
all_div.addEventListener("mouseenter",()=>{
    center_image.style.display="block"
    center_image.style.color="red"
})

all_div.addEventListener("mouseenter",()=>{
    let image=document.getElementById("feature-product1")
    let image1=image.getAttribute("data-image1")
    center_image.style.backgroundImage=`url(${image1})`
})
all_div.addEventListener("mouseleave",()=>{
    center_image.style.display="none"
    center_image.style.color="red"
})-










let all_div2=document.getElementById("feature-product2")
all_div2.addEventListener("mouseenter",()=>{
    center_image.style.display="block"
    // center_image.style.color="red"
})

all_div2.addEventListener("mouseenter",()=>{
    let image2=document.getElementById("feature-product2")
    let imagesecond=image2.getAttribute("data-image2")
    center_image.style.backgroundImage=`url(${imagesecond})`
})
all_div2.addEventListener("mouseleave",()=>{
    center_image.style.display="none"
    center_image.style.color="red"
})







let all_div3=document.getElementById("feature-product3")
all_div3.addEventListener("mouseenter",()=>{
    center_image.style.display="block"
    // center_image.style.color="red"
})

all_div3.addEventListener("mouseenter",()=>{
    let image3=document.getElementById("feature-product3")
    let imagesecond=image3.getAttribute("data-image3")
    center_image.style.backgroundImage=`url(${imagesecond})`
})
all_div3.addEventListener("mouseleave",()=>{
    center_image.style.display="none"
    center_image.style.color="red"
})










let all_div4=document.getElementById("feature-product4")
all_div4.addEventListener("mouseenter",()=>{
    center_image.style.display="block"
    // center_image.style.color="red"
})

all_div4.addEventListener("mouseenter",()=>{
    let image4=document.getElementById("feature-product4")
    let imagesecond=image4.getAttribute("data-image4")
    center_image.style.backgroundImage=`url(${imagesecond})`
})
all_div4.addEventListener("mouseleave",()=>{
    center_image.style.display="none"
    center_image.style.color="red"
})






// let all_div5=document.getElementById("feature-product5")
// all_div5.addEventListener("mouseenter",()=>{
//     center_image.style.display="block"
//     // center_image.style.color="red"
// })

// all_div5.addEventListener("mouseenter",()=>{
//     let image5=document.getElementById("feature-product5")
//     let imagesecond=image5.getAttribute("data-image5")
//     center_image.style.backgroundImage=`url(${imagesecond})`
// })
// all_div5.addEventListener("mouseleave",()=>{
//     center_image.style.display="none"
//     center_image.style.color="red"
// })





// let our_paragraph=document.getElementById("team")
// our_paragraph.style.userSelect="none"
// let color="black"
// our_paragraph.addEventListener("click",()=>{
//     if(color==="black")
//    {
//     color="white"
//     our_paragraph.style.color="white"
//    }
//    else{
//     color="black"
//     our_paragraph.style.color="rgb(75, 74, 73)"
//    }

// })

let menu=document.getElementById("menu")
let up="upper"
menu.addEventListener("click",()=>{
    if(up==="upper"){
        up="down"
        let div=document.getElementById("div")
        div.style.top="0%"
    }
    else{
        up="upper"
        let div=document.getElementById("div")
        div.style.top="-100%"
    }

})