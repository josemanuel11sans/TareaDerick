package com.example.TareaListas.Listas.Model;

public class Tarea {
    private String nombre;
    private String descripcion;
    private String fecha;
    private boolean completada = false;

    public Tarea() {
    }

    public Tarea(String nombre, String descripcion, String fecha) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.completada = false;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public boolean isCompletada() {
        return completada;
    }

    public void setCompletada(boolean completada) {
        this.completada = completada;
    }

    @Override
    public String toString() {
        return "Tarea [nombre=" + nombre + ", descripcion=" + descripcion + ", fecha=" + fecha + ", completada="
                + completada + "]";
    }



}