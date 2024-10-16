package com.example.TareaListas.Listas.Control;


import com.example.TareaListas.Listas.Model.Tarea;
import org.springframework.stereotype.Service;

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
}