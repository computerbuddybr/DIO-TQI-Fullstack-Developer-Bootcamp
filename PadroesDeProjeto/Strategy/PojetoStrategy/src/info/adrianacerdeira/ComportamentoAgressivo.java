package info.adrianacerdeira;

public class ComportamentoAgressivo implements Comportamento{
    @Override
    public void mover() {
        System.out.println("Partindo pro ataque!");
    }
}
