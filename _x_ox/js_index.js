let polja = document.getElementsByTagName("li");
let brojac = 0;


function myFunc(id){
    if(document.getElementById(id).innerHTML === ""){
        brojac++;
        if(brojac % 2 != 0){
            document.getElementById(id).innerHTML = "X";
        }else{
            document.getElementById(id).innerHTML = "O";
        }
        if (provjeri()){
            console.log("Zavrsena igra");//kako zavrsit igru
        };
    }

}

function provjeri(){
    let values = [];
    for(let i = 0; i < polja.length; i++){
        values[i] = polja[i].innerHTML;
    }
    //console.log(values);
    if(values[0] != "" && values[0] === values[1] && values[1] === values[2]||
        values[3] != "" && values[3] === values[4] && values[4] === values[5] ||
        values[6] != "" && values[6] === values[7] && values[7] === values[8] ||
        values[0] != "" && values[0] === values[3] && values[3] === values[6] ||
        values[1] != "" && values[1] === values[4] && values[4] === values[7] ||
        values[2] != "" && values[2] === values[5] && values[5] === values[8] ||
        values[0] != "" && values[0] === values[4] && values[4] === values[8] ||
        values[2] != "" && values[2] === values[4] && values[4] === values[6]){
        return true;
    }
}

function reset(){  
    for(let i = 0; i < polja.length; i++){
        polja[i].innerHTML = "";
    }
    brojac = 0;
}

function zavrsiIgru(){
    console.log("Zavsreno");
}