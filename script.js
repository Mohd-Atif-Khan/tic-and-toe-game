let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn= document.querySelector("#new-btn")
let msgcont = document.querySelector(".msg-cont")
let msg = document.querySelector("#msg")
let turn0 = true;
const winPattern = [
    [0, 1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame= ()=>{
    turn0 = true;
    enableboxes();
    msgcont.classList.add("hide")
}

// boxes.forEach((box)=>{
    
// })

boxes.forEach((box) => {
   box.addEventListener("click",()=>{
    console.log("box clickled")
    if(turn0){
        box.innerText = "0";
        turn0=false;


    }
    else{
        box.innerText = "x";
        turn0 = true;
    }
    box.disabled = true;
    checkWinner();
    
   })
  
})
const disableboxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}
const showWinner =(winner)=>{
msg.innerText = `congratulation, winner is ${winner}`
msgcont.classList.remove("hide");
disableboxes();
}
// 
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        console.log(`Checking pattern: ${pattern}, values: ${pos1val}, ${pos2val}, ${pos3val}`);
        
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
                return true;
            }
        }
        
    }
};




newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame)

