
document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
    document.getElementById("notificacionVP").style.display='none';
    document.getElementById("notificacionVF").style.display='none';
    document.getElementById("notificacionI").style.display = "none";
    document.getElementById("notificacionTI").style.display = "none";
    document.getElementById("notificacionT").style.display = "none";
});


function calcularVP(){
    var valorFuturo, tasaInteres, tiempo, result;

    valorFuturo = document.getElementById("valorFuturo").value;
    tasaInteres = document.getElementById("tasaInteres").value;
    tiempo = document.getElementById("tiempo").value;
    if(tasaInteres <= 17.21){
        base = parseInt(1) + parseFloat(tasaInteres);
        divisor = Math.pow(base, tiempo);
    
        result = Math.round(parseFloat(valorFuturo/divisor));
    
        document.getElementById("alertitaVP").innerHTML = "El valor presente es de: <strong>" + new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</strong>";
        document.getElementById("notificacionVP").style.display = 'block';

    }
    else{
        window.alert("La tasa de interes debe ser menor o igual a 17.21%");
        alert("Texto a mostrar");
    }


}


function calcularVF(){
    var valorPresente, tasaInteres, tiempo, result, interes;

    valorPresente = document.getElementById("valorPresente").value;
    tasaInteres = document.getElementById("tasaInteresVF").value;
    tiempo = document.getElementById("tiempoVF").value;
    if(tasaInteres <= 17.21){
    base = parseInt(1) + parseFloat(tasaInteres);
    vf = valorPresente*Math.pow(base, tiempo);
    result =  Math.round(parseFloat(vf));

    document.getElementById("alertitaVF").innerHTML = "El valor futuro es de: <strong>" + new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</strong>";
    document.getElementById("notificacionVF").style.display='block';

    }
    else{
        window.alert("La tasa de interes debe ser menor o igual a 17.21%");
        alert("Texto a mostrar");
    }


}


function calcularTI(){
    var valorPresente, valorFuturo, tiempo;

    valorPresente = document.getElementById("valorPresenteTI").value;
    valorFuturo = document.getElementById("valorFuturoTI").value;
    tiempo = document.getElementById("tiempoTI").value;

    base = (valorFuturo/valorPresente);
    exp = parseInt(1)/tiempo;
    total = Math.pow(base, exp) - parseInt(1);

    result = Math.round(parseFloat(total)*100);

    document.getElementById("alertitaTI").innerHTML = "La tasa de interÃ©s es de: <strong>" + result + "% </strong>";
    document.getElementById("notificacionTI").style.display = "block";
}

//Calculo del InterÃ©s
function calcularI(){
    var valorPresente, tasaInteres, tiempo, result, interes;

    valorPresente = document.getElementById("valorPresenteI").value;
    tasaInteres = document.getElementById("tasaInteresI").value;
    tiempo = document.getElementById("tiempoI").value;

    if(tasaInteres <= 17.21){
        interes = valorPresente * tasaInteres * tiempo;

        result =  Math.round(parseFloat(interes));
        document.getElementById("alertitaI").innerHTML = "El interÃ©s es de: <strong>" + new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</strong>";
        document.getElementById("notificacionI").style.display = "block";
    
        }
        else{
            window.alert("La tasa de interes debe ser menor o igual a 17.21%");
            alert("Texto a mostrar");
        }
    
    

}

//Calculo del Tiempo
function calcularT(){
    var valorFuturo, valorPresente, tasaInteres, result;

    valorPresente = document.getElementById("valorPresenteT").value;
    valorFuturo = document.getElementById("valorFuturoT").value;
    tasaInteres = document.getElementById("tasaInteresT").value;
    if(tasaInteres <= 17.21){
        a = Math.log(valorFuturo/valorPresente);
        b = Math.log(parseInt(1)+parseFloat(tasaInteres));
        result = Math.round(parseFloat(a/b));
    
        document.getElementById("alertitaT").innerHTML = "El tiempo es de: <strong>" + result + "</strong> meses";
        document.getElementById("notificacionT").style.display = "block";

    
        }
        else{
            window.alert("La tasa de interes debe ser menor o igual a 17.21%");
            alert("Texto a mostrar");
        }



   
}


function limpiarVP(){
    document.getElementById("valorFuturo").value = "";
    document.getElementById("tasaInteres").value = "";
    document.getElementById("tiempo").value = "";
    document.getElementById("alertitaVP").innerHTML = "";
    document.getElementById("notificacionVP").style.display = "none";
}

function limpiarVF(){
    document.getElementById("valorPresente").value = "";
    document.getElementById("tasaInteresVF").value = "";
    document.getElementById("tiempoVF").value = "";
    document.getElementById("alertitaVF").innerHTML = "";
    document.getElementById("notificacionVF").style.display = "none";
}

function limpiarI(){
    document.getElementById("valorPresenteI").value = "";
    document.getElementById("tasaInteresI").value = "";
    document.getElementById("tiempoI").value = "";
    document.getElementById("alertitaI").innerHTML = "";
    document.getElementById("notificacionI").style.display = "none";
}

function limpiarTI(){
    document.getElementById("valorPresenteTI").value = "";
    document.getElementById("valorFuturoTI").value = "";
    document.getElementById("tiempoTI").value = "";
    document.getElementById("alertitaTI").innerHTML = "";
    document.getElementById("notificacionTI").style.display = "none";
}

function limpiarT(){
    document.getElementById("valorPresenteT").value = "";
    document.getElementById("valorFuturoT").value = "";
    document.getElementById("tasaInteresT").value = "";
    document.getElementById("alertitaT").innerHTML = "";
    document.getElementById("notificacionT").style.display = "none";
}