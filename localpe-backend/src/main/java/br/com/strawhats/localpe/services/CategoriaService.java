package br.com.strawhats.localpe.services;

import br.com.strawhats.localpe.dao.CategoriaDao;
import br.com.strawhats.localpe.models.Categoria;
import br.com.strawhats.localpe.models.Lugar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    CategoriaDao categoriaDao;

    public List<Categoria> listarCategorias(){
        return categoriaDao.findAll();
    }
    public Categoria getCategoriaById(Long id){
        return categoriaDao.findById(id).get();
    }
    public void editarCategoria(Categoria categoria){
        categoriaDao.save(categoria);
    }
    public void excluirCategoria(Categoria categoria){
        categoriaDao.delete(categoria);
    }
    public void adicionarCategoria(Categoria categoria){
        categoriaDao.save(categoria);
    }
}
