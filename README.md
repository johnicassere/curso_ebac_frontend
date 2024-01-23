# curso_ebac_frontend
**FrontEnd M20**

# Introdução

Para testar um e-mail, cadastre-se no site 
[PutsMail](https://putsmail.com/)

# Imagens

Os recursos externos como imagens, devem estar disponibilizados na Internet, em um servidor. Na aula utilizamos a plataforma **Vercel** disponível no link 
[Vercel](https://vercel.com/)

# Atributos e tags

Para construir um e-mail utilizando o HTML, trabalhamos basicamente com **tabelas**. Vamos conhecer um pouco mais sobre alguns elementos HTML:

• ``` <center> ```: utilizamos esta tag para centralizar o conteúdo, ela é uma tag obsoleta e deve ser utilizada apenas para a construção de e-mails.

• **Atributo bgcolor**: através deste atributo podemos inserir uma cor de fundo à um trou td, fizemos o uso deste recurso ao invés do background-color do CSS para fim de obter maior compatibilidade, afinal se trata de um atributo antigo do HTML;

• **Atributo colspan**: através deste atributo configuramos quantas colunas um TD ocupará, por exemplo: imagine uma tabela com duas colunas no cabeçalho, e no corpo da tabela uma linha com apenas uma coluna, para que o layout não seja danificado, precisamos informar que esta única coluna ocupará o espaço de duas, utilizando colspan=“2”.

Além dessas tags e atributos, é recomendável que utilizemos as tags `<b>` e `<i>` para bold e itálico, respectivamente, ao invés de `<strong>` e `<em>`, para conseguirmos uma compatibilidade maior entre os navegadores.

Vou deixar um documento também bem interessante com mais algumas dicas de como se implementar um email utilizando o HTML:
[Kinsta](https://kinsta.com/pt/blog/email-html/)