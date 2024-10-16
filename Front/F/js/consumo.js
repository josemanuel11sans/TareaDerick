
//ESTA SOLO FUE UNA PUREBA
// Suponiendo que tu api de spring boot este en localhost:8080
const url = 'http://localhost:8080/tareas/all'; // Cambia a tu endpoint específico

fetch(url, {
    method: 'GET', // O 'POST' dependiendo de lo que necesites
    headers: {
        'Content-Type': 'application/json', // O cualquier header necesario
    },
})
.then(response => response.json())
.then(data => {
    console.log(data); // Maneja la respuesta
})
.catch(error => {
    console.error('Error:', error); // Maneja errores
});
