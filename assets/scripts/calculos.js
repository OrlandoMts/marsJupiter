var grav_tierra = 9.8;
var grav_marte = 3.7;
var grav_jupiter = 24.8;

var usuario = document.getElementById("peso");
var opcion = document.getElementById("opcion");

var peso_final;
var nombre;
var boton = document.getElementById("btn");
const resultado = document.getElementById("cont1");

boton.addEventListener("click", calculo)

function calculo(evt){
    var peso = parseInt(usuario.value);
    var planeta = parseInt(opcion.value);
    
    if(planeta == 1){
        peso_final = peso * grav_marte / grav_tierra;
        nombre = "Marte";
    } else if(planeta == 2){
        peso_final = peso * grav_jupiter / grav_tierra;
        nombre = "Jupiter";
    } else {
        alert("ESA NO ES UNA OPCION XD");
    }

    evt.preventDefault();
    peso_final = parseFloat(peso_final.toFixed(2));
    resultado.innerHTML += "Tu peso en " + nombre +" es <strong>" + peso_final + " Kilos</strong> <br>";
    // document.write("Tu peso en " + nombre +" es <strong>" + peso_final + " Kilos</strong>");

}

