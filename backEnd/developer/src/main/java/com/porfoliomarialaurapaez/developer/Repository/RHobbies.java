/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.porfoliomarialaurapaez.developer.Repository;

import com.porfoliomarialaurapaez.developer.Entity.Hobbies;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RHobbies extends JpaRepository<Hobbies, Integer>{
    public Optional<Hobbies> findByNombreE(String nombreE);
    public boolean existsByNombreE(String nombreE);
}