package br.com.strawhats.localpe.controllers;

import br.com.strawhats.localpe.models.Categoria;
import br.com.strawhats.localpe.models.Comentario;
import br.com.strawhats.localpe.models.Lugar;
import br.com.strawhats.localpe.models.Usuario;
import br.com.strawhats.localpe.services.LugarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
@CrossOrigin(origins = "*")
@RestController
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
    @GetMapping("/lugar/{id}")
    public Lugar exibirLugar(@PathVariable Long id){
        try{
            return lugarService.ExibirLugar(id);
        }catch (Exception e){
            System.out.println("Erro: "+e.getMessage());
            return null;
        }
    }

    @PostMapping("/lugar")
    public ResponseEntity cadastrarLugar(@RequestHeader String nome,@RequestHeader String foto,@RequestHeader String categoria,@RequestHeader String descricao){
        Lugar lugar = new Lugar();
        lugar.setNome(nome);
        lugar.setFotos(Arrays.asList(foto));
        lugar.setDescricao(descricao);
        lugar.setCategoria(categoria);
        try {
            lugarService.cadastrarLugar(lugar);

        }catch (Exception e){
            System.out.println("Erro: "+e.getMessage());
            return ResponseEntity.internalServerError().body("Erro ao cadastrar, Erro:"+ e.getMessage());
        }
        return ResponseEntity.accepted().body("Lugar cadastrado");
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
    public void deletarLugar(@PathVariable Long id){
        try {
            lugarService.excluirLugar(id);
        }catch (Exception e){
            System.out.println("erro: "+ e.getMessage());
        }

    }

    @GetMapping("/lugares/{categoria}")
    public List<Lugar> listarPorCategoria(@PathVariable String categoria){
        return lugarService.listarPorCategoria(categoria);
    }

    @GetMapping("/comentarios/{lugarId}")
    public List<Comentario> listarComentarios(@PathVariable Long lugarId){
        return lugarService.listarComentarios(lugarId);
    }
    
    
     @GetMapping("/lugares/p/{pesquisa}")
    public List<Lugar> pesquisarLugares(@PathVariable String pesquisa){
        return lugarService.pesquisarLugares(pesquisa);

    }




}
