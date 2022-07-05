package info.adrianacerdeira;

public class Main {
    public static void main(String[] args) {
        //Testando o Facade
        Facade facade = new Facade();
        facade.migrarCliente("Adriana", 1);
        facade.migrarCliente("Venilton", 0);
        facade.migrarCliente("Laura", 2);
        facade.migrarCliente("Conrado", 3);
        facade.migrarCliente("João", 4);
    }
}
