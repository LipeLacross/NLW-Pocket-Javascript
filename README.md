## 🌐 [English Version of README](README_EN.md)

# NLW-Pocket-Javascript
# Sistema de Gestão de Tarefas

Este projeto é uma aplicação web moderna desenvolvida com React e TypeScript, utilizando Vite como bundler e Tailwind CSS para estilização. O objetivo é fornecer uma interface interativa e responsiva para a gestão de metas e tarefas.

## 🔨 Funcionalidades do Projeto

- **Gerenciamento de Metas**: Adicione e acompanhe metas diárias e semanais.
- **Visualização de Progresso**: Monitore o progresso das metas com gráficos e listas.
- **Interatividade**: Use diálogos e formulários para interação com o usuário.

### Exemplo Visual do Projeto

![image](https://github.com/user-attachments/assets/780424d8-b64f-4fec-a63f-597b77656478)
![image](https://github.com/user-attachments/assets/0e53f641-1796-4e31-9066-6555d91904c6)

## ✔️ Técnicas e Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build rápida e moderna.
- **Tailwind CSS**: Framework para estilização utilitária.
- **Radix UI**: Componentes acessíveis e personalizáveis para a UI.
- **Lucide React**: Conjunto de ícones React.
- **React Query**: Biblioteca para gerenciamento de estado de servidor.
- **Day.js**: Biblioteca para manipulação de datas.
- **Zod**: Biblioteca de validação de esquemas.
- **ESLint**: Ferramenta para análise estática do código e manutenção da qualidade.

## 📁 Estrutura do Projeto

- **public/**: Contém arquivos estáticos.
    - favicon.ico: Ícone do site.
    - index.html: Arquivo HTML principal.
- **src/**
    - **app/**: Componentes principais da aplicação.
    - **components/**: Componentes reutilizáveis.
    - **http/**: Funções para requisições HTTP.
    - **ui/**: Componentes de interface de usuário.
    - main.tsx: Ponto de entrada da aplicação React.
    - index.css: Estilos globais da aplicação.
- **.gitignore**: Arquivo para especificar quais arquivos e diretórios o Git deve ignorar.
- **package.json**: Arquivo de configuração do projeto e dependências.
- **tsconfig.json**: Configuração do TypeScript.
- **vite.config.ts**: Configuração do Vite.

## 🛠️ Abrir e rodar o projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**:
    - O [Node.js](https://nodejs.org/) é necessário para rodar o projeto. Você pode verificar se já o tem instalado com:

      ```bash
      node -v
      ```

    - Se não estiver instalado, baixe e instale a versão recomendada.

2. **Clone o Repositório**:
    - Copie a URL do repositório e execute o comando abaixo no terminal:

      ```bash
      git clone <URL_DO_REPOSITORIO>
      ```

3. **Instale as Dependências**:
    - Navegue até o diretório do projeto e execute:

      ```bash
      npm install
      ```

4. **Inicie o Servidor de Desenvolvimento**:
    - Execute o comando abaixo para iniciar o servidor de desenvolvimento no localhost na porta 5173:

      ```bash
      npm run dev
      ```

5. **Acesse a Aplicação**:
    - Abra seu navegador e acesse [http://localhost:5173](http://localhost:5173).

## 🌐 Deploy

Para o deploy da aplicação, siga as instruções específicas do serviço de hospedagem escolhido. Certifique-se de que o ambiente de produção está configurado para servir a aplicação gerada pela build.
