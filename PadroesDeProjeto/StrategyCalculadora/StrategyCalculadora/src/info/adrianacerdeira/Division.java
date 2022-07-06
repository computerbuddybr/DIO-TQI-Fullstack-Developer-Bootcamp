package info.adrianacerdeira;

/**
 * Class that implements the division behavior.
 */
public class Division implements CalculateStrategy{
    @Override
    public double calculate(double value1, double value2) {
        return value1/value2;
    }
}
