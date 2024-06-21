
# My Next.js TypeScript App

This repository contains the source code for a Next.js application written in TypeScript. The project is designed to showcase best practices in modern web development, utilizing Next.js, TypeScript, and Material-UI (MUI).

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed:

- Node.js (>=14.x.x)
- npm or yarn
- Git

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/thiraphat-ps-dev/my-next-ts-app.git
    ```
2. Change into the project directory:
    ```bash
    cd my-next-ts-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the Project

To start the development server, run:

```bash
npm run dev
```
or
```bash
yarn dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Folder Structure

The project structure is organized as follows:

\`\`\`plaintext
my-next-ts-app/
├── public/           # Static files
├── src/              # Source files
│   ├── components/   # React components
│   ├── pages/        # Next.js pages
│   ├── styles/       # CSS and styles
│   ├── utils/        # Utility functions
│   └── ...           # Other directories and files
├── .gitignore        # Git ignore file
├── README.md         # Project documentation
├── package.json      # NPM dependencies and scripts
└── tsconfig.json     # TypeScript configuration
\`\`\`

## Available Scripts

- `dev`: Start the development server.
- `build`: Build the project for production.
- `start`: Start the production server.
- `lint`: Run ESLint to lint the code.
- `test`: Run tests (if applicable).

## Configuration

The project uses the following configuration files:

- `next.config.js`: Next.js configuration.
- `tsconfig.json`: TypeScript configuration.
- `.eslintrc.js`: ESLint configuration.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI (MUI)](https://mui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Husky](https://github.com/typicode/husky)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
