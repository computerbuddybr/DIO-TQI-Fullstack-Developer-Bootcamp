package info.adrianacerdeira.ExemploDePadraoDeProjeto.service.impl;

import info.adrianacerdeira.ExemploDePadraoDeProjeto.model.Cliente;
import info.adrianacerdeira.ExemploDePadraoDeProjeto.model.ClienteRepository;
import info.adrianacerdeira.ExemploDePadraoDeProjeto.model.Endereco;
import info.adrianacerdeira.ExemploDePadraoDeProjeto.model.EnderecoRepository;
import info.adrianacerdeira.ExemploDePadraoDeProjeto.service.ClienteService;
import info.adrianacerdeira.ExemploDePadraoDeProjeto.service.ViaCepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClienteServiceimpl implements ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private ViaCepService viaCepService;

    @Override
    public Iterable<Cliente> buscarTodos() {

        return clienteRepository.findAll();
    }

    @Override
    public Cliente buscarPorId(Long id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        return cliente.get();
    }

    /**
     * Método para ser usado em inserir e atualizar cliente.
     * @param cliente
     * @return
     */
    private void salvarClienteComCep(Cliente cliente) {
        String cep = cliente.getEndereco().getCep();
        Endereco endereco = enderecoRepository.findById(cep).orElseGet(() -> {
            Endereco novo = viaCepService.consultarCep(cep);
            enderecoRepository.save(novo);
            return novo;
        });

        cliente.setEndereco(endereco);
        clienteRepository.save(cliente);
    }

    @Override
    public void inserir(Cliente cliente) {
        salvarClienteComCep(cliente);

    }

    @Override
    public void atualizar(Long id, Cliente cliente) {
        Optional<Cliente> clienteBD = clienteRepository.findById(id);
        if (clienteBD.isPresent()) {
            salvarClienteComCep(cliente);

        } else {
            System.out.println("Cliente não existe. Não pode ser atualizado.");
        }

    }

    @Override
    public void deletar(Long id) {
        clienteRepository.deleteById(id);

    }
}
