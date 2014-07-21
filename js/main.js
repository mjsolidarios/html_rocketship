$("#launchrocket").on("click",function(){
var n = 400;
    setInterval(function(){
    n-=1;
    var val = n+"px";
       $("#rocket").attr("style","top:"+val); 
    }, 10);    
})


