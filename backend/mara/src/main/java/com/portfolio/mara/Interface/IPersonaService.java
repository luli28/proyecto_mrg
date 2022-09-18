package com.portfolio.mara.Interface;

import com.portfolio.mara.Entity.Persona;
import java.util.List;

public interface IPersonaService {
   //Listar de personas
    public List<Persona> getPersona();

    //Guardar Persona
    public void savePersona(Persona persona);

    //Eliminar Persona por ID
    public void deletePersona(Long id);

    //Buscar Persona por ID
    public Persona findPersona(Long id);
    
    
}
