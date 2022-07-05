package info.adrianacerdeira;

public class ComportamentoDefensivo implements Comportamento {
    @Override
    public void mover() {
        System.out.println("Estou me defendendo");
    }
}
