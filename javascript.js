console.log("hello");
alert("welcome to my site")
let userName=prompt("Please enter your name");
document.getElementById("userName").textContent=userName;
let button=document.getElementById("button")
button.onclick = function(){
    for (let index = 1; index < 100; index++) {
        console.log(index);        
    }
};


