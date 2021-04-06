function checkRadioButtons(x){
    var inp = document.getElementsByName(x);
    for (var i = 0; i < inp.length; i++){
        if (inp[i].type == "radio" && inp[i].checked == true){
            return true;
        }
    }
    return false;
}

function proverit(){
    let ball=0;
    var otveti = "";
    var ifBreak = false;
    for (var i = 1; i < 11; i++){
        if (checkRadioButtons(i) == true){            
            var rad=document.getElementsByName(i);
            for (let j=0;j<rad.length;j++){
                if (rad[j].checked&&rad[j].value==1){
                    ball+=1;
                    otveti += "<br><span id='nvo'>Вопрос "+i+". Вы ответили верно.</span>";    
                }
                else if(rad[j].checked&&rad[j].value!=1){
                     otveti += "<br><span id='nvo'>Вопрос "+i+". Вы ответили неверно.</span>"; 
                }
            }    
        }
        else{
            alert("Ответьте на все вопросы");
            ifBreak = true;
            break;
        }
    }
    if (ifBreak == false){ 
        vsego_zadach=10;
        procent= (ball/vsego_zadach)*100;
        procent = procent.toFixed();
        document.getElementById('rezultat').style.display = "block";
        document.getElementById('rezultat').innerHTML = "<span id='ot'>Вы ответили верно на "+procent+"% вопросов.</span><br>"+otveti;
    }
    else document.getElementById('rezultat').style.display = "none";
}