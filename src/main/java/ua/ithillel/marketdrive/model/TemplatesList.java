package ua.ithillel.marketdrive.model;

import com.google.gson.annotations.SerializedName;

import javax.persistence.*;

@Entity
@Table(name = "templates_list")
public class TemplatesList {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @SerializedName("storage_id")
    @Column(name = "storage_id")
    private int storageId;
    private int quantity;
    //@JoinColumn(name = "template_id")
    //@ManyToOne

    @SerializedName("template_id")
    @Column(name = "template_id")
    private int templateId;

    public TemplatesList() {
    }

    public TemplatesList(int id, int storageId, int quantity, int templateId) {
        this.id = id;
        this.storageId = storageId;
        this.quantity = quantity;
        this.templateId = templateId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStorageId() {
        return storageId;
    }

    public void setStorageId(int storageId) {
        this.storageId = storageId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getTemplate_id() {
        return templateId;
    }

    public void setTemplate_id(int template_id) {
        this.templateId = template_id;
    }

}