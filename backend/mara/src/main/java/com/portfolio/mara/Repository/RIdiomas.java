
package com.portfolio.mara.Repository;

import com.portfolio.mara.Entity.Idiomas;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RIdiomas extends JpaRepository<Idiomas, Integer>{
    Optional <Idiomas> findByNombre (String nombre);
    public boolean existsByNombre (String nombre);
}
