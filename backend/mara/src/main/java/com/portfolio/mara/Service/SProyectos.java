
package com.portfolio.mara.Service;

import com.portfolio.mara.Entity.Proyectos;
import com.portfolio.mara.Repository.RProyectos;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SProyectos {
    @Autowired
    RProyectos rProyectos;
    
    public List<Proyectos> list(){
        return rProyectos.findAll();
    }
    
    public Optional<Proyectos> getOne (int id){
        return rProyectos.findById(id);
    }
    
    public Optional<Proyectos> getByNombreP(String nombreP){
        return rProyectos.findBynombreP(nombreP);
    }
    
    public void save(Proyectos proy){
        rProyectos.save (proy);
    }
    
    public void delete(int id){
        rProyectos.deleteById(id);
    }
    
    public boolean existsById(int id){
         return rProyectos.existsById(id);
     }

     public boolean existsByNombreP(String nombreP){
         return rProyectos.existsByNombreP(nombreP);
     }
}
