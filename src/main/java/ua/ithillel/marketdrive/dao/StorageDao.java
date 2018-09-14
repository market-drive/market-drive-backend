package ua.ithillel.marketdrive.dao;

import org.apache.commons.io.IOUtils;

import javax.servlet.ServletContext;
import java.io.IOException;
import java.io.InputStream;

public class StorageDao {

    private static StorageDao instance;

    private ServletContext context;

    public static synchronized StorageDao getInstance(ServletContext context) {
        if (instance == null) {
            instance = new StorageDao(context);
        }
        return instance;
    }

    private StorageDao(ServletContext context) {
        this.context = context;
    }

    public String getProducts() {
        InputStream is = context.getResourceAsStream("/WEB-INF/products.json");
        try {
            return IOUtils.toString(is, "UTF-8");
        } catch (IOException e) {
            return "";
        }
    }

    public String getPurchases() {
        InputStream is = context.getResourceAsStream("/WEB-INF/purchases.json");
        try {
            return IOUtils.toString(is, "UTF-8");
        } catch (IOException e) {
            return "";
        }
    }
}
