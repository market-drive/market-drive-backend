package ua.ithillel.marketdrive.dao;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class PurchaseDao {

    private SessionFactory sessionFactory;

    public PurchaseDao() {
        sessionFactory = new Configuration().configure().buildSessionFactory();
    }

    public void close() {
        sessionFactory.close();
    }

//    public void insert(UserWithEncodedPassword userWithEncodedPassword) {
//        try (Session session = sessionFactory.openSession()) {
//            Transaction transaction = session.beginTransaction();
//            session.save(userWithEncodedPassword);
//            transaction.commit();
//        }
//    }
//
//    public List<User> getAll() {
//        try (Session session = sessionFactory.openSession()) {
//            return session.createQuery("FROM Student", User.class).list();
//        }
//    }
//
//    public UserWithEncodedPassword getByName(String name) {
//        UserWithEncodedPassword result = null;
//        try (Session session = sessionFactory.openSession()) {
//            result = session
//                    .createQuery("FROM UserWithEncodedPassword WHERE name = :name ", UserWithEncodedPassword.class)
//                    .setParameter("name", name)
//                    .getSingleResult();
//        } catch (NoResultException e) {
//            e.printStackTrace();
//        }
//        return result;
//    }
//
//    public List<User> getByAge(int from, int to) {
//        try (Session session = sessionFactory.openSession()) {
//            return session
//                    .createQuery("FROM Student WHERE age BETWEEN :from AND :to ORDER BY age", User.class)
//                    .setParameter("from", from)
//                    .setParameter("to", to)
//                    .list();
//        }
//    }

}