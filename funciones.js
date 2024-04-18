function sumar(){
    var v1=parseInt(document.getElementById("valor1").value);
    var v2=parseInt(document.getElementById("valor2").value);
    var suma=0;

    suma=v1+v2;

    document.getElementById("resultado").value=suma;
}

function restar(){
    var v1=parseInt(document.getElementById("valor1").value);
    var v2=parseInt(document.getElementById("valor2").value);
    var suma=0;

    suma=v1-v2;

    document.getElementById("resultado").value=suma;
}

function multiplicar(){
    var v1=parseInt(document.getElementById("valor1").value);
    var v2=parseInt(document.getElementById("valor2").value);
    var suma=0;

    suma=v1*v2;

    document.getElementById("resultado").value=suma;
}

function dividir(){
    var v1=parseInt(document.getElementById("valor1").value);
    var v2=parseInt(document.getElementById("valor2").value);
    var suma=0;

    suma=v1/v2;

    document.getElementById("resultado").value=suma;
}