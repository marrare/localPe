package br.com.strawhats.localpe.dao;

import br.com.strawhats.localpe.models.Comentario;
import br.com.strawhats.localpe.models.Lugar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LugarDao extends JpaRepository<Lugar,Long> {


    @Query("SELECT l.comentarios FROM Lugar l WHERE l.id = ?1")
    public  List<Comentario> getComentariosByLugar_id(Long id);


    List<Lugar> findByNomeIgnoreCaseContaining(String lugar);

    List<Lugar> findByCategoriaIgnoreCaseContaining(String categoria);
}
