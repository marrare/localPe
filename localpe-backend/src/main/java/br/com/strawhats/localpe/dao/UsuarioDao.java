package br.com.strawhats.localpe.dao;

import br.com.strawhats.localpe.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioDao extends JpaRepository<Usuario,Long> {
}
