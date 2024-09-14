## 🌐 [Versão em Português do README](README.md)

# NLW-Pocket-Javascript
# Task Management System

This project is a modern web application developed with React and TypeScript, using Vite as a bundler and Tailwind CSS for styling. The goal is to provide an interactive and responsive interface for managing goals and tasks.

## 🔨 Project Features

- **Goal Management**: Add and track daily and weekly goals.
- **Progress Visualization**: Monitor goal progress with charts and lists.
- **Interactivity**: Use dialogs and forms for user interaction.

### Visual Example of the Project

![image](https://github.com/user-attachments/assets/780424d8-b64f-4fec-a63f-597b77656478)
![image](https://github.com/user-attachments/assets/0e53f641-1796-4e31-9066-6555d91904c6)

## ✔️ Technologies and Tools Used

- **React**: Library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Vite**: Fast and modern build tool.
- **Tailwind CSS**: Utility-first CSS framework.
- **Radix UI**: Accessible and customizable UI components.
- **Lucide React**: Collection of React icons.
- **React Query**: Library for server state management.
- **Day.js**: Library for date manipulation.
- **Zod**: Schema validation library.
- **ESLint**: Tool for static code analysis and quality maintenance.
- **@hookform/resolvers**: Resolvers for integration with `react-hook-form`.
- **@radix-ui/react-dialog**: Accessible dialog component.
- **@radix-ui/react-progress**: Accessible progress bar component.
- **@radix-ui/react-radio-group**: Accessible radio button group component.
- **react-hook-form**: Library for handling forms.
- **tailwind-merge**: Utility for merging Tailwind CSS classes.
- **tailwind-variants**: Utility for Tailwind CSS variants.
- **@biomejs/biome**: Code linting and formatting tool.

## 📁 Project Structure

- **biome.json**: Biome configuration for linting and code formatting.
- **docker-compose.yml**: Docker Compose configuration for container environments.
- **Dockerfile**: File for building the Docker image.
- **Extra/**: Additional files.
    - **NLW Pocket JS • in.orbit (Community).fig**: Figma design file.
    - **ui.zip**: ZIP file with UI resources.
    - **Wallpapers NLW Pocket JavaScript-20240910T221314Z-001.zip**: ZIP file with wallpapers.
- **index.html**: Main HTML file.
- **LICENSE**: Project license file.
- **netlify.toml**: Netlify configuration for deployment.
- **package-lock.json**: npm dependency lock file.
- **package.json**: Project configuration and dependencies file.
- **postcss.config.js**: PostCSS configuration for CSS processing.
- **public/**: Static public files.
    - **favicon.svg**: Site icon.
    - **icon.svg**: Additional site icon.
- **README.md**: Main README file for the project.
- **README_EN.md**: README file in English.
- **src/**: Application source code.
    - **app.tsx**: Main application component.
    - **assets/**: Graphic resources and images.
        - **in-orbit-logo.svg**: "In Orbit" logo.
        - **lets-start-illustration.svg**: "Let's Start" illustration.
        - **logo-in-orbit.svg**: "Logo In Orbit".
        - **rocket-launch-illustration.svg**: "Rocket Launch" illustration.
    - **components/**: Reusable React components.
        - **create-goal.tsx**: Component for creating goals.
        - **empty-goals.tsx**: Component for displaying when no goals are present.
        - **in-orbit-icon.tsx**: "In Orbit" icon component.
        - **pending-goals.tsx**: Component for displaying pending goals.
        - **summary.tsx**: Goal summary component.
        - **ui/**: User interface components.
            - **button.tsx**: Button component.
            - **dialog.tsx**: Dialog component.
            - **input.tsx**: Input component.
            - **label.tsx**: Label component.
            - **outline-button.tsx**: Outline button component.
            - **progress-bar.tsx**: Progress bar component.
            - **radio-group.tsx**: Radio button group component.
            - **separator.tsx**: Separator component.
        - **weekly-summary.tsx**: Weekly summary component.
    - **http/**: HTTP request functions.
        - **create-goal-completion.ts**: Function for completing a goal.
        - **create-goal.ts**: Function for creating a goal.
        - **get-pending-goals.ts**: Function for getting pending goals.
        - **get-summary.ts**: Function for getting the goal summary.
    - **index.css**: Global styles for the application.
    - **main.tsx**: Entry point of the React application.
    - **vite-env.d.ts**: Vite environment declarations.
- **tailwind.config.js**: Tailwind CSS configuration.
- **tsconfig.app.json**: TypeScript configuration for the application.
- **tsconfig.json**: Main TypeScript configuration.
- **tsconfig.node.json**: TypeScript configuration for Node.js.
- **tsconfig.tsbuildinfo**: TypeScript build information.
- **vite.config.ts**: Vite configuration.

## 🛠️ Running the Project

To run the project locally, follow these steps:

1. **Ensure Node.js is Installed**:
    - [Node.js](https://nodejs.org/) is required to run the project. Check if it is already installed with:

      ```bash
      node -v
      ```

    - If not installed, download and install the recommended version.

2. **Clone the Repository**:
    - Copy the repository URL and run the following command in your terminal:

      ```bash
      git clone <REPOSITORY_URL>
      ```

3. **Install Dependencies**:
    - Navigate to the project directory and run:

      ```bash
      npm install
      ```

4. **Start the Development Server**:
    - Run the following command to start the development server on localhost port 5173:

      ```bash
      npm run dev
      ```

5. **Access the Application**:
    - Open your browser and go to [http://localhost:5173](http://localhost:5173).

## 🌐 Deployment

For deployment, follow the specific instructions for your chosen hosting service. Ensure that the production environment is set up to serve the application built by the build process.

## 📚 Support Material

For more information and support, refer to the complete Rocketseat documentation at the following link:

- [NLW Pocket Javascript Documentation](https://docs-rocketseat.notion.site/NLW-Pocket-JavaScript-4e6d735b40d7470aa4fe46919f8daef9)
