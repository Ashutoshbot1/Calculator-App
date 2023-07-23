const input=document.getElementById("input");

const buttons=document.querySelectorAll("button");

string="";

buttons.forEach(
    (button)=>{
        button.addEventListener("click",
            (event)=>{
                let key=event.target.innerHTML;
                
                if(key==="="){
                    string=eval(string)+"";
                    console.log(typeof string);
                    input.value=string;
                    // key="";
                }
                else if(key==="AC"){
                    string='';
                    input.value=string;
                }
                else if(key==="DEL"){

                    string=string.substring(0,string.length-1);
                    input.value=string;

                }else{

                    string+=key;
                    input.value=string;
                }


            }
        )
    }
)