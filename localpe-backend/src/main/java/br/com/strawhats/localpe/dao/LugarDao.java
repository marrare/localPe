package br.com.strawhats.localpe.dao;

import br.com.strawhats.localpe.models.Comentario;
import br.com.strawhats.localpe.models.Lugar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LugarDao extends JpaRepository<Lugar,Long> {
    
    public List<Lugar> findAllByCategoria_Nome(String CategoriaNome);

    public List<Lugar> findAllByCategoria_Id(Long id);

    public List<Lugar> findAllByCategoria_DescricaoContains(String categoriaDescricao);

    @Query("SELECT l.comentarios FROM Lugar l WHERE l.id = ?1")
    public  List<Comentario> getComentariosByLugar_id(Long id);
    
    @Query("SELECT * from lugar where lugar.nome = ?1")
    public List<Lugar> findAllLikeByName(String lugar);
}
