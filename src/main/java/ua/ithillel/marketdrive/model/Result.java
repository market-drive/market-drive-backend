package ua.ithillel.marketdrive.model;

public class Result {
    boolean success;
    int id;
    String name;
    String reason;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public boolean isSuccess() {
        return success;
    }

    public int getId() {
        return id;
    }

    public String getReason() {
        return reason;
    }
}