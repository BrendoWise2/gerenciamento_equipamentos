# 🎓 Gerenciamento de Eventos — Unincor

Sistema web desenvolvido para a Unincor com o objetivo de centralizar e organizar o gerenciamento de eventos acadêmicos, com autenticação de usuários e notificações automáticas por e-mail.

## 🎯 Sobre o projeto

A plataforma permite à instituição gerenciar eventos de forma centralizada, com controle de acesso via autenticação e comunicação automatizada com os participantes através de e-mail, agilizando o processo que antes era feito de forma manual.

### Principais funcionalidades

- 📅 **Gerenciamento de eventos** — cadastro, edição e organização de eventos acadêmicos
- 🔐 **Autenticação de usuários** — login seguro com JWT
- 📧 **Notificações por e-mail** — envio automático de comunicações via SMTP
- 🗄️ **Persistência de dados** — armazenamento estruturado em banco relacional

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/) — ambiente de execução backend
- [MySQL](https://www.mysql.com/) — banco de dados relacional
- **JWT** — autenticação e controle de sessão
- **Nodemailer / SMTP** — envio de e-mails automáticos

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js instalado
- Banco de dados MySQL configurado
- Conta de e-mail com SMTP habilitado (ou senha de app, no caso do Gmail)

### Instalação

\`\`\`bash
# Clone o repositório
git clone https://github.com/BrendoWise2/gerenciamento-eventos-unincor.git

# Acesse a pasta do projeto
cd gerenciamento-eventos-unincor

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env na raiz do projeto (veja o exemplo abaixo)

# Inicie o servidor
npm run dev
\`\`\`

### Exemplo de arquivo `.env`

\`\`\`dotenv
# String de conexão com MySQL (formato):
# mysql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL=

# Segredo para JWT
JWT_SECRET=

# Configuração SMTP para envio de e-mails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_smtp_password_or_app_password

# URL do servidor (ex: endereço local da máquina onde a API estará acessível)
SERVER_URL=http://localhost:3000
\`\`\`

> ⚠️ Nunca envie seu `.env` real ao repositório. Use o exemplo acima apenas como referência.

## 📌 Status do projeto

Sistema real, desenvolvido e entregue para a Unincor.

## 👤 Autor

**Brendo Silva**
[LinkedIn](https://www.linkedin.com/in/brendo-silva-b77321245) · [Portfólio](https://brendowise.vercel.app) · [GitHub](https://github.com/BrendoWise2)
