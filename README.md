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
- **@hookform/resolvers**: Resolvedores para integração com `react-hook-form`.
- **@radix-ui/react-dialog**: Componente de diálogo acessível.
- **@radix-ui/react-progress**: Componente de barra de progresso acessível.
- **@radix-ui/react-radio-group**: Componente de grupo de botões de rádio acessível.
- **react-hook-form**: Biblioteca para manipulação de formulários.
- **tailwind-merge**: Utilitário para mesclar classes do Tailwind CSS.
- **tailwind-variants**: Utilitário para variantes do Tailwind CSS.
- **@biomejs/biome**: Ferramenta de linting e formatação de código.

## 📁 Estrutura do Projeto

- **biome.json**: Configuração do Biome para linting e formatação de código.
- **docker-compose.yml**: Configuração do Docker Compose para ambientes de contêiner.
- **Dockerfile**: Arquivo para construção da imagem Docker.
- **Extra/**: Arquivos adicionais.
    - **NLW Pocket JS • in.orbit (Community).fig**: Arquivo de design do Figma.
    - **ui.zip**: Arquivo ZIP com recursos de UI.
    - **Wallpapers NLW Pocket JavaScript-20240910T221314Z-001.zip**: Arquivo ZIP com papéis de parede.
- **index.html**: Arquivo HTML principal.
- **LICENSE**: Arquivo de licença do projeto.
- **netlify.toml**: Configuração do Netlify para deploy.
- **package-lock.json**: Arquivo de bloqueio de dependências do npm.
- **package.json**: Arquivo de configuração do projeto e dependências.
- **postcss.config.js**: Configuração do PostCSS para processamento de CSS.
- **public/**: Arquivos públicos estáticos.
    - **favicon.svg**: Ícone do site.
    - **icon.svg**: Ícone adicional do site.
- **README.md**: Arquivo README principal do projeto.
- **README_EN.md**: Arquivo README em inglês.
- **src/**: Código fonte da aplicação.
    - **app.tsx**: Componente principal da aplicação.
    - **assets/**: Recursos gráficos e imagens.
        - **in-orbit-logo.svg**: Logotipo "In Orbit".
        - **lets-start-illustration.svg**: Ilustração "Let's Start".
        - **logo-in-orbit.svg**: Logotipo "Logo In Orbit".
        - **rocket-launch-illustration.svg**: Ilustração "Rocket Launch".
    - **components/**: Componentes React reutilizáveis.
        - **create-goal.tsx**: Componente para criar metas.
        - **empty-goals.tsx**: Componente para exibir quando não há metas.
        - **in-orbit-icon.tsx**: Componente de ícone "In Orbit".
        - **pending-goals.tsx**: Componente para exibir metas pendentes.
        - **summary.tsx**: Componente de resumo de metas.
        - **ui/**: Componentes de interface de usuário.
            - **button.tsx**: Componente de botão.
            - **dialog.tsx**: Componente de diálogo.
            - **input.tsx**: Componente de entrada de texto.
            - **label.tsx**: Componente de rótulo.
            - **outline-button.tsx**: Componente de botão com contorno.
            - **progress-bar.tsx**: Componente de barra de progresso.
            - **radio-group.tsx**: Componente de grupo de botões de rádio.
            - **separator.tsx**: Componente de separador.
        - **weekly-summary.tsx**: Componente de resumo semanal.
    - **http/**: Funções para requisições HTTP.
        - **create-goal-completion.ts**: Função para completar uma meta.
        - **create-goal.ts**: Função para criar uma meta.
        - **get-pending-goals.ts**: Função para obter metas pendentes.
        - **get-summary.ts**: Função para obter o resumo das metas.
    - **index.css**: Estilos globais da aplicação.
    - **main.tsx**: Ponto de entrada da aplicação React.
    - **vite-env.d.ts**: Declarações de ambiente do Vite.
- **tailwind.config.js**: Configuração do Tailwind CSS.
- **tsconfig.app.json**: Configuração do TypeScript para a aplicação.
- **tsconfig.json**: Configuração principal do TypeScript.
- **tsconfig.node.json**: Configuração do TypeScript para Node.js.
- **tsconfig.tsbuildinfo**: Informações de construção do TypeScript.
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

## 📚 Material de Apoio

Para mais informações e suporte, consulte a documentação completa da Rocketseat no link abaixo:

- [Documentação do NLW Pocket Javascript](https://docs-rocketseat.notion.site/NLW-Pocket-JavaScript-4e6d735b40d7470aa4fe46919f8daef9)
