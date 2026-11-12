 1. // ex1 — Remoção da tag <link>O HTML mantém-se igual, mas a página surge sem qualquer formatação no ecrã: sem cor de fundo, sem espaçamento, sem borda nos cartões e com tudo alinhado à esquerda a preto e branco, pela ordem em que está escrito no ficheiro.   O facto de o ficheiro styles.css permanecer intacto na pasta não produz qualquer efeito visual se não existir a indicação no HTML para o navegador o ler.   
 


 


Ícone do app JS
aula03
// ex1
/*
O HTML continua igual, mas a página aparece sem nenhum estilo no navegador:
sem cor de fundo, sem espaçamento, sem borda nos cartões e com tudo alinhado
à esquerda em preto e branco, na ordem em que está escrito no arquivo.
Deixar o styles.css intacto na pasta não muda nada se não houver a tag <link>
no HTML avisando o navegador para carregar esse arquivo.
*/

// ex2
/*
Não, o atributo defer não era desnecessário. O código do colega só funcionou
porque a tag <script> foi colocada no final do <body>, fazendo com que o HTML
já estivesse carregado antes de o querySelector rodar.
A diferença é que, sem defer no fim do <body>, o script costuma funcionar;
mas, sem defer dentro do <head>, ele falha porque executa antes de o <body>
existir. O defer serve justamente para garantir que o navegador espere toda
a página montar antes de rodar o JavaScript, não importa onde a tag esteja.
*/

// ex3
/*
:root {
  --vermelho-urgente: #C00000;
}

.cartao-urgente {
  border: 3px solid var(--vermelho-urgente);
}

.titulo-urgente {
  color: var(--vermelho-urgente);
}
*/

// ex4
/*
Após separar o projeto em index.html, styles.css e script.js, conferi no
navegador se o layout e o clique do botão "Apoiar" continuavam funcionando
normalmente. Para ter certeza de que tudo estava certo, verifiquei:
1. Se as tags <style> e <script> antigas tinham sido apagadas do index.html
   (para o código não rodar duplicado);
2. Se os caminhos href="styles.css" e src="script.js" estavam na mesma pasta;
3. Se a tag <script> estava com o atributo defer para não quebrar o querySelector.
*/

// ex5
/*
Quatro variáveis criadas em :root descrevendo o papel de cada valor no CSS:

1. --cor-destaque (#1F4E79): define a cor principal do cabeçalho e elementos
   de destaque; usando o papel em vez do nome da cor ("azul"), o nome continua
   fazendo sentido se a paleta mudar no futuro.
2. --cor-borda-cartao (#2E75B6): define a cor das bordas dos cartões de forma
   padronizada em todo o projeto.
3. --espaco-padrao (16px): padroniza o espaçamento interno (padding) do
   cabeçalho e dos cartões, facilitando ajustes globais de respiro visual.
4. --borda-arredondada (8px): mantém o mesmo arredondamento de cantos nos
   cartões e botões, garantindo consistência na identidade visual.
*/
Processado e analisado em código
