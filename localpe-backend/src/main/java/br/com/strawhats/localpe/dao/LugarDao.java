package br.com.strawhats.localpe.dao;

import br.com.strawhats.localpe.models.Lugar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LugarDao extends JpaRepository<Lugar,Long> {
}
