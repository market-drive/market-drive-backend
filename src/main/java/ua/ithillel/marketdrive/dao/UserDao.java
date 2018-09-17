package ua.ithillel.marketdrive.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import ua.ithillel.marketdrive.model.User;

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

    public void insert(User user) {
        try (Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            session.save(user);
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
            return session.createQuery("FROM Student", User.class).list();
        }
    }

    public User getByName(String name) {
        try (Session session = sessionFactory.openSession()) {
            return session
                    .createQuery("FROM Student WHERE name = :name ", User.class)
                    .setParameter("name", name)
                    .getSingleResult();
        }
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
