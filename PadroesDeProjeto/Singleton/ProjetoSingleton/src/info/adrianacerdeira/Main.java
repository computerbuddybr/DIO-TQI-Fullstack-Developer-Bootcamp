package info.adrianacerdeira;

public class Main {

    static public void main(String[] args){
        SingletonLazy lazy = SingletonLazy.getInstancia();
        SingletonLazy lazy2 = SingletonLazy.getInstancia();
        SingletonEager eager = SingletonEager.getInstancia();
        SingletonEager eager2 = SingletonEager.getInstancia();
        SingletonLazyHolder lazyHolder = SingletonLazyHolder.getInstancia();
        SingletonLazyHolder lazyHolder2 = SingletonLazyHolder.getInstancia();

        //Testes para verificar se realmente são a mesma instância
        System.out.println("Singleton lazy:");
        System.out.println(lazy);
        System.out.println(lazy2);
        System.out.println(lazy == lazy2);
        System.out.println("Singleton eager:");
        System.out.println(eager);
        System.out.println(eager2);
        System.out.println(eager == eager2);
        System.out.println("Singleton lazy holder:");
        System.out.println(lazyHolder);
        System.out.println(lazyHolder2);
        System.out.println(lazyHolder == lazyHolder2);

    }
}
