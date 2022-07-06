package info.adrianacerdeira;

/**
 * Class that implements the subtraction behavior.
 */
public class Subtraction implements CalculateStrategy{
    @Override
    public double calculate(double value1, double value2) {
        return value1 - value2;
    }
}
