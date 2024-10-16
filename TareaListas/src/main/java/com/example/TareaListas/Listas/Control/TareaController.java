package com.example.TareaListas.Listas.Control;


import com.example.TareaListas.Listas.Model.Tarea;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tareas")
public class TareaController {

    @Autowired
    private TareaService tareaService;

    // Obtener todas las tareas
    @GetMapping("/all")
    public List<Tarea> obtenerTodasLasTareas() {
        return tareaService.obtenerTodasLasTareas();
    }

    // Agregar tarea
    @PostMapping("/agregar")
    public String agregarTarea(@RequestBody Tarea tarea) {
        tareaService.agregarTarea(tarea);
        return "Tarea agregada exitosamente";
    }

    // Verificar tarea
    @GetMapping("/verificar/{nombre}")
    public String verificarTarea(@PathVariable String nombre) {
        Tarea tarea = tareaService.verificarTarea(nombre);
        if (tarea != null) {
            return "La tarea " + nombre + " está en la lista y " + (tarea.isCompletada() ? "está completada" : "está pendiente");
        }
        return "La tarea " + nombre + " no está en la lista";
    }

    // Contar tareas pendientes
    @GetMapping("/pendientes")
    public String contarTareasPendientes() {
        long pendientes = tareaService.contarTareasPendientes();
        return "El número de tareas pendientes es: " + pendientes;
    }

    // Eliminar tarea
    @DeleteMapping("/eliminar/{nombre}")
    public String eliminarTarea(@PathVariable String nombre) {
        boolean eliminada = tareaService.eliminarTarea(nombre);
        return eliminada ? "Tarea eliminada correctamente" : "No se encontró la tarea";
    }

    // Obtener tareas pendientes
    @GetMapping("/listar-pendientes")
    public List<Tarea> obtenerTareasPendientes() {
        return tareaService.obtenerTareasPendientes();
    }

    // Limpiar lista
    @DeleteMapping("/limpiar")
    public String limpiarLista() {
        tareaService.limpiarLista();
        return "Lista de tareas limpiada correctamente";
    }

    // Exportar tareas
    @GetMapping("/exportar")
    public String exportarTareas() {
        return tareaService.exportarTareas();
    }
}