/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.porfoliomarialaurapaez.developer.Controller;

import com.porfoliomarialaurapaez.developer.Dto.dtoLenguajesyframeworks;
import com.porfoliomarialaurapaez.developer.Entity.lenguajesyframeworks;
import com.porfoliomarialaurapaez.developer.Security.Controller.Mensaje;
import com.porfoliomarialaurapaez.developer.Service.Slenguajesyframeworks;
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

/**
 *
 * @author Maria Laura
 */


@RestController
/*@CrossOrigin(origins = "https://localhost:4200")*/
@CrossOrigin(origins = "https://frontend-proyecto-porfolio-mlp.web.app")

@RequestMapping("/habilidades")
public class CLenguajesyframeworks {

    @Autowired
    Slenguajesyframeworks slenguajesyframeworks;

    @GetMapping("/lista")
    public ResponseEntity<List<lenguajesyframeworks>> list() {
        List<lenguajesyframeworks> list = slenguajesyframeworks.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<lenguajesyframeworks> getById(@PathVariable("id") int id) {
        if (!slenguajesyframeworks.existsById(id)) {
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        }
        lenguajesyframeworks lenguajesyframeworks = slenguajesyframeworks.getOne(id).get();
        return new ResponseEntity(lenguajesyframeworks, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!slenguajesyframeworks.existsById(id)) {
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        }
        slenguajesyframeworks.delete(id);
        return new ResponseEntity(new Mensaje("habilidad eliminado"), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoLenguajesyframeworks dtolenguajesyframeworks) {
        if (StringUtils.isBlank(dtolenguajesyframeworks.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (slenguajesyframeworks.existsByNombre(dtolenguajesyframeworks.getNombre())) {
            return new ResponseEntity(new Mensaje("Esa habilidad ya existe"), HttpStatus.BAD_REQUEST);
        }

        lenguajesyframeworks lenguajesyframeworks = new lenguajesyframeworks(dtolenguajesyframeworks.getNombre(), dtolenguajesyframeworks.getPorcentaje());
        slenguajesyframeworks.save(lenguajesyframeworks);

        return new ResponseEntity(new Mensaje("Habilidad agregada"), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoLenguajesyframeworks dtolenguajesyframeworks) {
        //Validamos si existe el ID
        if (!slenguajesyframeworks.existsById(id)) {
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        }
        //Compara nombre de skills
        if (slenguajesyframeworks.existsByNombre(dtolenguajesyframeworks.getNombre()) && slenguajesyframeworks.getByNombre(dtolenguajesyframeworks.getNombre()).get()
                .getId() != id) {
            return new ResponseEntity(new Mensaje("Esa habilidad ya existe"), HttpStatus.BAD_REQUEST);
        }
        //No puede estar vacio
        if (StringUtils.isBlank(dtolenguajesyframeworks.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }

       lenguajesyframeworks lenguajesyframeworks = slenguajesyframeworks.getOne(id).get();
        lenguajesyframeworks.setNombre(dtolenguajesyframeworks.getNombre());
        lenguajesyframeworks.setPorcentaje(dtolenguajesyframeworks.getPorcentaje());

        slenguajesyframeworks.save(lenguajesyframeworks);
        return new ResponseEntity(new Mensaje("Habilidad actualizada"), HttpStatus.OK);

    }
}