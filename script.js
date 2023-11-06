var body = document.getElementById("main");
var btn = document.getElementById("btn");


function changecolor(){
    var color = "#"
    var value = "1234567890ABCDEF"
    for (let i = 0; i < 6; i++) {
        color += value[Math.floor(Math.random()*16)];     
    }
    return color;
};

btn.addEventListener("mouseenter",function(){
    var value = "1234567890ABCDEF"
    var color = "#"
    for (let i = 0; i < 6; i++) {
        color += value[Math.floor(Math.random()*16)];     
    }
    btn.style.background = changecolor();
})
btn.addEventListener("click",function(){
    body.style.background = changecolor();
})
