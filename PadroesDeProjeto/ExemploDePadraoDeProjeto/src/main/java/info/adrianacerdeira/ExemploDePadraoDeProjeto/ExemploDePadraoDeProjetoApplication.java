package info.adrianacerdeira.ExemploDePadraoDeProjeto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

/**
 * Projeto gerado via Spring Initializr
 * Seguindo o exemplo do professor falvojr
 * - Spring Data JPA
 * - Spring Web
 * - H2 Database
 * - Open Feign
 */
@EnableFeignClients
@SpringBootApplication
public class ExemploDePadraoDeProjetoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExemploDePadraoDeProjetoApplication.class, args);
	}

}
