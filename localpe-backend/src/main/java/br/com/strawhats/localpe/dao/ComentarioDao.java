package br.com.strawhats.localpe.dao;

import br.com.strawhats.localpe.models.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComentarioDao extends JpaRepository<Comentario,Long> {


    List<Comentario> findAllByLugarId(Long lugarId);
}
