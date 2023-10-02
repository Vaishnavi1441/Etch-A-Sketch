let color="black";
let click=false;  
document.addEventListener("DOMContentLoaded", function () {
            let slider = document.querySelector("#slider");
            slider.addEventListener("input", function () {
                let value = slider.value;
                let message = document.querySelector("#message");
                message.innerHTML = `Selected size: ${value} X ${value}`;
            });
        
            createBoard(16);
        
            document.querySelector("body").addEventListener("click", function (e) {
                if (e.target.tagName != "BUTTON") {
                    click = !click;
                    let draw = document.querySelector("#draw");
                    if (click) {
                        draw.innerHTML = "You can draw now";
                    } else {
                        draw.innerHTML = "You can't draw";
                    }
                }
            });
        
            let applyButton = document.querySelector("#apply");
            applyButton.addEventListener("click", function () {
                let size = slider.value;
                createBoard(size);
            });
        });
     // document.addEventListener("DOMContentLoaded",function()
    // {
    //     createBoard(16);       
    //     document.querySelector("body").addEventListener("click",function(e)
    //     {
    //         if(e.target.tagName!="BUTTON")
    //         {
    //             click = !click;
    //             let draw=document.querySelector('#draw');
    //             if(click){
    //                 draw.innerHTML="You can draw now";
    //             }
    //             else{
    //                 draw.innerHTML="You can't draw";
    //             }
    //         }
    //     })
        
    //     let btn_popup =document.querySelector('#popup');
    //     btn_popup.addEventListener("click",function(){
    //         let size=getSize();
    //         createBoard(size);
    //     })
    // })
//creating a function for board

function createBoard(size){
    let board =document.querySelector(".board");
    board.style.gridTemplateColumns=`repeat(${size},1fr)`;
    board.style.gridTemplateRows=`repeat(${size},1fr)`;

    let numDivs=size*size;
    for(let i=0;i<numDivs;i++)
    {
        let div=document.createElement("div");
        div.addEventListener("mouseover",colorDiv)
        board.insertAdjacentElement("beforeend",div);
    }
}
//not needed 
//this code is for user input of grid size
// function getSize(){
//     let input=prompt("Tell the size of board");
//     let message=document.querySelector('#message');
//     if(input == "")
//     {
//         message.innerHTML="Please provide a number";
//     }
//     else if(input < 0 || input > 100)
//     {
//         message.innerHTML="Provide a number between 1-100";
//     }
//     else{
//         message.innerHTML="Now you can play!!👍";
//         return input;
//     }
// }

function colorDiv()
{   if(click){
        if (color=="random")
        {
            this.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;
        }
    
    else{
            this.style.backgroundColor='black';
        }
    }
}

function setColor(colorChoice){
    color=colorChoice;
}

function reset(){
    let divs=document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor="white");
}


