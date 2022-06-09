import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        String[] valores1 = new String[2];
        String[] valores2 = new String[2];
        String linha = new String();
        double x1, x2, y1, y2, distancia;

        Scanner scanner = new Scanner(System.in);
        linha = scanner.nextLine();
        valores1 = linha.split(" ");


        linha = scanner.nextLine();
        valores2 = linha.split(" ");


        x1 = Double.parseDouble(valores1[0]);
        y1 = Double.parseDouble(valores1[1]);

        x2 = Double.parseDouble(valores2[0]);
        y2 = Double.parseDouble(valores2[1]);


        distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y1 - y2), 2));

        System.out.printf("%.4f", distancia);


    }
}
