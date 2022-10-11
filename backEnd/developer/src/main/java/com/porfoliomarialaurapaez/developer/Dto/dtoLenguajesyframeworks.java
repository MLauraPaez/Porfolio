/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.porfoliomarialaurapaez.developer.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author Maria Laura
 */

public class dtoLenguajesyframeworks {
    @NotBlank
    private String nombre;
    @NotBlank
    private int porcentaje;

    public dtoLenguajesyframeworks() {
    }

    public dtoLenguajesyframeworks(String nombre, int porcentaje) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }
    
    
}