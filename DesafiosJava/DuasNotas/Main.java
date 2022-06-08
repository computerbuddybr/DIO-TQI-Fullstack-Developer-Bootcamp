import java.io.IOException;
import java.util.Scanner;

public class DIO {

    //complete o código para que ele funcione corretamente

    public static void main(String[] args) throws IOException {
	//a classe Scanner auxilia na leitura dos dados de entrada
    	Scanner leitor = new Scanner(System.in);

    	while (true) {
        	int N = leitor.nextInt();
        	int M =
        	int troco = M - N;
        	int[] notas = {2, 5, 10, 20, 50, 100};
        	boolean possivel = false;

        	if (N == 0 && M == 0) break;

    		for (int i = 0; i < 6; i++) {
    			for (int j = 0; j < 6; j++) {
    				if (                )              ;
    			}
    		}

    		if (        ) System.out.println("possible");
    		else                 ("impossible");
    	}
    }

}