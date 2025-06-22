package ECommerce;

public class SearchUtility {
    public static Product linearSearch(Product[] products, String name) {
        for(int i = 0; i < products.length; i++) {
            if (products[i].productName.equals(name)) {
                return products[i];
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String name) {
        int s = 0;
        int e = products.length - 1;
        while (s < e) {
            int mid = s + (e - s) / 2;
            int compare = products[mid].productName.compareTo(name);
            if (compare == 0) return products[mid];
            else if (compare > 0) e = mid - 1;
            else s = mid + 1;
        }
        return null;
    }
}
