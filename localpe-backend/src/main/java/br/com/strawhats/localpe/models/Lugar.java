package br.com.strawhats.localpe.models;

import br.com.strawhats.localpe.enums.Nota;

import java.util.List;

public class Lugar {

    private Long Id;
    private String nome;
    private String descricao;
    private String coordenadas;
    private Categoria categoria;
    private Nota nota;
    private List<String> caracteristicas;
    private Comentario comentario;
    private List<String> fotos;
    private Long visitas;

    public Lugar(Long id, String nome, String descricao, String coordenadas, Categoria categoria,
                 Nota nota, List<String> caracteristicas, Comentario comentario, List<String> fotos, Long visitas) {
        Id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.coordenadas = coordenadas;
        this.categoria = categoria;
        this.nota = nota;
        this.caracteristicas = caracteristicas;
        this.comentario = comentario;
        this.fotos = fotos;
        this.visitas = visitas;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getCoordenadas() {
        return coordenadas;
    }

    public void setCoordenadas(String coordenadas) {
        this.coordenadas = coordenadas;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Nota getNota() {
        return nota;
    }

    public void setNota(Nota nota) {
        this.nota = nota;
    }

    public List<String> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(List<String> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public Comentario getComentario() {
        return comentario;
    }

    public void setComentario(Comentario comentario) {
        this.comentario = comentario;
    }

    public List<String> getFotos() {
        return fotos;
    }

    public void setFotos(List<String> fotos) {
        this.fotos = fotos;
    }

    public Long getVisitas() {
        return visitas;
    }

    public void setVisitas(Long visitas) {
        this.visitas = visitas;
    }
}
