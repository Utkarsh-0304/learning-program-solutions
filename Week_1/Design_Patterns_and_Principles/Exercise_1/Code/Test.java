package SingletonPatternExample;

public class Test {
    public static void main(String[] args) {
        Logger l1 = Logger.getLogger();
        l1.log("log function called");

        Logger l2 = Logger.getLogger();
        l2.log("log function again called");

        if (l1 == l2) {
            Logger.getLogger().log("l1 and l2 are same logger instances");
        }
        else Logger.getLogger().log("Both are different logger instances");
    }
}