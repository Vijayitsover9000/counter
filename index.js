var count = 0;
document.querySelector(".decrease").addEventListener("click" ,function (){
    count--;
    document.querySelector(".number").textContent = count;
    if(count<0)
        document.querySelector(".number").style.color ="red";
    else if(count > 0)
        document.querySelector(".number").style.color ="green";
    else
        document.querySelector(".number").style.color ="black";
})
document.querySelector(".reset").addEventListener("click" ,function (){
    count = 0;
    document.querySelector(".number").textContent = count;
    if(count<0)
        document.querySelector(".number").style.color ="red";
    else if(count > 0)
        document.querySelector(".number").style.color ="green";
    else
        document.querySelector(".number").style.color ="black";
})
document.querySelector(".increase").addEventListener("click" ,function (){
    count++;
    document.querySelector(".number").textContent = count;
    if(count<0)
        document.querySelector(".number").style.color ="red";
    else if(count > 0)
        document.querySelector(".number").style.color ="green";
    else
        document.querySelector(".number").style.color ="black";
})
