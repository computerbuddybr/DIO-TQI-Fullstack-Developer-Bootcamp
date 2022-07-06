package info.adrianacerdeira;

import java.util.Scanner;

/**
 * Class that implements the calculator.
 */
public class Calculator {

    private CalculateStrategy calculateStrategy;

    public Calculator() {
        Scanner scanner = new Scanner(System.in);
        String operation = "";
        double value1, value2;

        //Prompt for the first value.
        try{
            System.out.println("Favor inserir o primeiro valor: ");
            value1 = Double.parseDouble(scanner.nextLine());
        } catch (NumberFormatException error){
            System.out.println("Você não inseriu um número então ov alor atribuido fois zero.");
            value1 = 0.0;
        }

        //Prompt for the operation.
        printOperationPrompt();
        operation = scanner.nextLine();

        //Check to see if the operation input was valid.
        while (!this.checkIfValidOperationInput(operation)) {
            System.out.println("Operação inválida. Favor digitar uma das opções de opearação.");
            printOperationPrompt();
            operation = scanner.nextLine();
        }
        this.setCalculateStrategy(this.selectOperation(operation));

        //Prompt for the second value.
        try{
            System.out.println("Favor inserir o segundo valor: ");
            value2 = Double.parseDouble(scanner.nextLine());
        } catch (NumberFormatException error){
            System.out.println("Você não inseriu um número então ov alor atribuido fois zero.");
            value2 = 0.0;
        }


        System.out.println("O resultado é: ");
        System.out.println(this.calculate(value1, value2));
    }


    /**
     * Prints the instructions to choose the operation.
     */
    private void printOperationPrompt() {
        System.out.println("Qual a operação desejada? Digite:");
        System.out.println("+ para Soma");
        System.out.println("- para Subtração");
        System.out.println("/ para Divisão");
        System.out.println("* para Multiplicação");
    }


    /**
     * Checks if the operation input is valid.
     * @param operation
     * @return
     */
    private Boolean checkIfValidOperationInput(String operation) {
        if (operation.equalsIgnoreCase("+")) return true;
        if (operation.equalsIgnoreCase("-")) return true;
        if (operation.equalsIgnoreCase("/")) return true;
        if (operation.equalsIgnoreCase("*")) return true;
        return false;
    }

    /**
     * Sets the strategy to calculate depending on the chosen operation.
     * @param operation
     * @return
     */
    private CalculateStrategy selectOperation(String operation) {
        if (operation.equalsIgnoreCase("+")) return new Sum();
        if (operation.equalsIgnoreCase("-")) return new Subtraction();
        if (operation.equalsIgnoreCase("/")) return new Division();
        if (operation.equalsIgnoreCase("*")) return new Multiplication();
        return null;
    }

    /**
     * Setter for the strategy.
     * @param strategy
     */
    public void setCalculateStrategy(CalculateStrategy strategy) {
        this.calculateStrategy = strategy;
    }

    /**
     * Method to implement the chosen behavior to calculate.
     * @param value1
     * @param value2
     * @return
     */
    public double calculate(double value1, double value2) {
        return this.calculateStrategy.calculate(value1, value2);
    }
}
