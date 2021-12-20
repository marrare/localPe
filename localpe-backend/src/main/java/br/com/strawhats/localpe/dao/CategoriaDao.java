package br.com.strawhats.localpe.dao;

import br.com.strawhats.localpe.models.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaDao extends JpaRepository<Categoria,Long> {
}
