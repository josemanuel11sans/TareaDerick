function validarCampos(n1, n2, requireTwoFields = true) {
    if (requireTwoFields && (n1 === '' || n2 === '')) {
        Swal.fire({
            title: "Error",
            text: "Por favor, llena ambos campos.",
            icon: "warning",
            background: 'black',
            color: 'white',
            confirmButtonColor: '#3498DB',
            confirmButtonText: "Aceptar",
            customClass: {
                confirmButton: "swal-button-centered"
            }
        });
        return false;
    } else if (!requireTwoFields && n1 === '') {
        Swal.fire({
            title: "Error",
            text: "Por favor, llena el campo.",
            icon: "warning",
            background: 'black',
            color: 'white',
            confirmButtonColor: '#3498DB',
            confirmButtonText: "Aceptar",
            customClass: {
                confirmButton: "swal-button-centered"
            }
        });
        return false;
    }
    
    if (isNaN(n1) || (requireTwoFields && isNaN(n2))) {
        Swal.fire({
            title: "Error",
            text: "Por favor, ingresa valores numéricos válidos.",
            icon: "warning",
            background: 'black',
            color: 'white',
            confirmButtonColor: '#3498DB',
            confirmButtonText: "Aceptar",
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
        Swal.fire({
            title: "Error",
            text: "Recuerda que no puedes dividir entre cero.",
            icon: "warning",
            background: 'black',
            color: 'white',
            confirmButtonColor: '#3498DB',
            confirmButtonText: "Aceptar",
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
        Swal.fire({
            title: "Error",
            text: "No se puede calcular la raíz cuadrada de un número negativo.",
            icon: "warning",
            confirmButtonText: "Aceptar",
            timer: 3000
        });
        document.getElementById("resultado").innerText = "";
        return;
    }
    document.getElementById("resultado").innerText = "√" + n1 + " = " + (Math.sqrt(n1));
}

// Equipo
function equipo(ap1, app1, nom1, ap2, app2, nom2, ap3, app3, nom3, ap4, app4, nom4, ap5, app5, nom5, ap6, app6, nom6) {
    console.log("Hola " + ap1 + " " + app1 + " " + nom1 + " " + ap2 + " " + app2 + " " + nom2 + ap3 + " " + app3 + " " + nom3 + " " + ap4 + " " + app4 + " " + nom4 + ap5 + " " + app5 + " " + nom5 + " " + ap6 + " " + app6 + " " + nom6);
    
    Swal.fire({
        title: 'Autores de la página:',
        html: `${ap1} ${app1} ${nom1}<br>${ap2} ${app2} ${nom2}<br>${ap3} ${app3} ${nom3}<br>${ap4} ${app4} ${nom4}<br>${ap5} ${app5} ${nom5}<br>${ap6} ${app6} ${nom6}`,   
        imageUrl: 'img/logo.png',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Img',
        background: 'black',
        color: 'white',
        confirmButtonColor: '#3498DB',
        confirmButtonText: "Aceptar",
        customClass: {
            confirmButton: "btn btn-primary",
            container: "custom-alert" 
        }
    });    
    
}

//Funcion Borrar o Limpiar
function borrar() {
    document.getElementById("n1").value = '';
    document.getElementById("n2").value = '';
    document.getElementById("resultado").innerText = '';
}