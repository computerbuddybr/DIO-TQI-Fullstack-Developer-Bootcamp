package info.adrianacerdeira;

/**
 * Class that implements the sum behavior
 */
public class Sum implements CalculateStrategy{
    @Override
    public double calculate(double value1, double value2) {
        return value1 + value2;
    }
}
