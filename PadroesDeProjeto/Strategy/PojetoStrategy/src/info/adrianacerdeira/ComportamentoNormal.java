package info.adrianacerdeira;

/**
 * Implementação da estratégia
 */
public class ComportamentoNormal implements Comportamento {

    @Override
    public void mover() {
        System.out.println("Estou andando normalzinho.");
    }
}
