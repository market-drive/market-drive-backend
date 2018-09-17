package ua.ithillel.marketdrive.model;

import com.google.gson.annotations.SerializedName;

public class Purchace {

    @SerializedName("product_id")
    private int id;
    private byte quantity;

    public Purchace(int product_id, byte quantity) {
        this.id = product_id;
        this.quantity = quantity;
    }

    public int getProduct_id() {
        return id;
    }

    public void setProduct_id(int product_id) {
        this.id = product_id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(byte quantity) {
        this.quantity = quantity;
    }

}