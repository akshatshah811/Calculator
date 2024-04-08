var string = "";
var keys = document.querySelectorAll('.key');

Array.from(keys).forEach((key)=>{
    key.addEventListener('click',(e)=>{
        
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.getElementById("input-value").innerHTML=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            document.getElementById("input-value").innerHTML="Input value";
        }
        else if(e.target.innerHTML=="C"){
            string = string.substring(0,string.length-1);
            document.getElementById("input-value").innerHTML=string;
        }
        else{
            string+=e.target.innerHTML;
            document.getElementById("input-value").innerHTML=string;
        }
    })
})