package ua.ithillel.marketdrive.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import ua.ithillel.marketdrive.model.User;

public class UserDao {

    private SessionFactory sessionFactory;

    public UserDao() {
        sessionFactory = new Configuration().configure().buildSessionFactory();
    }

    public void insert(User user) {
        try (Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            session.save(user);
            transaction.commit();
        }
    }

}
