package info.adrianacerdeira;

import info.adrianacerdeira.subSistema1.crm.CRMService;
import info.adrianacerdeira.subSistema2.cep.CepApi;

/**
 * Uma interface mais simples que integra os dois serviços de CRM e Cep, tornando o seu uso mais amigável.
 */
public class Facade {
    public  void migrarCliente(String nome, int cep){
        String cidade = CepApi.getInstancia().recuperarCidade(cep);
        String estado = CepApi.getInstancia().recuperarEstado(cep);
        CRMService.gravarCliente(nome, cep,cidade, estado);
    }
}
