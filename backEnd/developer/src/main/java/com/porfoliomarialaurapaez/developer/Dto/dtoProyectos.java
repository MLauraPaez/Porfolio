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

public class dtoProyectos {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String descripcionE;
    @NotBlank
    private String imagenE;
    //Constructores

    public dtoProyectos() {
    }

    public dtoProyectos(String nombreE, String descripcionE, String imagenE) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imagenE = imagenE;
    }
    //Getters & Setters

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }
    
    public String getImagenE() {
     return imagenE;
    }

    public void setImagenE(String imagenE) {
       this.imagenE = imagenE;
   }
}
