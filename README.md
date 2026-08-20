# 🎓 Atlas Digital

> **Uma plataforma digital desenvolvida para professores, organização escolar e controle de qualidade no ambiente educacional.**

O **Atlas Digital** é um projeto voltado ao ambiente educacional, desenvolvido com o objetivo de centralizar diferentes recursos utilizados no acompanhamento e gerenciamento de informações escolares.

A plataforma possui uma interface de autenticação, páginas específicas para diferentes funcionalidades, perfis de usuários e módulos destinados ao acompanhamento de alunos, avaliações, frequência, boletins e relatórios.

---

## 🚀 Sobre o projeto

O Atlas Digital foi desenvolvido como uma plataforma web modular, na qual cada funcionalidade possui sua própria página HTML, arquivo CSS e respectivo arquivo JavaScript para controle das interações.

A estrutura atual conta com módulos voltados para:

* 👨‍🎓 Alunos
* 👨‍🏫 Professores
* 📝 Avaliações
* 📊 Boletins
* 📅 Frequência
* 📈 Relatórios
* 📋 Controle de dados
* ⚙️ Configurações
* 🔐 Autenticação e recuperação de senha
* 📊 Painel de acompanhamento

---

# 🔐 Sistema de autenticação

A página inicial do Atlas Digital apresenta uma interface de login contendo:

* 📧 Campo de e-mail;
* 🔒 Campo de senha;
* 🔑 Recuperação de senha;
* 👤 Cadastro de novos usuários;
* ⚠️ Área para mensagens de erro;
* 🖼️ Identidade visual própria do Atlas Digital.

A estrutura do login utiliza `index.html`, enquanto suas interações são controladas pelo `index.js` e sua aparência pelo `index.css`.

---

# 📚 Funcionalidades

## 🏠 Home

A página inicial funciona como um dos principais pontos de navegação da plataforma, permitindo ao usuário acessar os diferentes módulos disponíveis.

**Arquivos:**

```text
html/home.html
css/home.css
js/home.js
```

---

## 📊 Painel

O painel concentra informações importantes do sistema e funciona como uma área central de acompanhamento.

**Arquivos:**

```text
html/painel.html
css/painel.css
js/painel.js
```

---

## 📝 Avaliação

Módulo destinado ao gerenciamento e acompanhamento das avaliações dos alunos.

A interface possui uma folha de estilos própria para organização dos componentes visuais e apresentação das informações relacionadas às avaliações.

**Arquivos:**

```text
html/avaliacao.html
css/avaliacoes.css
js/avaliacao.js
```

---

## 📑 Boletim

Área destinada ao gerenciamento e visualização das informações relacionadas às notas e resultados acadêmicos.

O estilo da página recebeu ajustes relacionados à tipografia e ao dimensionamento do elemento da logo.

**Arquivos:**

```text
html/boletim.html
css/boletim.css
js/boletim.js
```

---

## 📅 Frequência

Módulo destinado ao controle e acompanhamento da frequência dos alunos.

Também foram realizados ajustes de navegação e links entre os módulos da plataforma.

**Arquivos:**

```text
html/frequencia.html
css/frequencia.css
js/frequencia.js
```

---

## 👨‍🎓 Perfil do aluno

Página destinada à apresentação das informações relacionadas ao perfil do aluno.

A interface possui ajustes de tipografia e padronização do menu lateral.

**Arquivos:**

```text
html/perfildoa.html
css/perfildoa.css
js/perfildoa.js
```

---

## 👨‍🏫 Perfil do professor

Página destinada às informações do professor dentro da plataforma.

O design foi atualizado para seguir a proposta visual desenvolvida no Figma.

**Arquivos:**

```text
html/perfildop.html
css/pefildop.css
js/perfildop.js
```

---

## 📋 Cadastro

Módulo responsável pela interface de cadastro de usuários.

A página recebeu melhorias de espaçamento e ajustes no tamanho da logo.

**Arquivos:**

```text
html/cadastro.html
css/cadastro.css
js/cadastro.js
```

---

## ⚙️ Configurações

Área destinada às configurações da plataforma.

**Arquivo:**

```text
html/configuracao1.html
css/configuracao1.css
```

---

## 📂 Controle de dados

Módulo destinado ao controle e organização de informações dentro da plataforma.

A folha de estilos recebeu modificações para melhorar a apresentação da interface.

**Arquivos:**

```text
html/controledet.html
css/controledet.css
js/controledet.js
```

---

## 🔑 Recuperação de senha

A plataforma possui uma página específica para recuperação de acesso.

**Arquivos:**

```text
html/recuperacao.html
css/recuperacao.css
js/recuperacao.js
```

O sistema também possui redirecionamento para a página `index.html` após determinadas ações de recuperação.

A interface de recuperação recebeu atualizações baseadas no design desenvolvido no Figma.

---

## 📈 Relatórios

Módulo destinado à apresentação e gerenciamento de relatórios.

**Arquivos:**

```text
html/relatorio.html
css/relatorio.css
js/relatorio.js
```

---

# 🎨 Sistema de estilização

O Atlas Digital utiliza arquivos **CSS individuais para cada módulo**, permitindo que cada página possua seu próprio conjunto de regras de layout e apresentação visual.

Essa organização facilita a manutenção do projeto e permite realizar alterações específicas sem afetar diretamente as demais páginas.

Entre os arquivos de estilização atualmente presentes estão:

```text
css/
├── avaliacoes.css
├── boletim.css
├── cadastro.css
├── configuracao1.css
├── controledet.css
├── frequencia.css
├── home.css
├── index.css
├── painel.css
├── pefildop.css
├── perfildoa.css
├── recuperacao.css
└── relatorio.css
```

Os arquivos CSS são utilizados para controlar elementos como:

* 🎨 Cores;
* 📐 Espaçamentos;
* 📏 Dimensões;
* 🧭 Menus laterais;
* 🖼️ Logos;
* 🔤 Tipografia;
* 📱 Responsividade;
* 🧩 Componentes das páginas;
* ✨ Identidade visual;
* 📊 Organização das informações.

---

# 🖌️ Evolução do design

Durante o desenvolvimento, diversas páginas receberam atualizações visuais e ajustes de interface.

Entre as melhorias realizadas estão:

* Atualização do menu lateral da página Home;
* Padronização da tipografia dos menus;
* Ajustes de espaçamento;
* Redimensionamento da logo;
* Alterações no tamanho das fontes;
* Atualização das interfaces de acordo com o design desenvolvido no Figma;
* Melhorias no painel;
* Atualizações na página de recuperação de senha;
* Melhorias na página de avaliações;
* Ajustes no módulo de frequência;
* Atualização dos links de navegação entre as páginas;
* Inclusão do botão de cadastro na tela de login.

O desenvolvimento visual segue uma abordagem incremental, permitindo que cada módulo seja refinado conforme o projeto evolui.

---

# 🛠️ Tecnologias

O projeto utiliza principalmente tecnologias de desenvolvimento web:

| Tecnologia       | Utilização                                           |
| ---------------- | ---------------------------------------------------- |
| **HTML5**        | Estrutura das páginas                                |
| **CSS3**         | Estilização, layout e responsividade                 |
| **JavaScript**   | Interatividade e funcionalidades                     |
| **Google Fonts** | Tipografia da interface                              |
| **SVG**          | Elementos gráficos e ícones                          |
| **Imagens**      | Identidade visual e elementos das interfaces         |
| **Figma**        | Planejamento e desenvolvimento visual das interfaces |

---

# 📁 Estrutura do projeto

A estrutura atual do projeto possui diretórios separados para páginas HTML, folhas de estilo CSS, scripts JavaScript e recursos visuais.

```text
Atlas Digital/
│
├── 📁 html/
│   ├── avaliacao.html
│   ├── boletim.html
│   ├── cadastro.html
│   ├── configuracao1.html
│   ├── controledet.html
│   ├── frequencia.html
│   ├── home.html
│   ├── painel.html
│   ├── perfildoa.html
│   ├── perfildop.html
│   ├── recuperacao.html
│   └── relatorio.html
│
├── 📁 css/
│   ├── avaliacoes.css
│   ├── boletim.css
│   ├── cadastro.css
│   ├── configuracao1.css
│   ├── controledet.css
│   ├── frequencia.css
│   ├── home.css
│   ├── index.css
│   ├── painel.css
│   ├── pefildop.css
│   ├── perfildoa.css
│   ├── recuperacao.css
│   └── relatorio.css
│
├── 📁 js/
│   ├── avaliacao.js
│   ├── boletim.js
│   ├── cadastro.js
│   ├── controledet.js
│   ├── frequencia.js
│   ├── home.js
│   ├── index.js
│   ├── painel.js
│   ├── perfildoa.js
│   ├── perfildop.js
│   ├── recuperacao.js
│   └── relatorio.js
│
├── 📁 images/
│
├── 🖼️ aluno.png
├── 🖼️ fundo.png
├── 🖼️ google.svg
├── 🖼️ logo.jpeg
├── 🖼️ professor.png
├── 🖼️ professora-ensinando.jpeg
├── 🖼️ professora-sala-de-aula.jpeg
├── 🖼️ professora.jpeg
├── 🖼️ rapaz-estudando.jpg
├── 🖼️ silhueta-cidade.jpg
├── 🖼️ silhueta-montanha.png
│
├── 📄 index.html
└── 📄 README.md
```

---

# 🧩 Organização dos módulos

Uma das características do projeto é a separação entre **estrutura HTML**, **estilização CSS** e **comportamento JavaScript**.

Cada módulo possui, sempre que aplicável, seus próprios arquivos:

```text
avaliacao.html
       │
       ├── avaliacoes.css
       │
       └── avaliacao.js

boletim.html
       │
       ├── boletim.css
       │
       └── boletim.js

frequencia.html
       │
       ├── frequencia.css
       │
       └── frequencia.js

painel.html
       │
       ├── painel.css
       │
       └── painel.js
```

Essa organização facilita a manutenção, o desenvolvimento incremental e a evolução independente de cada módulo.

---

# 🎨 Recursos visuais

O projeto também possui diversos elementos gráficos utilizados na construção das interfaces, incluindo:

* Logo do Atlas Digital;
* Imagens relacionadas a alunos;
* Imagens relacionadas a professores;
* Imagens de ambientes educacionais;
* Elementos de fundo;
* Silhuetas utilizadas na composição visual;
* Arquivos SVG.

Entre os recursos apresentados estão:

```text
logo.jpeg
aluno.png
professor.png
professora.jpeg
professora-ensinando.jpeg
professora-sala-de-aula.jpeg
rapaz-estudando.jpg
fundo.png
silhueta-cidade.jpg
silhueta-montanha.png
google.svg
```

---

# 🔄 Navegação

As páginas possuem uma estrutura de navegação compartilhada, permitindo que o usuário transite entre diferentes áreas da plataforma.

Durante o desenvolvimento, os links da barra lateral foram reorganizados e atualizados em diferentes módulos para manter a navegação consistente.

Também foram realizados ajustes específicos na navegação da página de frequência e em outros módulos da plataforma.

---

# 📌 Módulos disponíveis

Atualmente, o projeto apresenta os seguintes módulos:

```text
🔐 Autenticação
│
├── Login
├── Cadastro
└── Recuperação de senha
│
📊 Gestão
│
├── Painel
├── Avaliação
├── Boletim
├── Frequência
└── Relatórios
│
👥 Usuários
│
├── Perfil do aluno
└── Perfil do professor
│
⚙️ Sistema
│
├── Configurações
└── Controle de dados
```

---

# 🚧 Status do projeto

**Em desenvolvimento 🚀**

O Atlas Digital continua recebendo atualizações, melhorias de interface, ajustes de navegação e novas funcionalidades.

O desenvolvimento é realizado de forma incremental, permitindo que novos módulos e recursos sejam incorporados à plataforma ao longo do projeto.

As atualizações recentes incluem melhorias em diversos arquivos CSS, ajustes de navegação, padronização visual e evolução das interfaces de acordo com o planejamento desenvolvido no Figma.

---

# 🎯 Objetivo

O principal objetivo do Atlas Digital é criar uma plataforma que auxilie na **organização, acompanhamento e gerenciamento de informações educacionais**, proporcionando uma experiência mais centralizada e organizada para os usuários.

O projeto busca unir:

**Tecnologia + Educação + Organização + Controle de qualidade**

---

# 👨‍💻 Desenvolvimento

O Atlas Digital é um projeto desenvolvido para explorar e aplicar conhecimentos de:

* Desenvolvimento Web;
* HTML;
* CSS;
* JavaScript;
* Organização de projetos;
* Desenvolvimento de interfaces;
* Experiência do usuário;
* Figma e prototipação;
* Estruturação de sistemas educacionais;
* Organização modular de aplicações web.

---

## ⭐ Atlas Digital

> **Tecnologia, organização e controle de qualidade para a educação.**
