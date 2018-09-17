package ua.ithillel.marketdrive.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class UserWithEncodedPassword {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "_id")
    private int id;

    private String name;
    private int passwordHashCode;
    private String email;

    public UserWithEncodedPassword() {
    }

    public UserWithEncodedPassword(String name, int passwordHashCode, String email) {
        this.name = name;
        this.passwordHashCode = passwordHashCode;
        this.email = email;
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

    public int getPasswordHashCode() {
        return passwordHashCode;
    }

    public void setPasswordHashCode(int passwordHashCode) {
        this.passwordHashCode = passwordHashCode;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}