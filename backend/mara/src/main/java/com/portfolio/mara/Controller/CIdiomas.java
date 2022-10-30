
package com.portfolio.mara.Controller;

import com.portfolio.mara.Dto.dtoIdiomas;
import com.portfolio.mara.Entity.Idiomas;
import com.portfolio.mara.Security.Controller.Mensaje;
import com.portfolio.mara.Service.SIdiomas;
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
@RequestMapping("/idiomas")
@CrossOrigin(origins = {"https://frontprueba-2bc01.web.app","http://localhost:4200"})

public class CIdiomas {
    @Autowired
    SIdiomas sIdiomas;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Idiomas>> list(){
        List<Idiomas> list = sIdiomas.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    
 @GetMapping("/detail/{id}")
    public ResponseEntity<Idiomas> getById(@PathVariable("id") int id){
        if(!sIdiomas.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);

        Idiomas idiomas = sIdiomas.getOne(id).get();
        return new ResponseEntity(idiomas, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!sIdiomas.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        }
        sIdiomas.delete(id);
        return new ResponseEntity(new Mensaje("Se eliminó idioma"), HttpStatus.OK);
    }

   @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoIdiomas dtoidiomas) {
        if (StringUtils.isBlank(dtoidiomas.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (sIdiomas.existsByNombre(dtoidiomas.getNombre())) {
            return new ResponseEntity(new Mensaje("Ese idioma ya existe"), HttpStatus.BAD_REQUEST);
        }

       Idiomas idiomas = new Idiomas(dtoidiomas.getNombre(), dtoidiomas.getPorcentaje());
        sIdiomas.save(idiomas);

        return new ResponseEntity(new Mensaje("Se agregó idioma"), HttpStatus.OK);
    }
    
     @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoIdiomas dtoidiomas) {
       
        if (!sIdiomas.existsById(id)) {
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        }
    
        if (sIdiomas.existsByNombre(dtoidiomas.getNombre()) && sIdiomas.getByNombre(dtoidiomas.getNombre()).get()
                .getId() != id) {
            return new ResponseEntity(new Mensaje("Ese idioma ya existe"), HttpStatus.BAD_REQUEST);
        }
        
        if (StringUtils.isBlank(dtoidiomas.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }

       Idiomas idiomas = sIdiomas.getOne(id).get();
        idiomas.setNombre(dtoidiomas.getNombre());
        idiomas.setPorcentaje(dtoidiomas.getPorcentaje());


        sIdiomas.save(idiomas);
        return new ResponseEntity(new Mensaje("Se actualizó idiomas"), HttpStatus.OK);
    }
}
