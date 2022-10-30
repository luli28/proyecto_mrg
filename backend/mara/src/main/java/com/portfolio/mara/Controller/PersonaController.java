
package com.portfolio.mara.Controller;

import com.portfolio.mara.Dto.dtoPersona;
import com.portfolio.mara.Entity.Persona;
import com.portfolio.mara.Security.Controller.Mensaje;
import com.portfolio.mara.Service.ImpPersonaService;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/personas")
@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "https://frontprueba-2bc01.web.app")

public class PersonaController {
    @Autowired
    ImpPersonaService ipersonaService;
    
  @GetMapping("/lista")
    public ResponseEntity<List<Persona>> list(){
        List<Persona> list = ipersonaService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
     @GetMapping("/detail/{id}")
    public ResponseEntity<Persona> getById(@PathVariable("id")int id){
        if(!ipersonaService.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.BAD_REQUEST);
        }
        
        Persona persona = ipersonaService.getOne(id).get();
        return new ResponseEntity(persona, HttpStatus.OK);
    }
        
     @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoPersona dtopersona){
        if(!ipersonaService.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if(ipersonaService.existsByNombre(dtopersona.getNombre()) && ipersonaService.getByNombre(dtopersona.getNombre()).get().getId() != id){
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtopersona.getNombre())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        
        Persona persona = ipersonaService.getOne(id).get();
        
        persona.setNombre(dtopersona.getNombre());
        persona.setApellido(dtopersona.getApellido());
        persona.setDescripcion(dtopersona.getDescripcion());
        persona.setImg(dtopersona.getImg());
        
        ipersonaService.save(persona);
        
        return new ResponseEntity(new Mensaje("Persona actualizada"), HttpStatus.OK);
    } 
        
}   
