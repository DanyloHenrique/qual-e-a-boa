# Qual é a boa?

"Qual é a boa?" é uma plataforma completa de descoberta de eventos locais.

Link do Figma: [Link do figma](https://www.figma.com/design/on02NWf3hXNDG9B3rG9qcy/VaibeLocal)

> ⚠️ Este projeto está incompleto. O foco principal foi a prática de colaboração em equipe, git flow e componentização com React.
 
Plataforma de listagem de eventos desenvolvida em grupo, inspirada no Sympla. O projeto teve como objetivo principal a prática de colaboração em equipe, com uso de git flow, pull requests e code review.
 
## 💻 Tecnologias
 
* **React** - Construção de interfaces de usuário
* **JavaScript** - Linguagem principal
* **Sass** - Estilização
* **React Router** - Gerenciamento de rotas
* **React Icons** - Ícones
* **Vite** - Ambiente de desenvolvimento e build

## 🔀 Git Flow
 
O projeto foi desenvolvido com um fluxo de colaboração estruturado:
 
* Cada componente desenvolvido em uma branch separada
* Pull requests para integração com a branch principal
* Code review entre os membros da equipe antes de cada merge

## 📁 Estrutura do Projeto
 
```
src/
├── assets/
│   ├── icons/
│   └── images/
├── components/              # Componentes globais reutilizáveis
│   ├── Button/
│   ├── ButtonCategory/
│   ├── ButtonIcon/
│   ├── ButtonLink/
│   ├── CardEvent/
│   ├── Footer/
│   ├── Header/
│   ├── inputField/
│   ├── Logo/
│   ├── SectionHeader/
│   └── SelectField/
├── pages/
│   ├── about/
│   │   └── components/
│   │       └── EventOrganizer/
│   ├── createEvent/
│   │   └── components/
│   ├── home/
│   │   └── components/
│   │       ├── Newsletter/
│   │       └── StatsItem/
│   └── listEvents/
│       └── components/
├── styles/
└── utils/
```

## 📚 Aprendizados

Primeiro projeto em equipe para a maioria dos integrantes, o que trouxe
desafios além do código:

* **Comunicação é essencial:** instalar dependências ou modificar arquivos fora do
  escopo da própria branch sem avisar o time gerou conflitos evitáveis
* **Escopo de branch:** manter cada branch focada no seu componente evita
  sobrescrever o trabalho de outras pessoas
* **Code review na prática:** revisar o código de outra pessoa exige uma atenção
  diferente do que escrever o próprio código
 
## 🛠 Instalação e Execução
 
### Pré-requisitos

- **Node.js** - v20.x ou superior
  
### Passo a passo
 
1. **Clone o repositório**
```bash
git clone https://github.com/username/qual-e-a-boa.git
cd qual-e-a-boa
```
 
2. **Instale as dependências**
```bash
npm install
```
 
3. **Inicie o servidor de desenvolvimento**
```bash
npm dev
```
 
Acesse [http://localhost:5173](http://localhost:5173) no navegador.
 
## Scripts
 
| Comando | Descrição |
|---|---|
| `npm dev` | Inicia o servidor de desenvolvimento |
| `npm build` | Compila o projeto para produção |
| `npm preview` | Visualiza o build localmente |
| `npm lint` | Verifica erros de lint |
