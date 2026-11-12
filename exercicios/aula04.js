


Ícone do app JS
aula04
// ex1
/*
O texto de um link deve descrever o destino (como "Escolas" ou "Alunos") porque
quem utiliza leitor de tela costuma navegar puxando uma lista apenas com os
links da página, fora do contexto do restante do texto. Se houver seis links
escritos "clique aqui", a pessoa não tem como saber para onde cada um leva.
Os usuários de leitores de tela são os mais prejudicados por essa falta de
contexto, embora links claros melhorem a navegação para todos.
*/

// ex2
/*
Visualmente ambos aparecem em negrito, mas o significado é diferente:
- <b> (bold) é apenas visual ("deixa o texto grosso"), sem valor semântico;
- <strong> indica importância ("isto é importante e merece destaque").

Na prática, a diferença aparece nos leitores de tela: ao encontrar um <strong>,
o leitor muda a entonação da voz para dar ênfase, o que não acontece com o <b>.
No HTML marcamos o significado do conteúdo, deixando a aparência para o CSS.
*/

// ex3
/*
O erro está em empilhar várias tags <br> para criar espaçamento vertical.
A tag <br> serve apenas para quebrar linha quando isso faz parte do próprio
texto; criar espaço entre blocos é responsabilidade do CSS (com margin ou
padding).

Reescrita correta no HTML:
<p>Radar de Evasao<br>NRE Cascavel</p>

Para dar espaço depois desse parágrafo, usa-se CSS (ex.: margin-bottom: 24px;).
*/

// ex4
/*
<a href="https://www.apoio.exemplo.org" target="_blank" rel="noopener">Canal de apoio</a>
*/

// ex5
/*
Após criar o index.html e o styles.css novos com a barra lateral (<nav class="sidebar">),
a marca com <br> e a lista (<ul>) com os seis links, testei no navegador e
verifiquei o foco usando a tecla Tab.

O primeiro detalhe que não funcionou de primeira foi a lista aparecer com as
bolinhas padrão do HTML e os links continuarem sublinhados e azuis. Corrigi
aplicando list-style: none no seletor .menu e text-decoration: none em .menu a,
além de garantir que a classe "ativo" estivesse apenas no link "Mapa de risco".
*/

// ex6
/*
Tokens trazidos do Figma para o :root no styles.css:
- --bg-primary: #2D2A6E;
- --surface: #FFFFFF;
- --muted: #F1F5F9;
- --canvas: #F8FAFC;
- --text-primary: #0F172A;
- --text-secondary: #64748B;

Onde foram aplicados usando var():
1. --surface: aplicada no background-color da barra lateral (.sidebar);
2. --muted: aplicada no background-color do item ativo do menu (.menu a.ativo);
3. --bg-primary: aplicada na cor do texto do item ativo (.menu a.ativo) e no
   outline de foco (.menu a:focus);
4. --canvas: aplicada no background-color do body da página.
*/
Processado e analisado em código
