# My Next.js TypeScript App

This is a Next.js project bootstrapped with TypeScript, Material-UI, React Query, and Storybook.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)
- [Running Storybook](#running-storybook)
- [Testing](#testing)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Next.js**: The React framework for production
- **TypeScript**: Strongly typed programming language that builds on JavaScript
- **Material-UI**: React components for faster and easier web development
- **React Query**: Hooks for fetching, caching, and updating asynchronous data
- **Storybook**: UI component explorer for React
- **Jest**: Delightful JavaScript testing framework with a focus on simplicity

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/my-next-ts-app.git
cd my-next-ts-app
npm install
# or
yarn install
```

## Running the Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

Build the application for production:

```bash
npm run build
# or
yarn build
```

The output will be in the `out/` directory.

## Running Storybook

To run Storybook and view your components in an isolated environment:

```bash
npm run storybook
# or
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) to view the Storybook UI.

## Testing

To run tests using Jest:

```bash
npm run test
# or
yarn test
```

## Folder Structure

Here's an overview of the project's folder structure:

```plaintext
my-next-ts-app/
├── .husky/
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── ReactQueryProvider.tsx
│   │   │   ├── ThemeProviderWrapper.tsx
│   │   ├── specific/
│   │       ├── SomeSpecificComponent.tsx
│   ├── hooks/
│   │   ├── useStyles.ts
│   ├── pages/
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── index.tsx
│   │   ├── newpage.tsx
│   │   ├── login.tsx
│   ├── styles/
│   │   ├── theme.ts
│   │   ├── global.css
│   ├── utils/
│   │   ├── api/
│   │   │   ├── fetchPostsData.ts
│   │   │   ├── fetchUserData.ts
│   │   ├── tests/
│   │       ├── fetchPostsData.test.ts
│   │       ├── fetchUserData.test.ts
├── config/
│   ├── jest.config.js
│   ├── jest.setup.ts
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── next-env.d.ts
├── tsconfig.json
├── package.json
├── README.md
└── ...
```

# Project Coding Conventions

## General Guidelines

1. **Use TypeScript:** All files should use TypeScript (.tsx or .ts).
2. **Consistent Formatting:** Use Prettier for consistent code formatting. Code should be formatted on save and all ESLint issues should be fixed.
3. **Comments:** Use comments to explain complex logic and provide context where necessary. Avoid obvious comments.

## Folder Structure

- **/src**
  - **/components**: Reusable components
  - **/hooks**: Custom hooks
  - **/pages**: Next.js pages
  - **/utils**: Utility functions
  - **/styles**: Global and component styles

## File Naming

- Use `camelCase` for file and folder names, except for React components which should use `PascalCase`.
- Example:
  - `src/hooks/useFetch.ts`
  - `src/components/Navbar.tsx`

## Components

- **Functional Components:** Use functional components over class components.
- **File Structure:** Each component should be in its own file.
- **Styling:** Use Material-UI for styling. Custom styles should be defined in a `useStyles` hook.

```tsx
import React from 'react';
import { Box } from '@mui/material';
import useStyles from '../hooks/useStyles';

const ExampleComponent: React.FC = () => {
  const { exampleStyles } = useStyles();

  return <Box sx={exampleStyles}>{/* Component content */}</Box>;
};

export default ExampleComponent;
```

## Hooks

- **Naming:** Prefix custom hooks with `use`.
- **Structure:** Custom hooks should be defined in the `/hooks` directory.

```ts
import { useState, useEffect } from 'react';

const useFetchData = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
};

export default useFetchData;
```

## Pages

- **Naming:** Page files should be named according to the route they represent.
- **Structure:** Define pages in the `/pages` directory. Each page should follow the structure:

```tsx
import { NextPage } from 'next';
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage: NextPage = () => {
  return (
    <Container>
      <Navbar />
      {/* Page content */}
      <Footer />
    </Container>
  );
};

export default HomePage;
```

## API Integration

- **React Query:** Use React Query for data fetching.
- **Structure:** API fetching logic should be placed in the `/utils` directory.

```ts
import axios from 'axios';

export const fetchUserData = async () => {
  const response = await axios.get('/api/user');
  return response.data;
};
```

## Styling

- **Material-UI:** Use Material-UI components and theming.
- **Custom Styles:** Define custom styles using the `useStyles` hook.

```ts
import { SxProps } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme();

  const exampleStyles: SxProps = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  };

  return { exampleStyles };
};

export default useStyles;
```

## Testing

- **Framework:** Use Jest for unit testing.
- **Structure:** Place tests in the `/tests` directory, mirroring the structure of `/src`.

```ts
import { render, screen } from '@testing-library/react';
import ExampleComponent from '../src/components/ExampleComponent';

test('renders example component', () => {
  render(<ExampleComponent />);
  const element = screen.getByText(/example component/i);
  expect(element).toBeInTheDocument();
});
```

## Storybook

- **Setup:** Use Storybook for component documentation and testing.
- **Structure:** Place stories in the `/stories` directory, mirroring the structure of `/src`.

```tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button from '../src/components/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'contained',
  color: 'secondary',
  children: 'Secondary Button',
};
```

By following these conventions, we can ensure our codebase remains clean, consistent, and maintainable.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any changes or suggestions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
