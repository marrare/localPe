package br.com.strawhats.localpe.services;

import br.com.strawhats.localpe.dao.UsuarioDao;
import br.com.strawhats.localpe.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    UsuarioDao usuarioDao;

    public List<Usuario> listarTodosUsuarios(){
        return usuarioDao.findAll();
    }
    public  Usuario getUsuarioById(Long id){
        return usuarioDao.findById(id).get();
    }
    public void cadastrarUsuario(Usuario usuario){
        usuarioDao.save(usuario);
    }
    public void editarUsuario(Usuario usuario){
        usuarioDao.save(usuario);
    }
    public void deletarUsuarioByid(Long id){
        usuarioDao.deleteById(id);
    }
    public void deletarUsuario(Usuario usuario){
        usuarioDao.delete(usuario);
    }

}
