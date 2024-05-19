// Función de validación
function validarCampos(n1, n2, requireTwoFields = true) {
    if (requireTwoFields && (n1 === '' || n2 === '')) {
        swal("Uppps", "Por favor, llena ambos campos.", "error");
        return false;
    } else if (!requireTwoFields && n1 === '') {
        swal("Uppps", "Por favor, llena el campo.", "error");
        return false;
    }
    
    if (isNaN(n1) || (requireTwoFields && isNaN(n2))) {
        swal("Uppps", "Por favor, ingresa valores numéricos válidos.", "error");
        return false;
    }
    
    // Validar si son números negativos
    // if (parseFloat(n1) < 0 || (requireTwoFields && parseFloat(n2) < 0)) {
    //     swal("Uppps", "Por favor, ingresa valores positivos.", "error");
    //     return false;
    // }

    return true;
}

// Función para sumar
function sumar() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (!validarCampos(n1, n2)) return;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    document.getElementById("resultado").innerText = n1 + n2;
}

// Función para restar
function restar() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (!validarCampos(n1, n2)) return;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    document.getElementById("resultado").innerText = n1 - n2;
}

// Función para multiplicar
function multiplicar() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (!validarCampos(n1, n2)) return;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    document.getElementById("resultado").innerText = n1 * n2;
}

// Función para dividir
function dividir() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (!validarCampos(n1, n2)) return;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    if (n2 == 0) {
        swal("Uppps", "Recuerda que no puedes dividir entre cero", "error");
        document.getElementById("resultado").innerText = "";
        return;
    }
    document.getElementById("resultado").innerText = n1 / n2;
}

// Función de exponentes
function exponente() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (!validarCampos(n1, n2)) return;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    document.getElementById("resultado").innerText = Math.pow(n1, n2);
}

// Función de raíz cuadrada
function raizCuadrada() {
    let n1 = document.getElementById("n1").value;
    if (!validarCampos(n1, '', false)) return;
    n1 = parseFloat(n1);
    if (n1 < 0) {
        swal("Uppps", "No se puede calcular la raíz cuadrada de un número negativo.", "error");
        document.getElementById("resultado").innerText = "";
        return;
    }
    document.getElementById("resultado").innerText = Math.sqrt(n1);
}
