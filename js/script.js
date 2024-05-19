// Funcion para sumar
function sumar(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerText = n1 + n2;
}

// Funcion para restar
function restar(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerText = n1 - n2;
}

// Funcion para multiplicar
function multiplicar(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerText = n1 * n2;
}

// Funcion para dividir
function dividir(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerText = n1 / n2;
}

// Funcion de exponentes
function exponente(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerText = Math.pow(n1, n2);
}

// Funcion de raiz cuadrada
function raizCuadrada(){
    let n1 = parseFloat(document.getElementById("n1").value);
    document.getElementById("resultado").innerText = Math.sqrt(n1);
}