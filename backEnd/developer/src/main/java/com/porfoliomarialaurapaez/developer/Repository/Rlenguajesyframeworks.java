/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.porfoliomarialaurapaez.developer.Repository;

import com.porfoliomarialaurapaez.developer.Entity.lenguajesyframeworks;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface Rlenguajesyframeworks extends JpaRepository<lenguajesyframeworks, Integer>{
    Optional<lenguajesyframeworks> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);
}

