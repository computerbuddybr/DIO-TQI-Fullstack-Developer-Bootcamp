package info.adrianacerdeira.subSistema2.cep;

import java.util.ArrayList;
import java.util.List;

public class CepApi {
    private static CepApi instancia = new CepApi();
    private List<String> cidades;
    private List<String> estados;

    private CepApi() {
        super();
        //Criando lista de cidades
        this.cidades = new ArrayList<>();
        this.cidades.add("São Paulo");
        this.cidades.add("Rio de Janeiro");
        this.cidades.add("Salvador");
        this.cidades.add("Belo Horizonte");
        this.cidades.add("Porto Alegre");
        //Criando lista de estados
        this.estados = new ArrayList<>();
        this.estados.add("SP");
        this.estados.add("RJ");
        this.estados.add("BA");
        this.estados.add("MG");
        this.estados.add("RS");
    }

    public static CepApi getInstancia() {
        return instancia;
    }

    public String recuperarCidade(int cep) {

        return this.cidades.get(cep);
    }

    public String recuperarEstado(int cep) {

        return this.estados.get(cep);
    }
}
