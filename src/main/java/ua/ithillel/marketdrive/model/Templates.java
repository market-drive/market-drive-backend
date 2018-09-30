package ua.ithillel.marketdrive.model;

import com.google.gson.annotations.SerializedName;

import javax.persistence.*;

@Entity
@Table(name = "templates")
public class Templates {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    @SerializedName("user_id")
    @Column(name = "user_id")
    private int userId;

    public Templates() {
    }

    public Templates(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}