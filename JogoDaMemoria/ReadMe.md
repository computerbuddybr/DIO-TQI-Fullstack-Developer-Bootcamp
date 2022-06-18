## Jogo da Memória

**DESCRIÇÃO**

Nesse projeto, o desafio será criar um jogo da memória utilizando apenas HTML, CSS e Javascript. Com poucas linhas de código, aprenderemos juntos a trabalhar com efeitos 3D no CSS e lógica de programação utilizando condicionais, Immediately Invoked Function Expression e manipulação de Array em um projeto super divertido.

**Explicação**

Aqui você vai encontrar duas versões de Jogo da Memória. Uma com um tema do Rei Leão e outra com um tema do Mário.

Isso porque como desafio para mim mesma me propus primeiro a estudar o código da professora. Entender como funciona. Tentar fazer as minhas alterações funcionarem e só depois assistir às aulas.

Então fui ao GitHub da professora e eu não percebi que ela tinha dois repositórios com jogos da memória. Vi isso só quando fui ver as aulas explicativas e percebi que ela estava lidando com outro código completamente diferente. Então voltei ao GitHub dela buscar o código correto e fazer o mesmo processo. Ver o código, entender, alterar e só depois de fazer funcionar ver a explicação da professora.

Como fiz para os dois decidi deixar aqui também as duas versões.

Acho importante fazer isso, pois percebo que ao iniciar vendo o que a professora fez eu não paro para tentar decifrar o código de outra pessoa, e adaptá-lo sem que a pessoa explique o passo a passo dela. E como considero essa uma habilidade essencial em um programador, decidi praticar aqui no Bootcamp. 

Dos dois jogos preferi a versão do Rei Leão, pois percebi que na versão usada no Bootcamp, o jogador pode selecionar cartas e depois nas jogadas seguintes essas cartas ficam selecionadas. Desse modo ele pode trapacear sempre sabendo onde certas cartas estão. Isso porque no jogo do Rei Leão as cartas e sua ordem são geradas pelo JavaScript. Nele se criou um array com a lista de imagens de background, depois se adicionou essas imagens aos elementos html.

Já no do Mário, o html já vinha com elementos de imagem hardcoded e depois o que o JavaScript fazia para embaralhar era alterar o posicionamento e ordem das cartas no CSS. Mas o elemento html com a carta continuava sendo sempre o mesmo de um jogo ao outro. Ou seja, você poderia ir ao código fonte descobrir onde está cada carta. Isso já não é possível no jogo do Rei Leão.  

Isso claro, se dá por uma diferença de decisão de onde fazer essa manipulação da ordem das cartas, se pelo JavaScript ou se pelo CSS.

Em ambos, as minhas alterações estão relacionadas a poder jogar vários jogos seguidos mantendo um registro de tentativas de cada jogo, tentativas totais e pontuação de cada jogo e total. Adicionei uma lógica para dar pontos ao acertar a combinação e perder pontos ao errar. Além de também mostrar a partir do segundo jogo a melhor pontuação e tentativas.