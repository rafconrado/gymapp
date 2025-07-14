💪 GymApp - Seu Gerenciador de Treinos Pessoal
Leve seus treinos para o próximo nível com o GymApp! Um app mobile moderno e funcional, criado com React Native + Expo e uma API robusta em Node.js, perfeito para quem quer acompanhar treinos, registrar evolução e explorar exercícios de forma prática.

📲 Projeto inspirado na trilha Ignite da Rocketseat, com melhorias e recursos exclusivos.

✨ Funcionalidades Principais
🔐 Autenticação Segura: Login e registro de usuários com JWT.

🏋️ Catálogo Completo de Exercícios: Navegue por grupos musculares e encontre novos exercícios.

📖 Visualização Detalhada: Acesso a GIFs e instruções claras para cada exercício.

📊 Histórico de Treinos Automatizado: Marque exercícios como concluídos e mantenha seu histórico sempre atualizado.

👤 Perfil Personalizável: Atualize suas informações e adicione uma foto de perfil.

💎 Código Limpo e Escalável: Arquitetura componentizada, seguindo as melhores práticas de desenvolvimento.

🛠️ Tecnologias Utilizadas
📱 Mobile (React Native + Expo)
Framework: React Native + Expo

Linguagem: TypeScript

Navegação: React Navigation

Requisições HTTP: Axios

Formulários: React Hook Form + Yup

Armazenamento Local: AsyncStorage

UI Kit: Gluestack UI

Ícones: Lucide Icons

⚙️ API (Node.js)
Framework: Express

Banco de Dados: SQLite3 com Knex.js

Autenticação: JWT (JSON Web Token)

Upload de Arquivos: Multer

Manipulação de Datas: Dayjs

Documentação: Swagger

🚀 Como Rodar o Projeto
✅ Pré-requisitos
Node.js (v18 ou superior)

NPM ou Yarn

Expo Go app instalado no seu smartphone

(Opcional) Emulador Android ou Simulador iOS

📦 Instalação e Execução
Clone o repositório:

Bash

git clone https://github.com/rafconrado/gymapp.git
cd gymapp
Inicie a API (Backend):

Bash

# Acesse a pasta da API
cd api

# Instale as dependências
npm install

# Execute as migrations para criar o banco de dados
npm run migrate

# (Opcional) Popule o banco com dados iniciais
npm run seed

# Inicie o servidor
npm run dev
🚀 A API estará rodando em http://localhost:3333.

Inicie o App Mobile (Frontend):

Bash

# Volte para a raiz e acesse a pasta do mobile
cd ../mobile

# Instale as dependências
npm install

# Inicie o Metro Bundler com Expo
npm start
📲 Escaneie o QR Code exibido no terminal com o app Expo Go para abrir o GymApp no seu celular.

⚙️ Scripts Úteis
Projeto

Script

Descrição

API

npm run dev

Inicia o servidor em modo de desenvolvimento.

npm run migrate

Cria as tabelas do banco de dados.

npm run seed

Popula o banco com dados fictícios.

Mobile

npm start

Inicia o projeto com Expo.

npm run android

Roda o app no emulador Android.

npm run ios

Roda o app no simulador iOS.


Exportar para as Planilhas
🤝 Como Contribuir
Quer ajudar o projeto a crescer? Contribuições são muito bem-vindas!

Faça um Fork deste repositório.

Crie uma nova branch para sua feature:

Bash

git checkout -b feature/minha-nova-feature
Faça o commit das suas alterações:

Bash

git commit -m 'feat: Adiciona minha nova feature'
Envie para o seu repositório:

Bash

git push origin feature/minha-nova-feature
Abra um Pull Request.

Feito com 💙 por Rafael Conrado.
