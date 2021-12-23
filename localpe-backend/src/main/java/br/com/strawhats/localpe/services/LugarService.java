package br.com.strawhats.localpe.services;

import br.com.strawhats.localpe.dao.ComentarioDao;
import br.com.strawhats.localpe.dao.LugarDao;
import br.com.strawhats.localpe.models.Categoria;
import br.com.strawhats.localpe.models.Comentario;
import br.com.strawhats.localpe.models.Lugar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public List<Lugar> listarPorCategoria(Categoria categoria) {
        if(categoria.getId() != null){
           return lugarDao.findAllByCategoria_Id(categoria.getId());
        }
        if(categoria.getNome() != null){
            return lugarDao.findAllByCategoria_Nome(categoria.getNome());
        }
        if(categoria.getDescricao() != null){
            return lugarDao.findAllByCategoria_DescricaoContains(categoria.getDescricao());
        }
        else return null;
    }

    public List<Comentario> listarComentarios(Long LugarId) {
        return lugarDao.getComentariosByLugar_id(LugarId);
    }
}
