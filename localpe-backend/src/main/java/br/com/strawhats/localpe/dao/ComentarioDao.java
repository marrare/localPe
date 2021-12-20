package br.com.strawhats.localpe.dao;

import br.com.strawhats.localpe.models.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComentarioDao extends JpaRepository<Comentario,Long> {
}
