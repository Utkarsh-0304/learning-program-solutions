package FinancialForecasting;

public class Main {
    public static void main(String[] args) {
        double value = 5000, rate = 0.5;
        int years = 4;
        double forecast = getForecast(value, years, rate);
        System.out.println("Future predicted value after " + years + " years is: " + forecast);
    }

    private static double getForecast(double value, int years, double rate) {
        if (years == 0) return value;
        return getForecast(value,years - 1, rate) * (1 + rate);
    }
}
