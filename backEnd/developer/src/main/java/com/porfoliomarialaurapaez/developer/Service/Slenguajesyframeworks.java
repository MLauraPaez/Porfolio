/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.porfoliomarialaurapaez.developer.Service;

import com.porfoliomarialaurapaez.developer.Entity.lenguajesyframeworks;
import com.porfoliomarialaurapaez.developer.Repository.Rlenguajesyframeworks;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Transactional
@Service
public class Slenguajesyframeworks {
    @Autowired
    Rlenguajesyframeworks rlenguajesyframeworks;
    
    public List<lenguajesyframeworks> list(){
        return rlenguajesyframeworks.findAll();
    }
    
    public Optional<lenguajesyframeworks> getOne(int id){
        return rlenguajesyframeworks.findById(id);
    }
    
    public Optional<lenguajesyframeworks> getByNombre(String nombre){
        return rlenguajesyframeworks.findByNombre(nombre);
    }
    
    public void save(lenguajesyframeworks Habilidades){
        rlenguajesyframeworks.save(Habilidades);
    }
    
    public void delete(int id){
        rlenguajesyframeworks.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rlenguajesyframeworks.existsById(id);
    }
    
    public boolean existsByNombre(String nombre){
        return rlenguajesyframeworks.existsByNombre(nombre);
    }
}