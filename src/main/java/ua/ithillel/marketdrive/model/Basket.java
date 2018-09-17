package ua.ithillel.marketdrive.model;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Basket {

    @SerializedName("user-id")
    private int userId;
    @SerializedName("purchace-id")
    private int purchaceId;
    private Date date = new Date();
    private Store store;
    private List<Purchace> purchace = new ArrayList<>();

    public Basket() {
    }

    public Basket(int userId, int purchaceId) {
        this.userId = userId;
        this.purchaceId = purchaceId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getPurchaceId() {
        return purchaceId;
    }

    public void setPurchaceId(int purchaceId) {
        this.purchaceId = purchaceId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Store getStore() {
        return store;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public List<Purchace> getPurchace() {
        return purchace;
    }

    public void setPurchace(List<Purchace> purchace) {
        this.purchace = purchace;
    }

}