let result = document.querySelector('#result')
let answer= document.querySelectorAll('button')
let str=""
let output;
let newstr;
let button = Array.from(answer)
button.forEach((buttons)=>{
   buttons.addEventListener('click',function(e){
    if(e.target.innerHTML=='='){
        output=eval(str);
        result.innerText=output;
        str="" 
    }
    else if(e.target.innerHTML=='C'){
        str="";
        result.innerText=str;
    }
    else if(e.target.innerHTML=='DEL'){
         newstr=str.slice(0,-1);
        str=newstr;
        result.innerText=str;
    }
    else{
        str+=e.target.innerHTML;
        result.innerText=str;
    }
         
   })
})