package info.adrianacerdeira;

/**
 * Class that implements the multiplication behavior.
 */
public class Multiplication implements CalculateStrategy {
    @Override
    public double calculate(double value1, double value2) {
        return value1 * value2;
    }
}
