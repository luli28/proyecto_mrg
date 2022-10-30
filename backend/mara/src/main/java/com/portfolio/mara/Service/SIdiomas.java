
package com.portfolio.mara.Service;

import com.portfolio.mara.Entity.Idiomas;
import com.portfolio.mara.Repository.RIdiomas;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Transactional
@Service
public class SIdiomas {
    @Autowired
    RIdiomas rIdiomas;
    
    public List<Idiomas> list(){
        return rIdiomas.findAll();
    }
    
    public Optional<Idiomas> getOne(int id){
        return rIdiomas.findById(id);
    }
    
    public Optional<Idiomas> getByNombre(String nombre){
        return rIdiomas.findByNombre(nombre);
    }
    
    public void save(Idiomas idiomas){
        rIdiomas.save(idiomas);
    }
    
    public void delete(int id){
        rIdiomas.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rIdiomas.existsById(id);
    }
    public boolean existsByNombre(String nombre){
        return rIdiomas.existsByNombre(nombre);
    }
}
