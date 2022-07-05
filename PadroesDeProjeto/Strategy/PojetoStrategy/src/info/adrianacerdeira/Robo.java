package info.adrianacerdeira;

/**
 * Implementando o contexto
 */
public class Robo {
    private Comportamento strategy;

    public void setStrategy(Comportamento strategy) {
        this.strategy = strategy;
    }

    /**
     * Vai delegar o movimento para a estratégia
     */
    public void mover(){
        strategy.mover();
    }
}
