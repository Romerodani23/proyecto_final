

   






let = 2,1,3

let opcion_elegido=[];
let cantidad_correctas=0;

function respuesta(num_pregunta, seleccionada){
    opcion_elegida[num_pregunta] = seleccionada.value;

    id="p" + num_pregunta;


    labels = document.getElementByid(id).childNodes;
    labels[2].style.backgroundColor = "white";
    labels[1].style.backgroundColor = "white";
    labels[3].style.backgroundColor = "white";


    seleccionada.parentNode.style.backgroundColor = "#cec0fc";


}

function corregir(){
    cantidad_correctas = 0;
    for(i=0;1 < correctas.length;i++){
        if(correctas[1]==opcion_elegida[1]){
            cantidad_correctas++;
        }

    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}











 