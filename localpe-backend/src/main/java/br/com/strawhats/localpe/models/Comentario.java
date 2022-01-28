package br.com.strawhats.localpe.models;

import javax.persistence.*;
import java.util.Date;
@Entity
public class Comentario {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String comentario;
    private Date dataCriacao;
    private Date dataAlteracao;
    @JoinColumn()
    private Long lugarId;
    private String usuarioID;

    public Comentario(Long id, String comentario, Date dataCriacao, Date dataAlteracao) {
        this.id = id;
        this.comentario = comentario;
        this.dataCriacao = dataCriacao;
        this.dataAlteracao = dataAlteracao;
    }

    public Comentario() {

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
    public Long getLugarId() {
        return lugarId;
    }

    public void setLugarId(Long lugarId) {
        this.lugarId = lugarId;
    }
    public String getUsuarioID() {
        return usuarioID;
    }

    public void setUsuarioID(String usuarioID) {
        this.usuarioID = usuarioID;
    }
}
