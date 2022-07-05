package info.adrianacerdeira.subSistema1.crm;

public class CRMService {
    private CRMService(){
        super();
    }
    public static void gravarCliente(String nome, int cep, String cidade, String estado){
        System.out.println("**********");
        System.out.println("Cliente salvo no sistema de CRM.");
        System.out.println("Nome: " + nome);
        System.out.println("Cep: " + cep);
        System.out.println("Cidade: " + cidade);
        System.out.println("Estado: " + estado);
    }
}
