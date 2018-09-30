package ua.ithillel.marketdrive.api;

import com.google.gson.Gson;
import ua.ithillel.marketdrive.dao.StorageDao;
import ua.ithillel.marketdrive.dao.TemplateModelDao;
import ua.ithillel.marketdrive.dao.UserDao;
import ua.ithillel.marketdrive.model.*;

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
        Result result = new Result();
        if (userDao.getByName(userWithEncodedPassword.getName()) != null) {
            result.setSuccess(false);
            result.setReason("user with the name " + user.getName() + " is already exists");
            String resultStr = gson.toJson(result);
            return Response.status(Response.Status.CONFLICT).entity(resultStr).build();
        } else {
            userDao.insert(userWithEncodedPassword);
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
        UserWithEncodedPassword userWithEncodedPassword = new UserWithEncodedPassword(
                user.getName(),
                user.getPassword().hashCode(),
                user.getEmail());
        UserDao userDao = new UserDao();
        Result result = new Result();
        if (userDao.getByName(userWithEncodedPassword.getName()) != null &&
                user.getPassword().hashCode() == userDao.getByName(userWithEncodedPassword.getName()).getPasswordHashCode()) {
            result.setSuccess(true);
            result.setId(userDao.getByName(userWithEncodedPassword.getName()).getId());
            String resultStr = gson.toJson(result);
            return Response.status(Response.Status.OK).entity(resultStr).build();
        }

        result.setSuccess(false);
        result.setReason("incorrect username or password");
        String resultStr = gson.toJson(result);
        return Response.status(Response.Status.BAD_REQUEST).entity(resultStr).build();
    }

    @GET
    @Path("templates_list")
    @Produces(MediaType.APPLICATION_JSON + ";charset=UTF-8")
    public Response getTemplatesList() {
        TemplateModelDao templateModelDao = new TemplateModelDao();
        String json = gson.toJson(templateModelDao.getAll());
        return Response.status(Response.Status.OK).entity(json).build();
    }

    @POST
    @Path("template")
    @Produces(MediaType.APPLICATION_JSON + ";charset=UTF-8")
    public Response getTemplate(String json) {
        TemplateModelDao templateModelDao = new TemplateModelDao();
        Templates templates = gson.fromJson(json, Templates.class);
        return Response.status(Response.Status.OK).entity(templateModelDao.getById(templates.getId())).build();
    }

}