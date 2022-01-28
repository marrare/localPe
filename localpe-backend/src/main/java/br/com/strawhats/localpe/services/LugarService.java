package br.com.strawhats.localpe.services;

import br.com.strawhats.localpe.dao.ComentarioDao;
import br.com.strawhats.localpe.dao.LugarDao;
import br.com.strawhats.localpe.models.Categoria;
import br.com.strawhats.localpe.models.Comentario;
import br.com.strawhats.localpe.models.Lugar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
public class LugarService {

    @Autowired
    LugarDao lugarDao;
    @Autowired
    ComentarioDao comentarioDao;

    public void cadastrarLugar(Lugar lugar){
        if (lugar != null){
            lugarDao.save(lugar);
        }
    }

    public void editarLugar(Lugar lugar){
        lugarDao.save(lugar);
    }

    public void excluirLugar(Long id){
        Lugar lugar = lugarDao.findById(id).get();
        lugarDao.delete(lugar);
    }

    public List<Lugar> listarTodosLugares(){
        return lugarDao.findAll();
    }

    public Lugar ExibirLugar(Long id){
        return lugarDao.findById(id).get();
    }

    public List<Lugar> listarPorCategoria(String categoria) {
        return  lugarDao.findByCategoriaIgnoreCaseContaining(categoria);
    }

    public List<Comentario> listarComentarios(Long lugarId) {
        return comentarioDao.findAllByLugarId(lugarId);
    }
    
    public List<Lugar> pesquisarLugares(String lugar){
           return lugarDao.findByNomeIgnoreCaseContaining(lugar);
    }

    public void adicionarComentarios(String comentario, Long lugarId, String usuarioId) {
        Comentario novoComentario = new Comentario();
        novoComentario.setLugarId(lugarId);
        novoComentario.setComentario(comentario);
        novoComentario.setDataAlteracao(new Date());
        novoComentario.setUsuarioID(usuarioId);
        comentarioDao.save(novoComentario);
    }

    public void excluirComentario(Long id) {
        comentarioDao.deleteById(id);
    }
}
