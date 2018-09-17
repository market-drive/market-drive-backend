package ua.ithillel.marketdrive.api;

import com.google.gson.Gson;
import ua.ithillel.marketdrive.dao.StorageDao;
import ua.ithillel.marketdrive.dao.UserDao;
import ua.ithillel.marketdrive.model.Basket;
import ua.ithillel.marketdrive.model.Result;
import ua.ithillel.marketdrive.model.User;
import ua.ithillel.marketdrive.model.UserWithEncodedPassword;

import javax.servlet.ServletContext;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/")
public class Api {

    private Gson gson = new Gson();

    @Context
    private ServletContext context;

    @GET
    @Path("products")
    @Produces(MediaType.APPLICATION_JSON + ";charset=UTF-8")
    public Response getProducts() {
        String json = StorageDao.getInstance(context).getProducts();
        return Response.status(Response.Status.OK).entity(json).build();
    }

    @GET
    @Path("products_full")
    @Produces(MediaType.APPLICATION_JSON + ";charset=UTF-8")
    public Response getProductsFull() {
        String json = StorageDao.getInstance(context).getProductsFull();
        return Response.status(Response.Status.OK).entity(json).build();
    }

    @GET
    @Path("purchases")
    @Produces(MediaType.APPLICATION_JSON + ";charset=UTF-8")
    public Response getPurchases() {
        String json = StorageDao.getInstance(context).getPurchases();
        return Response.status(Response.Status.OK).entity(json).build();
    }

    @POST
    @Path("register")
    public Response register(String json) {
        User user = gson.fromJson(json, User.class);
        UserWithEncodedPassword userWithEncodedPassword = new UserWithEncodedPassword(
                user.getName(),
                user.getPassword().hashCode(),
                user.getEmail());
        UserDao userDao = new UserDao();
        if(userDao.getByName(userWithEncodedPassword.getName()) != null) {
            Result result = new Result();
            result.setSuccess(false);
            result.setReason("user with the name " + user.getName() + " is already exists");
            String resultStr = gson.toJson(result);
            return Response.status(Response.Status.CONFLICT).entity(resultStr).build();
        } else {
        userDao.insert(userWithEncodedPassword);
        Result result = new Result();
        result.setSuccess(true);
        result.setId(userWithEncodedPassword.getId());
        String resultStr = gson.toJson(result);
        return Response.status(Response.Status.OK).entity(resultStr).build();
        }
    }

    @POST
    @Path("login")
    public Response login(String json) {
        User user = gson.fromJson(json, User.class);
        //get users in sql

        Result result = new Result();
        result.setSuccess(true);
        result.setId(123456);
        String resultStr = gson.toJson(result);
        return Response.status(Response.Status.OK).entity(resultStr).build();
    }

    @POST
    @Path("template")
    public Response template(String json) {
        Basket basket = gson.fromJson(json, Basket.class);
        //get users in sql

        Result result = new Result();
        result.setSuccess(true);
        result.setId(123456);
        String resultStr = gson.toJson(result);
        return Response.status(Response.Status.OK).entity(resultStr).build();
    }

}