# Template for CAS FEE ADV Design System

This is a template repository for the CAS FEE ADV design system part.
It is configured to automatically provide GitHub Actions to build and deploy
your design system as a static page and your component library to the
GitHub package registry.

## Getting started

After creating your assignment from this template, you'll need to install
storybook and the base of your component library by yourself.

## Deployment

This repository is configured to automatically deploy your design system
to GitHub Pages and the component library to the GitHub package registry.

Please ensure the following prerequisites are met:

- Storybook
  - Your `package.json` contains a `build-storybook` script
  - The resulting build is located in the `storybook-static` directory
- Component Library
  - Your `package.json` contains a `build` script
  - When trying with `npm pack`, all your required files are included in the resulting tarball
  - Your `package.json` file contains the correct _scope_ for your package (`@smartive-education`)
  - The `package.json` file contains the correct registry

## What I did

- `npx storybook init --type react` to initialize storybook with react
- `npm i -D react react-dom` to install react and react-dom to make storybook work with actual react components
- Used the definition in [main.js configuration](https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration) to configure storybook to use typescript: add the following typescript config to your `main.js` file in the storybook folder
  ```js
  module.exports = {
    typescript: {
      check: false,
      checkOptions: {},
      reactDocgen: 'react-docgen-typescript',
      reactDocgenTypescriptOptions: {
        shouldExtractLiteralValuesFromEnum: true,
        propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      },
    },
  };
  ```
- install typescript types for react and react-dom: `npm i -D @types/react @types/react-dom`

Upon now, storybook is able to work with typescript (`tsx`) components and stories. To install tailwindcss, I followed the storybook recommendation, as well as some stackoverflow answers:

- Install tailwind and its dependencies: `npm i -D tailwindcss postcss autoprefixer`
- Run `npx tailwind init` to create a `tailwind.config.js` file
- Create the `postcss.config.js` file according to the tailwind docs
- Configure the `tailwind.config.js` to use the `stories` folder as the source for the content option:
- Import the tailwind css file in the `.storybook/preview.js` file:
  ```js
  import 'tailwindcss/tailwind.css';
  ```
- Configure storybook to use the postcss addon (with postcss 8 for tailwind) in the `.storybook/main.js` file:
  ```js
  addons: [
    // ... other addons
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ];
  ```

Storybook is now able to use tailwind. To structure the repository in a way for the component library we need, I did the following:

- Restructure your project to have a `src` folder with all your components and place the stories with the components (effectively deleting the `stories` folder)
- Tell storybook to fetch your components in the `src` folder instead of the `stories` folder (add `stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],` to the `main.js` file)
- Tell tailwind that your components are in the `src` folder instead of the `stories` folder:
  ```js
  content: ['./src/**/*.{ts,tsx}'],
  ```
- Create a demo component (button) and a story for it

Storybook is now able to fetch our components from the `src` folder and use tailwind to style the whole thing. To create the component library itself, we need typescript (strictly speaking, you dont need typescript, but I definitely do recommend it), and some kind of build process:

- Install typescript: `npm i -D typescript`
- Create the `tsconfig.json` file with the specific react-ish config
- Create the `index.ts` file that exports all of our components in the `src` folder
- Configure the build process in `package.json` to use the typescript compiler:
  ```json5
  "scripts": {
    // other scripts
    "build": "tsc",
  }
  ```

Now we have a build process that compiles our typescript components into javascript (esnext) with sourcemaps and typedefinitions. The whole result will land in the `dist` folder. To create the publishable component library:

- Configure your `package.json` to include your dist files in the package:
  ```json5
  "files": ["dist"],
  ```
- If you build and test the package (with `npm run build` followed by `npm pack`), you should see that the `dist` folder is included in the tarball:
  ```bash
  npm notice === Tarball Contents ===
  npm notice 11.6kB LICENSE
  npm notice 4.8kB  README.md
  npm notice 261B   dist/components/button.d.ts
  npm notice 422B   dist/components/button.js
  npm notice 456B   dist/components/button.js.map
  npm notice 38B    dist/index.d.ts
  npm notice 71B    dist/index.js
  npm notice 123B   dist/index.js.map
  npm notice 1.1kB  package.json
  ```
- To make our compiled files discoverable from the "root" package, we need to define the exports field in the `package.json`:
  ```json5
  "exports": {
    ".": {
      "import": "./dist/index.js"
    }
  },
  ```
  It uses "import" because we compile an esm - next module
- To actually use the typescript types, we define the types field in the `package.json`:
  ```json5
  "types": "dist/index.d.ts",
  ```
- Last but not least, we should give the lib a better name in the `package.json`:
  ```json5
  "name": "@smartive-education/design-system-component-library-demo",
  ```

Now we have a publishable component library.

In this repository template, there is a system called ["semantic release"](https://github.com/semantic-release/semantic-release). Semantic release does remove the need of manually creating new versions and deploying packages. It does this by analyzing the commit messages and creating a new version based on the commit messages. It also creates a changelog based on the commit messages. Since it is already installed in the github actions workflow, all you need to do is use semantic commits ([angular commit format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)):

- `feat: add a new feature` will create a new minor version
- `fix: fix a bug` will create a new patch version
- Some commit with a `BREAKING CHANGE` in the description of the commit will create a new major version
- for other commit types, see the angular format. by default semantic release only uses `feat` and `fix` (and breaking change) to create a new version, but you can configure it to use other commit types as well (see `.releaserc.json` file)

Tools such as commitizen or commitlint can be used to enforce the commit message format.

## Summary

After the steps above we have created the following setup:

- A react component library that is written in typescript
- The component library is styled with tailwindcss
- The component library is compiled with the typescript compiler to the ESM format
- The resulting package has type definitions and a dist package that is directly accessible from the root package
- The components can be coded and described in storybook
- The component lib is automatically published to github package repository inside the organization (viewable in the repository under "packages")
- The storybook is directly published to github pages inside the organization (link viewable in the repository under "environments")
