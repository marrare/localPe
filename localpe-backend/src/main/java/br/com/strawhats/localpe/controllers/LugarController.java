package br.com.strawhats.localpe.controllers;

import br.com.strawhats.localpe.models.Categoria;
import br.com.strawhats.localpe.models.Comentario;
import br.com.strawhats.localpe.models.Lugar;
import br.com.strawhats.localpe.models.Usuario;
import br.com.strawhats.localpe.services.LugarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class LugarController {
    @Autowired
    LugarService lugarService;

    @GetMapping("/lugares")
    public List<Lugar> listarLugares(){
        try {
            return lugarService.listarTodosLugares();
        }catch (Exception e){
            System.out.println("Erro: "+e.getMessage());
            return null;
        }
    }
    @GetMapping("/lugar")
    public Lugar exibirLugar(Long id){
        try{
            return lugarService.ExibirLugar(id);
        }catch (Exception e){
            System.out.println("Erro: "+e.getMessage());
            return null;
        }
    }

    @PostMapping("/lugar")
    public void cadastrarLugar(Lugar lugar){
        try {
            lugarService.cadastrarLugar(lugar);
        }catch (Exception e){
            System.out.println("Erro: "+e.getMessage());
        }
    }

    @PutMapping("/lugar")
    public void editarLugar(@RequestHeader Lugar lugar){
        try {
            lugarService.cadastrarLugar(lugar);
        }catch (Exception e){
            System.out.println("erro: "+ e.getMessage());
        }

    }
    @DeleteMapping("/lugar/{id}")
    public void deletarLugar(@PathVariable Long id, @RequestHeader Usuario usuario){
        try {
            if(usuario.getAdmin()){
            lugarService.excluirLugar(id);
            }
            else {
                throw new Exception("Usuario não tem permisssão");
            }
        }catch (Exception e){
            System.out.println("erro: "+ e.getMessage());
        }

    }

    @GetMapping("/lugares/{categoria}")
    public List<Lugar> listarPorCategoria(@PathVariable Categoria categoria){
        return lugarService.listarPorCategoria(categoria);
    }

    @GetMapping("/comentarios/{id}")
    public List<Comentario> listarComentarios(@PathVariable Long LugarId){
        return lugarService.listarComentarios(LugarId);
    }


}
