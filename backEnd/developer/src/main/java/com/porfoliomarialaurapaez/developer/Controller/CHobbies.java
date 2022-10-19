/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.porfoliomarialaurapaez.developer.Controller;

import com.porfoliomarialaurapaez.developer.Dto.dtoHobbies;
import com.porfoliomarialaurapaez.developer.Entity.Hobbies;
import com.porfoliomarialaurapaez.developer.Security.Controller.Mensaje;
import com.porfoliomarialaurapaez.developer.Service.SHobbies;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/hobbies")
/*@CrossOrigin(origins = "https://localhost:4200")*/
@CrossOrigin(origins = "https://frontend-proyecto-porfolio-mlp.web.app")

public class CHobbies {
 @Autowired
 SHobbies sHobbies;
 
 @GetMapping("/lista")
    public ResponseEntity<List<Hobbies>> list(){
        List<Hobbies> list = sHobbies.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Hobbies> getById(@PathVariable("id") int id){
        if(!sHobbies.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
       Hobbies hobbies = sHobbies.getOne(id).get();
        return new ResponseEntity(hobbies, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!sHobbies.existsById(id)) {
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        }
        sHobbies.delete(id);
        return new ResponseEntity(new Mensaje("producto eliminado"), HttpStatus.OK);
    }

    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoHobbies dtohobb){      
        if(StringUtils.isBlank(dtohobb.getNombreE()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(sHobbies.existsByNombreE(dtohobb.getNombreE()))
            return new ResponseEntity(new Mensaje("Ese Hobbies existe"), HttpStatus.BAD_REQUEST);
        
        Hobbies hobbies = new Hobbies(dtohobb.getNombreE(), dtohobb.getDescripcionE(), dtohobb.getImagenE());
        sHobbies.save(hobbies);
        
        return new ResponseEntity(new Mensaje("Hobbies agregado"), HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoHobbies dtohobb){
        //Validamos si existe el ID
        if(!sHobbies.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        //Compara nombre de experiencias
        if(sHobbies.existsByNombreE(dtohobb.getNombreE()) && sHobbies.getByNombreE(dtohobb.getNombreE()).get().getId() != id)
            return new ResponseEntity(new Mensaje("Ese Hobbies ya existe"), HttpStatus.BAD_REQUEST);
        //No puede estar vacio
        if(StringUtils.isBlank(dtohobb.getNombreE()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        
        Hobbies hobbies = sHobbies.getOne(id).get();
        hobbies.setNombreE(dtohobb.getNombreE());
        hobbies.setDescripcionE((dtohobb.getDescripcionE()));
        hobbies.setImagenE((dtohobb.getImagenE()));
        
        sHobbies.save(hobbies);
        return new ResponseEntity(new Mensaje("Hobbies actualizado"), HttpStatus.OK);
             
    }
}

 