💪 GymApp - Gerenciador de Treinos de Academia
Leve seu treino para o próximo nível com o GymApp! Desenvolvido com React Native e Node.js, este projeto, baseado na trilha Ignite da Rocketseat, foi aprimorado para oferecer uma solução completa e robusta para gerenciamento de treinos.

🎬 Demonstração


✨ Recursos Principais
Autenticação Completa: Sistema de login seguro com JWT para proteger os dados do usuário.

Catálogo de Exercícios: Explore uma lista de exercícios, convenientemente organizados por grupos musculares.

Detalhes do Exercício: Visualize informações detalhadas para cada exercício, incluindo demonstrações visuais.

Histórico de Treinos: Registre cada exercício concluído e mantenha um histórico do seu progresso.

Perfil Personalizável: Faça o upload de uma foto de perfil para personalizar sua conta.

Limpeza de Código: Código bem estruturado, componentizado e com um sistema de rotas bem definido.

🛠️ Tecnologias Utilizadas
Esta solução é um monorepo que inclui tanto o frontend mobile quanto o backend da API.

📱 App Mobile (React Native)
⚙️ API (Node.js)
🚀 Começando
Siga estas instruções para obter uma cópia local do projeto em funcionamento.

Pré-requisitos
Node.js (versão LTS, ex: 18.x ou 20.x)

NPM ou Yarn

Expo Go App instalado no seu smartphone.

(Opcional) Emulador Android / Simulador iOS configurado.

Instalação
Clone o repositório:

Bash

git clone https://github.com/rafconrado/gymapp.git
Navegue até o diretório do projeto:

Bash

cd gymapp
Instale as dependências da API (backend):

Bash

cd api
npm install
Instale as dependências do App (mobile):

Bash

cd ../mobile
npm install
Executando o Aplicativo
Para o sistema funcionar, tanto a API quanto o App precisam estar rodando simultaneamente.

Inicie a API (Backend):

No diretório api/, execute os seguintes comandos:

Bash

# Cria as tabelas do banco de dados
npm run migrate

# Popula o banco com dados iniciais (opcional, mas recomendado)
npm run seed

# Inicia o servidor backend
npm run dev
O servidor da API estará disponível em http://localhost:3333.

Inicie o App (Mobile):

Em um novo terminal, navegue até o diretório mobile/ e execute:

Bash

npm start
# ou
# expo start
Após o servidor do Expo iniciar, escaneie o QR Code com o app Expo Go em seu celular ou use as opções do terminal para abrir em um emulador (a para Android, i para iOS).

📜 Scripts Disponíveis
API (api/package.json)
npm run dev: Inicia o servidor em modo de desenvolvimento com ts-node-dev.

npm run migrate: Executa as migrations do Knex para criar a estrutura do banco.

npm run seed: Popula o banco de dados com dados de teste.

Mobile (mobile/package.json)
npm start: Inicia o servidor de desenvolvimento Expo.

npm run android: Inicia e tenta abrir o app no emulador/dispositivo Android.

npm run ios: Inicia e tenta abrir o app no simulador/dispositivo iOS.

🤝 Contribuindo
Contribuições são o que tornam a comunidade open source um lugar incrível para aprender e criar. Qualquer contribuição que você fizer será muito apreciada.

Faça um Fork do Projeto

Crie sua Feature Branch (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a Branch (git push origin feature/AmazingFeature)

Abra um Pull Request

📧 Contato
Rafael Conrado

GitHub: @rafconrado

LinkedIn: linkedin.com/in/rafconradoo
