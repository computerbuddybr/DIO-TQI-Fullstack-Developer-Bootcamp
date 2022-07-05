package info.adrianacerdeira;

public class Main {
    public static void main(String[] args) {
        //Exemploficando o strategy
        Comportamento normal = new ComportamentoNormal();
        Comportamento agressivo = new ComportamentoAgressivo();
        Comportamento defensivo = new ComportamentoDefensivo();

        Robo robo = new Robo();
        robo.setStrategy(normal);
        robo.mover();
        robo.setStrategy(agressivo);
        robo.mover();
        robo.setStrategy(defensivo);
        robo.mover();
    }
}
