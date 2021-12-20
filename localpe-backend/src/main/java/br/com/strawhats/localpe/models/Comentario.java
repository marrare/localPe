package br.com.strawhats.localpe.models;

import java.util.Date;

public class Comentario {
    private Long id;
    private String comentario;
    private Date dataCriacao;
    private Date dataAlteracao;

    public Comentario(Long id, String comentario, Date dataCriacao, Date dataAlteracao) {
        this.id = id;
        this.comentario = comentario;
        this.dataCriacao = dataCriacao;
        this.dataAlteracao = dataAlteracao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Date getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(Date dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public Date getDataAlteracao() {
        return dataAlteracao;
    }

    public void setDataAlteracao(Date dataAlteracao) {
        this.dataAlteracao = dataAlteracao;
    }
}
