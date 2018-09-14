package ua.ithillel.marketdrive.model;

public class Product {
    private String name;
    private String brand;
    private double price;
    private String url;

    public Product(String name, String brand, double price, String url) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String url() {
        return url;
    }

    public void url(String imageUrl) {
        this.url = imageUrl;
    }
}

