package ua.ithillel.marketdrive.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import ua.ithillel.marketdrive.model.User;
import ua.ithillel.marketdrive.model.UserWithEncodedPassword;

import javax.persistence.NoResultException;
import javax.persistence.Query;
import java.util.List;

public class UserDao {

    private SessionFactory sessionFactory;

    public UserDao() {
        sessionFactory = new Configuration().configure().buildSessionFactory();
    }

    public void close() {
        sessionFactory.close();
    }

    public void insert(UserWithEncodedPassword userWithEncodedPassword) {
        try (Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            session.save(userWithEncodedPassword);
            transaction.commit();
        }
    }

    public int clear() {
        try (Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            String hql = String.format("DELETE FROM %s", User.class.getSimpleName());
            Query query = session.createQuery(hql);
            int count = query.executeUpdate();
            transaction.commit();
            return count;
        }
    }

    public void update(User student) {
        try (Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            session.update(student);
            transaction.commit();
        }
    }

    public void delete(User student) {
        try (Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            session.delete(student);
            transaction.commit();
        }
    }

    public List<User> getAll() {
        try (Session session = sessionFactory.openSession()) {
            return session.createQuery("FROM User", User.class).list();
        }
    }

    public UserWithEncodedPassword getByName(String name) {
        UserWithEncodedPassword result = null;
        try (Session session = sessionFactory.openSession()) {
            result = session
                    .createQuery("FROM UserWithEncodedPassword WHERE name = :name ", UserWithEncodedPassword.class)
                    .setParameter("name", name)
                    .getSingleResult();
        } catch (NoResultException e) {
            e.printStackTrace();
        }
        return result;
    }

    public List<User> getByAge(int from, int to) {
        try (Session session = sessionFactory.openSession()) {
            return session
                    .createQuery("FROM Student WHERE age BETWEEN :from AND :to ORDER BY age", User.class)
                    .setParameter("from", from)
                    .setParameter("to", to)
                    .list();
        }
    }

}
