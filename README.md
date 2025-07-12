# 💪 GymApp - Gerenciador de Treinos de Academia

Leve seu treino para o próximo nível com o **GymApp**!  
Este app mobile, desenvolvido com **React Native + Expo** e uma API em **Node.js**, é uma solução completa para acompanhar treinos, registrar progresso e explorar exercícios — tudo isso com uma interface moderna e responsiva.

Projeto baseado na trilha **Ignite da Rocketseat**, com diversas melhorias e personalizações.

---

## 🎬 Demonstração

_(Adicione aqui prints ou um GIF do app rodando)_

---

## ✨ Recursos Principais

✅ **Autenticação Segura**  
📚 **Catálogo de Exercícios**  
📖 **Detalhes Visuais dos Exercícios**  
📈 **Histórico de Treinos**  
🖼 **Perfil Personalizável com Foto**  
🧼 **Código Limpo e Componentizado**

---

## 🛠️ Tecnologias Utilizadas

### 📱 App Mobile (React Native)

- React Native + Expo
- TypeScript
- React Navigation
- Axios
- React Hook Form + Yup
- AsyncStorage
- Gluestack UI
- Lucide Icons

### ⚙️ API (Node.js)

- Express
- SQLite3 + Knex
- JWT
- Multer
- Swagger
- Dayjs

---

## 🚀 Começando

### 📋 Pré-requisitos

- Node.js (v18+ ou v20+)
- NPM ou Yarn
- App Expo Go no celular
- (Opcional) Emulador Android / Simulador iOS

---

### 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/rafconrado/gymapp.git
cd gymapp
Instale as dependências da API:
bash
Copiar
Editar
cd api
npm install
Instale as dependências do App:
bash
Copiar
Editar
cd ../mobile
npm install
▶️ Executando o Projeto
🔌 Iniciar a API
bash
Copiar
Editar
# No diretório /api
npm run migrate    # Cria as tabelas do banco de dados
npm run seed       # Popula com dados iniciais (opcional)
npm run dev        # Inicia o servidor backend
A API estará disponível em: http://localhost:3333

📱 Iniciar o App Mobile
bash
Copiar
Editar
# No diretório /mobile
npm start
# ou
expo start
Escaneie o QR Code com o app Expo Go no celular
ou use a para Android ou i para iOS no terminal.

📜 Scripts Disponíveis
🔧 API (/api)
Script	Descrição
npm run dev	Inicia o servidor em modo desenvolvimento
npm run migrate	Cria a estrutura do banco de dados
npm run seed	Popula o banco com dados fake

📱 Mobile (/mobile)
Script	Descrição
npm start	Inicia o servidor Expo
npm run android	Roda no emulador Android
npm run ios	Roda no simulador iOS

🤝 Contribuindo
Contribuições são bem-vindas!

Faça um fork do projeto

Crie uma branch:

bash
Copiar
Editar
git checkout -b feature/NovaFeature
Commit suas alterações:

bash
Copiar
Editar
git commit -m 'feat: adiciona NovaFeature'
Push para o seu fork:

bash
Copiar
Editar
git push origin feature/NovaFeature
Abra um Pull Request 🚀

📧 Contato
Rafael Conrado
🔗 GitHub: @rafconrado
🔗 LinkedIn: linkedin.com/in/rafconradoo
