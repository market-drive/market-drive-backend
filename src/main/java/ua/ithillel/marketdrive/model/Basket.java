package ua.ithillel.marketdrive.model;

import com.google.gson.annotations.SerializedName;

import java.util.Date;

public class Basket {

    private int id;
    @SerializedName("user_id")
    private int userId;
    private Date date = new Date();
    @SerializedName("purchase_id")
    private int purchaseId;
    @SerializedName("store_id")
    private Store storeId;

    public Basket() {
    }

    public Basket(int id, int userId, Date date, int purchaseId, Store storeId) {
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.purchaseId = purchaseId;
        this.storeId = storeId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getPurchaseId() {
        return purchaseId;
    }

    public void setPurchaseId(int purchaseId) {
        this.purchaseId = purchaseId;
    }

    public Store getStoreId() {
        return storeId;
    }

    public void setStoreId(Store storeId) {
        this.storeId = storeId;
    }
}