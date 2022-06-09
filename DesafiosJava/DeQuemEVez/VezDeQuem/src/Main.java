import java.util.*;

public class Main{

    public static void main(String[] args) {

		//a classe Scanner auxilia na leitura dos dados de entrada
		Scanner leitor = new Scanner(System.in);

		int QT = Integer.parseInt(leitor.nextLine());

		String linha1[], linha2[], nome1, escolha1, nome2, escolha2;
		int N, M;
		
		for (int i = 0; i < QT; i++) {

			//quebra string em várias substrings a partir de um caracter
			linha1 = leitor.nextLine().split(" ");
			linha2 = leitor.nextLine().split(" ");
			

			N = Integer.parseInt(linha2[0]);
			M = Integer.parseInt(         );
		
			nome1 = linha1[0];
			escolha1 = linha1[1];

			nome2 = linha1[ ];
			escolha2 = linha1[ ];
			
			 
			if (((N + M) %       && escolha1.equalsIgnoreCase("PAR")) ||
			    ((N + M) %       &&                                 )) System.out.println(    );
			else System.out.println(nome2);
		}
    }

}