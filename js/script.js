function validarCampos(n1, n2, requireTwoFields = true) {
    if (requireTwoFields && (n1 === '' || n2 === '')) {
        swal({
            title: "Error",
            text: "Por favor, llena ambos campos.",
            icon: "warning",
            button: {
                text: "Aceptar",
                closeModal: true,   
                className: "swal-button-centered"   
            },
            timer: 3000,
        });
        return false;
    } else if (!requireTwoFields && n1 === '') {
        swal({
            title: "Error",
            text: "Por favor, llena el campo.",
            icon: "warning",
            button: {
                text: "Aceptar",
                closeModal: true,
                className: "swal-button-centered" 
            },
            timer: 3000,
        });
        return false;
    }
    
    if (isNaN(n1) || (requireTwoFields && isNaN(n2))) {
        swal({
            title: "Error",
            text: "Por favor, ingresa valores numéricos válidos.",
            icon: "warning",
            button: {
                text: "Aceptar",
                closeModal: true,
            },
            timer: 3000,
        });
        return false;
    }

    return true;
}


// Función para sumar
function sumar() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (!validarCampos(n1, n2)) return;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    document.getElementById("resultado").innerText = n1 + " + " + n2 + " = " + (n1 + n2);
}

// Función para restar
function restar() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (!validarCampos(n1, n2)) return;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    document.getElementById("resultado").innerText = n1 + " - " + n2 + " = " + (n1 - n2);
}

// Función para multiplicar
function multiplicar() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (!validarCampos(n1, n2)) return;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    document.getElementById("resultado").innerText = n1 + " x " + n2 + " = " + (n1 * n2);
}

// Función para dividir
function dividir() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (!validarCampos(n1, n2)) return;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    if (n2 == 0) {
        swal({
            title: "Error",
            text: "Recuerda que no puedes dividir entre cero",
            icon: "warning",
            button: {
                text: "Aceptar",
                closeModal: true,
            },
            timer: 3000,
        });
        document.getElementById("resultado").innerText = "";
        return;
    }
    document.getElementById("resultado").innerText = n1 + " / " + n2 + " = " + (n1 / n2);
}

// Función de exponentes
function exponente() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (!validarCampos(n1, n2)) return;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    document.getElementById("resultado").innerText = n1 + " ^ " + n2 + " = " + (Math.pow(n1, n2));
}

// Función de raíz cuadrada
function raizCuadrada() {
    let n1 = document.getElementById("n1").value;
    if (!validarCampos(n1, '', false)) return;
    n1 = parseFloat(n1);
    if (n1 < 0) {
        swal({
            title: "Error",
            text: "No se puede calcular la raíz cuadrada de un número negativo.",
            icon: "warning",
            button: {
                text: "Aceptar",
                closeModal: true,
            },
            timer: 3000,
        });
        document.getElementById("resultado").innerText = "";
        return;
    }
    document.getElementById("resultado").innerText = "√" + n1 + " = " + (Math.sqrt(n1));
}
