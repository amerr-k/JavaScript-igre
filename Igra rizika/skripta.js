function Player(ime){
    this.bodovi = 0;
    this.ime = ime;
}

let igrac1 = new Player("Ajna");
let igrac2 = new Player("Enes");

let suma = 0;
let prviIgra = true;

document.getElementById("ko_igra").innerHTML = "Igra " + igrac1.ime;

document.getElementById("igraj_id").addEventListener("click", rizikuj);


let nizBodova = [];

function rizikuj(){


    let poeni = Math.floor(Math.random() * 10);
    if(poeni !== 0 && poeni !== 1){
        nizBodova.push(poeni);
        document.getElementById("p_id").textContent = nizBodova;
        suma += poeni;
    }else{
        nizBodova = [];
        suma = 0;
        document.getElementById("p_id").textContent = "Dobili ste 1 ili 0 i ponistava vam se ovaj krug";
        prviIgra = !prviIgra;

        if(prviIgra){
            document.getElementById("ko_igra").innerHTML = "Igra " + igrac1.ime;
        }else{
           document.getElementById("ko_igra").innerHTML = "Igra " + igrac2.ime;
        }

    }
}

function provjeriRezultat(igrac){
    if(igrac.bodovi >= 100){
        document.getElementById("pobjednik_id").innerHTML = "Pobjednik je" + igrac.ime;
    }
}

document.getElementById("sacuvaj_id").addEventListener("click", sacuvaj);

function sacuvaj(){
    if(prviIgra){
        document.getElementById("p_id2").innerHTML = " ";
        igra_sacuvaj(igrac1);
        document.getElementById("ko_igra").innerHTML = "Igra " + igrac2.ime;

    }
    else{
        document.getElementById("p_id2").innerHTML = " ";
        igra_sacuvaj(igrac2);
        document.getElementById("ko_igra").innerHTML = "Igra " + igrac1.ime;

    }
    prviIgra = !prviIgra;
}

function igra_sacuvaj(igrac){
    if(suma != 0){
        igrac.bodovi += suma;
        console.log(igrac.bodovi);
        document.getElementById("p_id2").textContent += (suma + ", ");
        nizBodova = [];
        suma = 0;
        //ovo se moze bolje uraditi u finckiji sacuvaj ograniciti koji element al dok
        //jos ucim dom moze i ovako
        if(prviIgra){
            document.getElementById("p_id3").textContent = igrac.bodovi;
        }else{
            document.getElementById("p_id4").textContent = igrac.bodovi;
        }
    }
    provjeriRezultat(igrac);
}

/* 
postoji dosta nacina da se elementi iz htmla povezu sa javascriptom
u mom slucaj gore najbolje radi ovaj gore:

document.getElementById("igraj_id").addEventListener("click", rizikuj);


*/