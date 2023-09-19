let rightBtn = document.querySelector(".right")
let leftBtn = document.querySelector(".left")

let rightLabel = document.querySelector(".rght-label") 
let leftLabel = document.querySelector(".lft-label") 
// console.log(rightLabel)

rightLabel.style.cssText = "cursor:pointer;" 
leftLabel.style.cssText = "cursor:pointer;" 

rightBtn.style.cssText = `
position: absolute;
top: 0;
display:none;
` 

leftBtn.style.cssText = `position: absolute;
top: 0;
left:20px;
display:none;
` 

rightLabel.onclick = function() {
        leftBtn.checked = false
    }

leftLabel.onclick = function() {
        rightBtn.checked = false
    }

let rightBtn2 = document.querySelector(".right-2")
let leftBtn2 = document.querySelector(".left-2")

let rightLabel2 = document.querySelector(".right-label-2") 
let leftLabel2 = document.querySelector(".left-label-2") 
// console.log(rightLabel)

rightLabel2.style.cssText = "cursor:pointer;" 
leftLabel2.style.cssText = "cursor:pointer;" 

rightBtn2.style.cssText = `
position: absolute;
top: 0;
display:none;
` 

leftBtn2.style.cssText = `position: absolute;
top: 0;
left:20px;
display:none;
` 

rightLabel2.onclick = function() {
        leftBtn2.checked = false
    }

leftLabel2.onclick = function() {
        rightBtn2.checked = false
    }


// let seasonsGreeting = document.querySelector(".seasons-greeting") 


    
//Good Logic


