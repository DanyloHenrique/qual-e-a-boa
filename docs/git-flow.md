# Como colaborar no projeto

## Clonando o projeto

o primeiro passo para colaborar no projeto é clonar ele em sua máquina, para isso basta escolher em que pasta você vai deixar ele, abrir o terminal nessa pasta e executar o comando de clonar:

```bash
git clone https://github.com/DanyloHenrique/qual-e-a-boa.git
```

isso criara a pasta 'qual-e-a-boa' com todos os arquivos
Agora é so usar o cd para navegar até essa pasta criada

```bash
cd qual-e-a-boa
```

E por fim rodar o comando de install para que o node verifique as dependências desse projeto (listadas no package.json) e instalar localmente elas

```npm
npm install
```

O projeto já está pronto para ser executado com `npm run dev`

## Fluxo do git

### Branchs

#### Introdução

As branchs são como espaços separados para que cada um trabalhe no próprio código sem interferências no código de outras pessoas.

No projeto vamos trabalhar com duas branchs fixas: main e develop
e branchs dinâmicas que cada um irá criar.

Até então todos já viram a `main` que é a principal do projeto. No caso do projeto atual, vamos deixar a main como um espaço sagrado, ela só vai receber código de vez quando, quando completarmos uma parte do projeto e for testado, para que não haja problemas no produto final.

Vamos estar mexendo mais na branch `develop` que é onde o código de cada um vai sendo juntado, onde será feito as merges e pull requests

#### Atualizando o projeto na sua máquina (toda vez que for começar a mexer)

O primeiro passo sempre que for começar a mexer no código (toda santa vez) é utilzar um comando `pull` para que o git busque as atualizações do github para o seu projeto, assim evitando que você crie um código numa verão desatualizada do projeto e nós vamos buscar essas atualizações na branch develop

Ir para a branch develop

```bash
git checkout develop
```

Buscar as atualizações

```bash
git pull origin develop
```

Caso você já tenha criado a sua branch é so trocar para ela e realizar um merge para atualizar sua branch com o código da `develop`

```bash
git checkout minha-branch
git merge develop
```

#### Criando o código

Para a parte prática de ir criar o próprio código, é necessário criar uma branch específica para a sua tarefa, onde vai ser um espaço isolado só para ela.

Primeiro é importante estar na branch develop que é o ponto de partida

```bash
git checkout develop
```

Depois é utilizado o chekout -b para criar e ir automaticamente para nova branch

```bash
git checkout -b minha-tarefa
```

Após finalizar o código, salve e envie para o github:

1- Prepare os arquivos: `git add .`

2- Realize o commit semântico
Ex:

```bash
git commit -m "tipo-de-tarefa(arquivo ou funcionalidade): descrição"
```

3- Envie para o github:

```bash
 git push origin minha-tarefa
```
