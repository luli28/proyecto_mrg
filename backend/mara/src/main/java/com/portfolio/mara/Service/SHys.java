
package com.portfolio.mara.Service;

import com.portfolio.mara.Entity.Hys;
import com.portfolio.mara.Repository.RHys;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class SHys {
    @Autowired
    RHys rHys;
    
    public List<Hys> list(){
        return rHys.findAll();
    }
    
    public Optional<Hys> getOne(int id){
        return rHys.findById(id);
    }
    
    public Optional<Hys> getByNombre(String nombre){
        return rHys.findByNombre(nombre);
    }
    
    public void save(Hys skills){
        rHys.save(skills);
    }
    
    public void delete(int id){
        rHys.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rHys.existsById(id);
    }
    public boolean existsByNombre(String nombre){
        return rHys.existsByNombre(nombre);
    }
}
