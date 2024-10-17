package com.example.TareaListas.Listas.Control;


import com.example.TareaListas.Listas.Model.Tarea;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

@Service
public class TareaService {

    private List<Tarea> listaDeTareas = new LinkedList<>();


    // Obtener todas las tareas
    public List<Tarea> obtenerTodasLasTareas() {
        return listaDeTareas;
    }

    // Agregar tarea
    public void agregarTarea(Tarea tarea) {
        listaDeTareas.add(tarea);
    }

    // Verificar si una tarea está en la lista
    public Tarea verificarTarea(String nombre) {
        for (Tarea tarea : listaDeTareas) {
            if (tarea.getNombre().equals(nombre)) {
                return tarea;
            }
        }
        return null;
    }

    // Contar tareas pendientes
    public long contarTareasPendientes() {
        return listaDeTareas.stream().filter(tarea -> !tarea.isCompletada()).count();
    }

    // Eliminar una tarea
    public boolean eliminarTarea(String nombre) {
        return listaDeTareas.removeIf(tarea -> tarea.getNombre().equals(nombre));
    }

    // Obtener todas las tareas pendientes
    public List<Tarea> obtenerTareasPendientes() {
        List<Tarea> tareasPendientes = new LinkedList<>();
        for (Tarea tarea : listaDeTareas) {
            if (!tarea.isCompletada()) {
                tareasPendientes.add(tarea);
            }
        }
        return tareasPendientes;
    }

    //listar terminadas
    public List<Tarea> obtenerTareasTerminadas() {
        List<Tarea> tareasPendientes = new LinkedList<>();
        for (Tarea tarea : listaDeTareas) {
            if (tarea.isCompletada()) {
                tareasPendientes.add(tarea);
            }
        }
        return tareasPendientes;
    }
  //cambiar estado de la tarea
    public ResponseEntity<String> cambiarestado(@PathVariable String nombre){
        Tarea tarea = verificarTarea(nombre);
        if (tarea != null) {
            if (tarea.isCompletada()) {
                tarea.setCompletada(false);
                return ResponseEntity.ok("tarea marcada con estado pendinete");
            }else {
                tarea.setCompletada(true);
                return ResponseEntity.ok("Tarea marcada como terminada");
            }
        }else {
            return ResponseEntity.ok("Tarea terminada");
        }
    }


    // Limpiar la lista de tareas
    public void limpiarLista() {
        listaDeTareas.clear();
    }

    // Exportar tareas a archivo
    public String exportarTareas() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("tareas.txt", true))) {
            for (Tarea tarea : listaDeTareas) {
                writer.write(tarea.toString());
                writer.newLine();
                writer.newLine();
            }
            return "Tareas exportadas exitosamente a 'tareas.txt'";
        } catch (IOException e) {
            return "Ocurrió un error al escribir el archivo: " + e.getMessage();
        }
    }


    //actualiar tarea
    public String actualizarTarea(String nombre, Tarea tareaActualizada) {
        Tarea tareaExistente = verificarTarea(nombre);
        if (tareaExistente != null) {
            // Actualiza los detalles de la tarea existente
            tareaExistente.setDescripcion(tareaActualizada.getDescripcion());
            tareaExistente.setFecha(tareaActualizada.getFecha());
            //tareaExistente.setNombre(tareaActualizada.getNombre());
            // Si necesitas actualizar el estado, puedes incluir lógica aquí
            return "Tarea actualizada exitosamente.";
        } else {
            return "Tarea no encontrada.";
        }
    }
}