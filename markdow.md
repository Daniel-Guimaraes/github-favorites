> ## Nesse markdown eu adicionei explicações para cada nova funcionalidade em que aprendi fazendo esse projeto.

<br>

> # Construindo tabelas

## tabela

A tag usada para começar a construir tabelas é `<table>`

## Cabeçalho

A tag usada para fazer os cabeçalhos é `<thead>`

## Corpo da tabela

A tag usada para fazer o corpo da tabela é `<tbody>`

## Footer da tabela

Usamos a tag `<tfoot>`

<br>

> # Criando Linhas e Colunas

## Para criar linhas

Usamos a tag `<tr>`

## Para criar colunas dentro do `<thead>`

Usamos a tag `<th>`

## Para criarmos colunas dentro do `<tbody>`

Usamos a tag `<td>`

<br>

> # Acessibilidade .sr-only{}

Vamos supor que eu queira sumir com algum elemento da tela, que seja muito importante para a acessibilidade.Para isso eu uso uma classe chamada `.sr-only{}`.

Dentro dessa classe eu vou adicionar algumas propriedades que vai fazer meu elemento sumir, mas ainda continuar com a acessibilidade ativa.

> ## Construindo a classe

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap
  border-width: 0;
}
```

`overflow: hidden;`
-> Não vai permitir trasbordamento

`clip: rect(0,0,0,0);`
-> Vai criar um retangulo

`white-space: nowrap`
-> Vai forçar meu texto a não quebrar a linha

<br>

> # Espaço entre as bordas da tabela

Quando eu crio uma tabela por padrão a tabela vem com um pequeno espaço entre uma coluna e outra **Ex: |name||age||weight|**

Para mudarmos o estilo dessa borda usamos a propriedade `border-collapse`, e caso eu deseje tirar esse espaço, eu adiciono o valor `collapse`

```css
table {
  border-collapse: collapse;
}
```

<br>

> # Colocando backgrounds diferentes em cada coluna

Existe uma pseudo-classe no css, que nos permite colocar uma cor diferente em cada coluna que for par, ou seja, caso eu queira ter um tabela com colunas de cores diferentes, eu posso optar para que cada coluna que seja par, tenha um cor especifica.

Nesse caso, a 1° coluna (ímpar), vai ter uma cor diferente da 2° coluna (par). Para isso acontecer eu uso a pseudo-classe `nth-child()` e posso passar dois argumentos para ela:

1. `odd`: Para pares.
2. `even`: Para ímpares.

```css
table tr:nth-child(even) {
  background: #ddd;
}
/* Vai estilizar somente as colunas ímpares */

table tr:nth-child(odd) {
  background: #eee;
}
/* Vai estilizar somente as colunas pares */
```

<br>

> # Usando a funcionalidade `forEach()`

O método `forEach()` executará uma função para cada elemento presente em um array.

Considerando o seguinte código:

Ex:

```javascript
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) {
  console.log(item * 2);
}

numeros.forEach(tabuadaDe2);
```

<br>

> ## Sintaxe

`array.forEach(funcao([valorAtual, índice, array]), argumentoThis)`

<br>

> ## Parâmetros

`funcao()` é a função a ser executada para cada elemento do array. Pode receber três parâmetros:

1. **valorAtual** = é o valor da posição atual sendo percorrida no array. Parâmetro obrigatório na declaração a função.

2. **índice** = é a posição do array que está sendo lida. Parâmetro opcional da função.

3. **array** é o array a ser percorrido no forEach().Parâmetro opcional da função.

`argumentoThis` valor opcional a ser usado como this no momento que executar a função de callback. Parâmetro opcional do `forEach()`.

<br>

> ## Valor de retorno

É retornado um valor para cada posição do array conforme a lógica implementada na função.

<br>

> # Usando a funcionalidade `append()`

É uma funcionalidade que vai receber como argumento um elemento HTML criado pela DOM e vai tacar esse elemento dentro do elemento que estou usando essa funcionalidade

> ## Exemplos

Suponha que no meu HTML eu tenha uma lista de elementos (`ul`)

```html
<ul id="app">
  <li>JavaScript</li>
</ul>
```

Agora com o javascript eu vou criar uma lista de elementos manipulando a DOM e vou anexa-lo ao meu HTML usando a funcionalidade `append()`

```javascript
let app = document.querySelector("#app");

let langs = ["TypeScript", "HTML", "CSS"];

let nodes = langs.forEach((lang) => {
  let li = document.createElement("li");
  li.innerHTML = lang;
  return li;
});

app.append(...nodes);
```

E como resultado vou ter uma lista em HTML:

```html
<ul id="app">
  <li>JavaScript</li>
  <li>TypeScript</li>
  <li>HTML</li>
  <li>CSS</li>
</ul>
```

<br>

> # Funcionalidade booleana `confirm()`

O método confirm() é usado para exibir uma caixa de diálogo modal com uma mensagem opcional e dois botões, OK e Cancelar.

Retorna **true** se o usuário clicar em “OK” e **false** caso contrário. Impede que o usuário acesse outras partes da página até que a caixa seja fechada.

> ## Sintaxe

`confirm('message')`

**message** é a string opcional a ser exibida na caixa de diálogo. Ele retorna um valor booleano indicando se OK ou Cancelar foi selecionado (true significa OK e false significa que o usuário clicou em cancelar).

> ## Exemplo 1

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Window confirm() Method</title>
  </head>

  <body>
    <h1>Testando o método confirm()</h1>

    <p>Clique no botão para testar a funcionalidade</p>

    <button onclick="geek()">Click me!</button>

    <script>
      function geek() {
        confirm("Precione OK para fechar o popup");
      }
    </script>
  </body>
</html>
```

> ## Exemplo 2

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Window confirm() Method</title>
  </head>

  <body>
    <h1>Testando o método confirm()</h1>

    <p>Clique no botão para testar a funcionalidade</p>

    <button onclick="geek()">Click me!</button>

    <p id="g"></p>

    <script>
      function geek() {
        let doc;

        const result = confirm("Press a button!");

        if (result == true) {
          doc = "OK was pressed.";
        } else {
          doc = "Cancel was pressed.";
        }

        document.getElementById("g").innerHTML = doc;
      }
    </script>
  </body>
</html>
```

<br>

> # Método `filter()` para arrays

O método `filter()` é um recurso que **permite fazer a filtragem de elementos** com apenas poucas linhas de comandos. Isso facilita o entendimento e a manutenção do código pelas pessoas que desenvolvem softwares.

Na prática, ele **faz a leitura dos elementos da array em busca de um valor de referência passado por meio de uma função callback.** Ao fazer o teste em cada elemento, o método retorna um ou mais conteúdos que atendam à especificação indicada na função callback **e armazena o resultado em uma nova variável do tipo array.**

Portanto, o resultado será o de todos os elementos que satisfaçam a condição do filtro. **Vale ressaltar que a array original não sofre nenhum tipo de alteração pelo método `filter()`.**

> ## Sintaxe

```javascript
const names = ["daniel", "joão", "paulo"];

let newArray = names.filter((valorAtual, indice, varArray) => {});
```

- **newArray**: corresponde a uma nova variável do tipo array na qual são armazenados todos os resultados que satisfaçam a condição de filtragem;

- **names**: é o objeto original que serve de base para a aplicação do método filter;

- **função callback**:

  - **valorAtual**: é obrigatório e corresponde ao valor do elemento atual da array;

  - **índice**: é opcional e referente ao índice do atual elemento;

  - **varArray**: valor opcional e corresponde à array a que o valorAtual pertence;

  <br>

> ## Exemplo

Vamos imaginar uma variável do tipo array com uma sequência numérica de um a dez, e precisamos separar todos os elementos pares. Confira o código.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function searchNumbersPairs(value) {
  if (value % 2 == 0) return value;
}

let numbersPairs = numbers.filter(searchNumbersPairs);

console.log(numbersPairs);
```

<br>

> # Princípio da imutabilidade

O conceito de imutabilidade é originado principalmente da programação funcional e orientada a objetos. Sempre que quisermos fazer alterações em alguns dados (por exemplo, em um objeto ou array), devemos obter um novo objeto de volta com os dados atualizados, em vez de modificar diretamente o original.

Então vamos supor que eu tenha um array, e quero criar um novo array com os dados atualizados, para isso usamos a imutabilidade.

> ## Exemplo

```javascript

const names = ['daniel', 'joão', 'pedro']

const firstName = names.filter((first) => {
  resturn false
})
```

O que vai ser retornado dessa função callback, será um array vazio, isso acontece porque ele cria um novo array ao invés de alterar o array original, e esse é o principio da imutabilidade.

<br>

> ## Entendendo o Local Storage (API do bronswer)

`localStorage` é uma propriedade que **permite que sites e aplicativos JavaScript salvem pares de valores-chave em um navegador da Web sem data de validade.** Isso significa que os **dados armazenados no navegador persistirão mesmo depois que a janela do navegador for fechada.**

É um local no meu bronswer que ele guarda informações, quase como um mini banco de dados.

O dado é gurdado sempre no formato **key** e **value**. Então ele vai colocar um nome de uma chave e ele vai guardar o valor como uma string.

Para usar o `localStorage` há cinco métodos:

1. `setItem()`: Adicione chave e valor no localStorage

2. `getItem()`: É assim que você pega itens no localStorage

3. `removeItem()`: Remove um item por chave do localStorage

4. `clear()`: Limpa tudo

5. `key()`: Passe um número para recuperar a chave de um localStorage

<br>

> ## Modificando o objeto dentro do JSON com o método `JSON.parse()`

Quando eu quero fazer com que meu json se transforme no objeto que está dentro dele, eu uso esse método.

Vamos supor que o objeto que está no meu json seja um objeto

```javascript
const entries = JSON.parse(`{'name': 'Daniel'}`);
/* Resultado: {name: Daniel}
```

Note que ele transformou uma string em um objeto de verdade.

<br>

> # Método estático (static)

A palavra chave `static` define um método estático para a classe. Métodos estáticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe. Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.

> ## Sintaxe

`static nomeDoMetodo() {}`

> ## Exemplo

```javascript
class ChamadaDoMetodoEstatico {
  static metodoEstatico() {
    return "O método estático foi chamado";
  }
  static outroMetodoEstatico() {
    return this.metodoEstatico() + " de outro método estático";
  }
}
ChamadaDoMetodoEstatico.metodoEstatico();
// 'O método estático foi chamado'

ChamadaDoMetodoEstatico.outroMetodoEstatico();
// 'O método estático foi chamado de outro método estático'
```
