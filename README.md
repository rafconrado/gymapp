# 💪 GymApp - Seu Gerenciador de Treinos Pessoal

Leve seus treinos para o **próximo nível** com o **GymApp**!  
Um app mobile moderno e funcional, criado com **React Native + Expo** e uma API robusta em **Node.js**, perfeito para quem quer acompanhar treinos, registrar evolução e explorar exercícios de forma prática.

> 📲 Projeto inspirado na trilha Ignite da Rocketseat, com melhorias e recursos exclusivos.

---

## 🎥 Demonstração

*(Adicione aqui prints ou um GIF mostrando o app em ação)*

---

## ✨ Funcionalidades

- 🔐 **Autenticação Segura**
- 🏋️ **Catálogo Completo de Exercícios**
- 📖 **Visualização Detalhada dos Exercícios**
- 📊 **Histórico de Treinos Automatizado**
- 👤 **Perfil com Foto Personalizada**
- 💎 **Código Limpo, Escalável e Componentizado**

---

## 🛠️ Tecnologias

### 📱 Mobile - React Native + Expo

- React Native + Expo
- TypeScript
- React Navigation
- Axios
- React Hook Form + Yup
- AsyncStorage
- Gluestack UI
- Lucide Icons

### ⚙️ API - Node.js + SQLite

- Express
- SQLite3 + Knex
- JWT (Autenticação)
- Multer (Upload de Imagens)
- Swagger (Documentação da API)
- Dayjs (Manipulação de Datas)

---

## 🚀 Como Rodar o Projeto

### 📋 Pré-requisitos

- Node.js (v18+)
- NPM ou Yarn
- App **Expo Go** instalado no celular
- (Opcional) Emulador Android ou Simulador iOS

---

### 📦 Instalação e Execução

```bash
# Clone o projeto
git clone https://github.com/rafconrado/gymapp.git

cd gymapp
🔌 Iniciando a API
bash
Copiar
Editar
# Acesse o backend
cd api

# Instale as dependências
npm install

# Rode as migrations
npm run migrate

# (Opcional) Popule o banco
npm run seed

# Inicie o servidor
npm run dev
A API estará disponível em: http://localhost:3333

📱 Iniciando o App Mobile
bash
Copiar
Editar
# Acesse o app mobile
cd ../mobile

# Instale as dependências
npm install

# Inicie o Expo
npm start
# ou
expo start
📲 Leia o QR Code com o app Expo Go e comece a usar!

⚙️ Scripts Úteis
📂 Projeto	🛠️ Script	🔎 Descrição
API	npm run dev	Inicia o backend
npm run migrate	Cria o banco de dados
npm run seed	Popula dados fictícios
Mobile	npm start	Inicia o projeto no Expo
npm run android	Roda no emulador Android
npm run ios	Roda no simulador iOS

🤝 Contribua com o Projeto
Quer colaborar? Siga os passos abaixo:

bash
Copiar
Editar
# Faça um fork
git clone https://github.com/seu-usuario/gymapp.git

# Crie uma branch
git checkout -b feature/NovaFeature

# Faça o commit
git commit -m 'feat: adiciona NovaFeature'

# Faça o push
git push origin feature/NovaFeature
Abra um Pull Request e ajude o projeto a crescer 🚀

📧 Contato
Feito com 💙 por Rafael Conrado
