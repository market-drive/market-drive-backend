package ua.ithillel.marketdrive.model;

import com.google.gson.annotations.SerializedName;

public class Store {

    @SerializedName("store_id")
    private int id;
    @SerializedName("store-adress")
    private String adress;
    @SerializedName("store-map")
    private String map;

    public Store(int id, String adress, String map) {
        this.id = id;
        this.adress = adress;
        this.map = map;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getMap() {
        return map;
    }

    public void setMap(String map) {
        this.map = map;
    }

}