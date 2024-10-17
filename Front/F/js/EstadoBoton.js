//maneja el cambio de color del boton encendido y apagado que esta dentro de el html
 $(document).on('click', '.estado-toggle', function() {
    let button = $(this);
    if (button.hasClass('btn-success')) {
        button.removeClass('btn-success').addClass('btn-danger').text('Pendiente');
    } else {
        button.removeClass('btn-danger').addClass('btn-success').text('Terminada');
    }
});