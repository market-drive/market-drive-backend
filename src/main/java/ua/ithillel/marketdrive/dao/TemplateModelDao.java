package ua.ithillel.marketdrive.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import ua.ithillel.marketdrive.model.Templates;
import ua.ithillel.marketdrive.model.TemplatesList;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.ArrayList;
import java.util.List;

public class TemplateModelDao {

    private SessionFactory sessionFactory;

    public TemplateModelDao() {
        sessionFactory = new Configuration().configure().buildSessionFactory();
    }

    public List<Templates> getAll() {
        try (Session session = sessionFactory.openSession()) {
            return session.createQuery("FROM Templates", Templates.class).list();
        }
    }

//    public List<TemplatesList> getById(int template_id) {
//        try (Session session = sessionFactory.openSession()) {
//            return session
//                    //.createQuery("FROM TemplatesList WHERE templateId = :templateId", TemplatesList.class)
//                    //.createQuery("FROM TemplatesList WHERE template_id = :template_id", TemplatesList.class)
//                    .createQuery("FROM TemplatesList", TemplatesList.class)
//                    .setParameter("template_id", template_id)
//                    .list();
//        }
//    }

    public List<TemplatesList> getById(int template_id) {
        try (Session session = sessionFactory.openSession()) {
            List<TemplatesList> result;
            result = session.createQuery(
                    "select TemplatesList " +
                            "from TemplatesList " +
                            "where TemplatesList.template_id = :template_id", TemplatesList.class)
                    .setParameter( "template_id", template_id )
                    .list();
            return result;
        }
    }
}