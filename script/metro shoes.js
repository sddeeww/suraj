// for brand pase 
let left_slider=document.getElementById("brand_slider_left")
let right_slider=document.getElementById("brand_slider_rigth")
let slide_value=0
let slider_item=document.querySelector(".logo-slider-main")
left_slider.addEventListener("click",()=>{
  if(slide_value<200){
      slide_value=slide_value+100
    slider_item.style.transform=`translatex(-${slide_value}vw)`
  }
})
right_slider.addEventListener("click",function(){
   if(slide_value>=0){
     slide_value=slide_value-100
    slider_item.style.transform=`translatex(-${slide_value}vw)`
   }
})


// input box 
let nav=document.querySelector(".nav")
let input=document.querySelector("input")
let raper=document.querySelector(".raper")
let input_box=document.querySelector(".search-box")
let for_input_box=document.querySelector(".for_input")
input_box.addEventListener("click",function(event){
    event.stopPropagation();
    input_box.style.background="white"
    for_input_box.style.display="block"
})
raper.addEventListener("click",function(event){
    event.stopPropagation();
    for_input_box.style.display="none"
    input_box.style.background="rgba(165, 165, 165, 0.256)"

})
nav.addEventListener("click",function(event){
    event.stopPropagation();
       for_input_box.style.display="none"
       input_box.style.background="rgba(165, 165, 165, 0.256)"
})

// top image part 

let top_value=0
let top_left=document.getElementById("top_image_left")
let top_right=document.getElementById("top_image-right")
let first_image=document.querySelector(".image-first")
let second_image=document.querySelector(".image-second")
top_left.addEventListener("click",function(){
    if(top_value<100){
        top_value=top_value+100
        first_image.style.transform=`translatex(-${top_value}vw)`
        second_image.style.transform=`translatex(-${top_value}vw)`
    }
})
// top_left.addEventListener("click",function(){
//     if(top_value<100){
//         top_value=top_value+100
//         first_image.style.transform=`translatex(-${top_value}vw)`
//     }
// })
top_right.addEventListener("click",()=>{
    if(top_value>0){
        top_value=top_value-100
        first_image.style.transform=`translatex(-${top_value}vw)`
        second_image.style.transform=`translatex(-${top_value}vw)`
    }
})


// explore 

let left_explore=document.getElementById("left-explore")
let right_explore=document.getElementById("right-explore")
let seller=document.querySelector(".seller-raper")
let seller_value=0
left_explore.addEventListener("click",function(){
    if(seller_value<60){
        seller_value=seller_value+30
        seller.style.transform=`translatex(-${seller_value}%)`
    }
})
right_explore.addEventListener("click",function(){
    if(seller_value>0){
        seller_value=seller_value-30
          seller.style.transform=`translatex(-${seller_value}%)`
    }
})

// user-tab 
let user_icon=document.getElementById("search-user")
let user_box=document.getElementById("user-table")
let cross=document.getElementById("user-cros")
user_icon.addEventListener("click",function(){
    user_box.style.display="block"
})
cross.addEventListener("click",()=>{
    user_box.style.display="none"
})


// wallpaer 
let wal_close=document.getElementById("mark-wallpaper")
let wall_menu_icon=document.getElementById("menubaricon")
let wallpaper=document.querySelector(".menu-wallpaper-part")
wall_menu_icon.onclick=()=>{
    wallpaper.style.left="0%"
}
wal_close.onclick=function(){
        wallpaper.style.left="-100%"
}

// search second part 
let second_search=document.getElementById("search-anything")
let second_search_input_box=document.querySelector(".search-input")
second_search.addEventListener("click",function(event){
    event.stopPropagation();
    second_search_input_box.style.display="block"
    second_search_input_box.style.width="100%"
})

raper.addEventListener("click",function(event){
    event.stopPropagation();
    second_search_input_box.style.display="none"

})
nav.addEventListener("click",function(event){
    event.stopPropagation();
   second_search_input_box.style.display="none"
})