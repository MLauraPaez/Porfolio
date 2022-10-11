/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.porfoliomarialaurapaez.developer.Service;


import com.porfoliomarialaurapaez.developer.Entity.Hobbies;
import com.porfoliomarialaurapaez.developer.Repository.RHobbies;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class SHobbies {
     @Autowired
     RHobbies rHobbies;
     
     public List<Hobbies> list(){
         return rHobbies.findAll();
     }
     
     public Optional<Hobbies> getOne(int id){
         return rHobbies.findById(id);
     }
     
     public Optional<Hobbies> getByNombreE(String nombreE){
         return rHobbies.findByNombreE(nombreE);
     }
     
     public void save(Hobbies expe){
         rHobbies.save(expe);
     }
     
     public void delete(int id){
         rHobbies.deleteById(id);
     }
     
     public boolean existsById(int id){
         return rHobbies.existsById(id);
     }
     
     public boolean existsByNombreE(String nombreE){
         return rHobbies.existsByNombreE(nombreE);
     }
}
