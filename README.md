# 🎓 Atlas Digital

> **Uma plataforma digital desenvolvida para professores, organização escolar e controle de qualidade no ambiente educacional.**

O **Atlas Digital** é um projeto voltado ao ambiente educacional, desenvolvido com o objetivo de centralizar diferentes recursos utilizados no acompanhamento e gerenciamento de informações escolares.

A plataforma possui uma interface de autenticação, páginas específicas para diferentes funcionalidades, perfis de usuários e módulos destinados ao acompanhamento de alunos, avaliações, frequência, boletins e relatórios.

---

## 🚀 Sobre o projeto

O Atlas Digital foi desenvolvido como uma plataforma web modular, na qual cada funcionalidade possui sua própria página HTML e seu respectivo arquivo JavaScript para controle das interações.

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

A estrutura do login utiliza `index.html`, enquanto suas interações são controladas pelo `index.js`.

---

# 📚 Funcionalidades

## 🏠 Home

A página inicial funciona como um dos principais pontos de navegação da plataforma, permitindo ao usuário acessar os diferentes módulos disponíveis.

**Arquivos:**

```text
html/home.html
js/home.js
```

---

## 📊 Painel

O painel concentra informações importantes do sistema e funciona como uma área central de acompanhamento.

**Arquivos:**

```text
html/painel.html
js/painel.js
```

---

## 📝 Avaliação

Módulo destinado ao gerenciamento e acompanhamento das avaliações dos alunos.

**Arquivos:**

```text
html/avaliacao.html
js/avaliacao.js
```

---

## 📑 Boletim

Área destinada ao gerenciamento e visualização das informações relacionadas às notas e resultados acadêmicos.

**Arquivos:**

```text
html/boletim.html
js/boletim.js
```

---

## 📅 Frequência

Módulo destinado ao controle e acompanhamento da frequência dos alunos.

**Arquivos:**

```text
html/frequencia.html
js/frequencia.js
```

---

## 👨‍🎓 Perfil do aluno

Página destinada à apresentação das informações relacionadas ao perfil do aluno.

**Arquivos:**

```text
html/perfildoa.html
js/perfildoa.js
```

---

## 👨‍🏫 Perfil do professor

Página destinada às informações do professor dentro da plataforma.

**Arquivos:**

```text
html/perfildop.html
js/perfildop.js
```

---

## 📋 Cadastro

Módulo responsável pela interface de cadastro de usuários.

**Arquivos:**

```text
html/cadastro.html
js/cadastro.js
```

---

## ⚙️ Configurações

Área destinada às configurações da plataforma.

**Arquivo:**

```text
html/configuracao1.html
```

---

## 📂 Controle de dados

Módulo destinado ao controle e organização de informações dentro da plataforma.

**Arquivos:**

```text
html/controledet.html
js/controledet.js
```

---

## 🔑 Recuperação de senha

A plataforma possui uma página específica para recuperação de acesso.

**Arquivos:**

```text
html/recuperacao.html
js/recuperacao.js
```

O sistema também possui redirecionamento para a página `index.html` após determinadas ações de recuperação.

---

## 📈 Relatórios

Módulo destinado à apresentação e gerenciamento de relatórios.

**Arquivos:**

```text
html/relatorio.html
js/relatorio.js
```

---

# 🛠️ Tecnologias

O projeto utiliza principalmente tecnologias de desenvolvimento web:

| Tecnologia       | Utilização                                   |
| ---------------- | -------------------------------------------- |
| **HTML5**        | Estrutura das páginas                        |
| **CSS3**         | Estilização e layout                         |
| **JavaScript**   | Interatividade e funcionalidades             |
| **Google Fonts** | Tipografia da interface                      |
| **SVG**          | Elementos gráficos e ícones                  |
| **Imagens**      | Identidade visual e elementos das interfaces |

---

# 📁 Estrutura do projeto

A estrutura apresentada atualmente possui diferentes diretórios para organização das páginas, scripts e recursos visuais.

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

Uma das características do projeto é a separação entre **estrutura HTML** e **comportamento JavaScript**.

Por exemplo:

```text
avaliacao.html
       │
       └── avaliacao.js

boletim.html
       │
       └── boletim.js

frequencia.html
       │
       └── frequencia.js

painel.html
       │
       └── painel.js
```

Essa organização facilita a manutenção e permite que cada módulo tenha seus próprios scripts e funcionalidades.

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
* Estruturação de sistemas educacionais.

---

## ⭐ Atlas Digital

> **Tecnologia, organização e controle de qualidade para a educação.**
