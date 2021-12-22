package br.com.strawhats.localpe.dao;

import br.com.strawhats.localpe.models.Lugar;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LugarDao extends JpaRepository<Lugar,Long> {
    
    public List<Lugar> findAllByCategoria_Nome(String CategoriaNome);

    public List<Lugar> findAllByCategoria_Id(Long id);

    public List<Lugar> findAllByCategoria_DescricaoContains(String categoriaDescricao);
}
