package br.com.strawhats.localpe.controllers;

import br.com.strawhats.localpe.models.Lugar;
import br.com.strawhats.localpe.services.LugarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @PostMapping("/lugares")
    public void cadastrarLugar(Lugar lugar){
        try {
            lugarService.cadastrarLugar(lugar);
        }catch (Exception e){
            System.out.println("Erro: "+e.getMessage());
        }
    }

    @PutMapping("/lugares")
    public void editarLugar(Lugar lugar){
        try {
            lugarService.cadastrarLugar(lugar);
        }catch (Exception e){
            System.out.println("erro: "+ e.getMessage());
        }

    }
}
