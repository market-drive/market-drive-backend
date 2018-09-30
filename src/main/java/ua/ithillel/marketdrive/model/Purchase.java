package ua.ithillel.marketdrive.model;

import com.google.gson.annotations.SerializedName;

public class Purchase {

    private int id;
    @SerializedName("product_id")
    private int productId;
    private int quantity;
    @SerializedName("basket_id")
    private int basketId;

    public Purchase() {
    }

    public Purchase(int id, int productId, int quantity, int basketId) {
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
        this.basketId = basketId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getBasketId() {
        return basketId;
    }

    public void setBasketId(int basketId) {
        this.basketId = basketId;
    }

}