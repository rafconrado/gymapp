# 💪 GymApp - Gerenciador de Treinos de Academia

Leve seu treino para o próximo nível com o **GymApp**!  
Este app mobile, desenvolvido com **React Native + Expo** e uma API em **Node.js**, é uma solução completa para acompanhar treinos, registrar progresso e explorar exercícios — tudo isso com uma interface moderna e responsiva.

Projeto baseado na trilha **Ignite da Rocketseat**, com diversas melhorias e personalizações.

---

## 🎬 Demonstração

---

## ✨ Recursos Principais

✅ **Autenticação Segura:** Login com JWT para proteger seus dados  
📚 **Catálogo de Exercícios:** Listagem organizada por grupo muscular  
📖 **Detalhes Visuais:** Página com informações e imagens do exercício  
📈 **Histórico de Treinos:** Registre seu desempenho por sessão  
🖼 **Perfil Personalizável:** Upload de imagem direto do app  
🧼 **Código Limpo:** Componentização, tipagem com TypeScript e organização clara

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
- Multer (upload de imagens)
- Swagger (documentação)
- Dayjs

---

## 🚀 Começando

### 📋 Pré-requisitos

- Node.js (v18+ ou v20+)
- NPM ou Yarn
- Expo Go (no celular)
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
🔌 Inicie a API:
bash
Copiar
Editar
# No diretório /api
npm run migrate    # Cria o banco de dados
npm run seed       # Popula com dados iniciais
npm run dev        # Inicia o servidor backend
A API estará disponível em: http://localhost:3333

📱 Inicie o App Mobile:
bash
Copiar
Editar
# No diretório /mobile
npm start
# ou
expo start
Escaneie o QR Code com o app Expo Go ou use a (Android) / i (iOS) no terminal.

📜 Scripts Disponíveis
API (/api)
npm run dev – Inicia o servidor em modo dev

npm run migrate – Cria a estrutura do banco

npm run seed – Popula o banco com dados fake

Mobile (/mobile)
npm start – Inicia o Expo

npm run android – Roda no emulador Android

npm run ios – Roda no simulador iOS

🤝 Contribuindo
Contribuições são bem-vindas!

Fork o projeto

Crie uma branch (git checkout -b feature/minha-feature)

Commit suas mudanças (git commit -m 'feat: minha feature')

Push (git push origin feature/minha-feature)

Abra um Pull Request

📧 Contato
Rafael Conrado
🔗 GitHub: @rafconrado
🔗 LinkedIn: linkedin.com/in/rafconradoo
