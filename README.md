# curso_ebac_frontend
**FrontEnd M19**

**Sobre o BEM**

O BEM (Block Element Modifier) é uma metodologia para escrita de código de estilos. Ele propõe separarmos os estilos entre:

__Blocos__: são containers, grandes ou pequenos, por exemplo: .form, .profile;

__Elementos__: elementos dentro dos containers, como: .form__input, .profile__avatar;

__Modificadores__: são estados, que alteram um elemento, por exemplo: .form__input—invalid, .profile__avatar_online.


O BEM nos sugere separar um bloco de um elemento utilizando o __underline__ duas vezes:

**BLOCO__ELEMENTO**

Já para os modificadores usamos o traço duas vezes:

**BLOCO__ELEMENTO—MODIFICADOR**

Além disso temos algumas recomendações como: 
• Não utilizar o nome das tags para estilização, por exemplo: div.input; 
• Não utilizar Ids para estilizar um elemento, por exemplo: #form__input.

Acesse a documentação completa do BEM no link:

[BEM](https://getbem.com/introduction/)

**Pseudoclasses:**

• :hover: Aplica estilos quando o elemento é "hovered" (quando o cursor do mouse está sobre ele). 
• :active: Aplica estilos quando o elemento está ativo (por exemplo, quando um botão é clicado e mantido pressionado). 
• :focus: Aplica estilos quando o elemento está em foco (por exemplo, quando um campo de formulário é selecionado). 
• :first-child: Aplica estilos ao primeiro elemento filho de seu elemento pai. 
• :last-child: Aplica estilos ao último elemento filho de seu elemento pai. 
• :nth-child(): Permite selecionar um elemento específico com base em sua posição em relação aos elementos irmãos. Por exemplo, :nth-child(2) seleciona o segundo elemento filho. 
• :nth-of-type(): Permite selecionar um elemento específico com base em sua posição em relação aos elementos irmãos do mesmo tipo. Por exemplo, :nth-oftype(odd) seleciona os elementos ímpares.


**Pseudo elementos:**

• ::before: Permite adicionar conteúdo antes do conteúdo do elemento selecionado. Pode ser usado para adicionar ícones, elementos decorativos ou texto adicional. 
• ::after: Permite adicionar conteúdo após o conteúdo do elemento selecionado. Assim como ::before, pode ser usado para adicionar elementos ou texto adicionais. 
• ::first-line: Aplica estilos somente à primeira linha de texto dentro do elemento selecionado. Isso permite a formatação específica da primeira linha de um parágrafo, por exemplo. 
• ::first-letter: Aplica estilos somente à primeira letra do conteúdo dentro do elemento selecionado. Isso pode ser usado para criar efeitos de drop cap (letra capital ampliada) ou estilizar a primeira letra de um parágrafo de forma especial. 
• ::selection: Permite estilizar a seleção de texto dentro do elemento. É possível definir cores de fundo e texto diferentes para a seleção.