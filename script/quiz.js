let sign_up=document.getElementById("sign-up")
let sign_up_form=document.querySelector(".sign-up-pase")
let cross_button=document.getElementById("cross")
sign_up.addEventListener("click",function(){
    sign_up_form.style.display="block"
})
cross_button.addEventListener("click",function(){
      sign_up_form.style.display="none"
})


sign_up.addEventListener("click",function(){
    document.querySelector(".sign-up-pase-upper-absolute").style.top="0%"
    function for_circle(){
        setTimeout(()=>{
    document.querySelector(".sign-up-pase-upper-absolute").style.top="-100%"
        },1000)
    }
    for_circle()
})

let left_button=document.getElementById("click1")
let right_button=document.getElementById("click2")
let total_number=0
left_button.addEventListener("click",()=>{
    if(total_number<240){
        total_number=total_number+80
        document.querySelector(".slider-part").style.left=`-${total_number}%`
    }
})

right_button.addEventListener("click",function(){
if(total_number>=80){
    total_number=total_number-80
    document.querySelector(".slider-part").style.left=`-${total_number}%`
}
})

function final(){
    sign_up.addEventListener("click",function(){
        document.querySelector(".sign-up-pase-upper-absolute").style.top="0%"
        function for_circle(){
            setTimeout(()=>{
        document.querySelector(".sign-up-pase-upper-absolute").style.top="-100%"
            },1000)
        }
        for_circle()
    })
}

document.querySelector(".for-set-sign-up").addEventListener("click",function(){
 sign_up_form.style.display="block"
})


document.querySelector(".for-set-sign-up").addEventListener("click",function(){
    document.querySelector(".sign-up-pase-upper-absolute").style.top="0%"
    function for_circle(){
        setTimeout(()=>{
    document.querySelector(".sign-up-pase-upper-absolute").style.top="-100%"
        },1000)
    }
    for_circle()
})



document.querySelector(".fa-bars").addEventListener("click",()=>{
    document.querySelector(".menu-item").style.display="block"
    document.querySelector(".menu-item").style.top="0%"
})

let side=true

document.querySelector(".side-button").addEventListener("click",function(){
   if(side==true){
     this.style.right="10px"
     side=false
   }else{
    this.style.right="-60px"
    side=true
   }
})
document.querySelector(".fa-right-from-bracket").addEventListener("click",function(){
      document.querySelector(".menu-item").style.top="-100%"
})









let game_condition=[
    [
        0,1,2
    ],[
        3,4,5
    ],[
        6,7,8
    ],[
        0,3,6
    ],[
        1,4,7
    ],[
        2,5,8
    ],[
        0,4,8
    ],[
        2,4,6
    ]
]

let all_butoon_for_game=document.querySelectorAll(".button-for-game-change")
function game(){
  
    let start=true;
    for(let all of all_butoon_for_game){
        all.addEventListener("click",function(){
            if(start==true){
                all.innerText="x"
                start=false
            }else{
                all.innerText="o"
                this.style.color="white"
                start=true;
            }
            all.disabled=true
            game_winning_condition()
        })
    }    
}

function game_winning_condition(){
    for(let array of game_condition){
        console.log(all_butoon_for_game[array[0]],all_butoon_for_game[array[1]],all_butoon_for_game[array[2]])
        let first=all_butoon_for_game[array[0]].innerText
        let second=all_butoon_for_game[array[1]].innerText
        let third=all_butoon_for_game[array[2]].innerText
        if(first !="" && second !="" && third !="" ){
            if(first== second && second== third && third == first){
                let result=document.querySelector(".result")
                result.innerText=`${first}`
                disable()
            }
        } 
    }
}


function disable(){
    for(let all_for_disable of all_butoon_for_game){
        all_for_disable.disabled=true
    }
}
function enable(){
    for(let all_for_disable of all_butoon_for_game){
        all_for_disable.disabled=false
    }
}


let reset=document.querySelector(".reset")
reset.style.background="cyan"
reset.style.color="black"

reset.addEventListener("click",()=>{
    for(let clear of all_butoon_for_game){
        clear.innerText=""
    }
    document.querySelector(".result").innerText=""
    enable()
})
let clear=document.querySelector(".clear")
clear.style.background="cyan"
clear.style.color="black"
clear.addEventListener("click",function(){
    for(let clear of all_butoon_for_game){
        clear.innerText=""
    }
    document.querySelector(".result").innerText=""
    enable()
})

game()



document.querySelector(".join-game-now").addEventListener("click",function(){
    document.querySelector(".tik-tik-game").style.display="block"
})


document.getElementById("exit").addEventListener("click",function(){
    document.querySelector(".tik-tik-game").style.display="none"
})