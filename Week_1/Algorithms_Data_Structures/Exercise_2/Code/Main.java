package ECommerce;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Product[] products = new Product[]{
                new Product(112, "Okra", "Vegetables"),
                new Product(110, "Keyboard", "Electronics"),
                new Product(114, "Mouse", "Electronics"),
                new Product(113, "Grapes", "Fruits"),
        };

        Product p = SearchUtility.linearSearch(products, "Mouse");
        if (p != null) System.out.println(p.productName + " found");
        else System.out.println("No such product found");

        Arrays.sort(products, (a, b) ->  a.productId - b.productId);

        p = SearchUtility.binarySearch(products, "Okra");
        if (p != null) System.out.println(p.productName + " found");
        else System.out.println("No such product found");

        p = SearchUtility.binarySearch(products, "Milk");
        if (p != null) System.out.println(p.productName + " found");
        else System.out.println("No such product found");
    }
}
