## Versão anterior do Rei Leão

**Minhas alterações**

Criei a possibilidade de pontuação e do jogador acompanhar o melhor jogo tanto em quantidades de tentativas quanto em pontuação.

A pontuação funciona da seguinte maneira.

- Recebe-se 10 pontos ao encontrar cartas iguais.
- Perde-se 5 pontos ao errar

Ao jogador é permitido duas jogadas sem penalização para poder ver inicialmente pelo menos quatro cartas.

O jogador começa cada jogo com dez pontos. Dessa maneira ele pode virar as cartas sem acertar pelo menos 4 vezes antes de ter pontos negativos.

Ao final do jogo somam-se os pontos aos pontos totais e as tentativas às tentativas totais. Compara-se à melhor pontuação e tentativas para poder continuar mostrando as melhores.

Outra alteração ao código apresentado que fiz foi não usar o event global mas sim como parâmetro da função clicar já que o event global pode dar problema e foi deprecado em versões mais atuais.