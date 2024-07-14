# RDH-CORP

## Description
[Your Project Description]

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/[Your Username]/RDH-CORP.git
    ```
2. Navigate to the project directory:
    ```sh
    cd RDH-CORP
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Running the Application
To start the development server:
```sh
npm run dev
```
or
```sh
yarn dev
```

To build the application for production:
```sh
npm run build
```
or
```sh
yarn build
```

To preview the production build:
```sh
npm run preview
```
or
```sh
yarn preview
```

### Running Tests
To run unit tests:
```sh
npm run test:unit
```
or
```sh
yarn test:unit
```

### Linting
To lint the codebase:
```sh
npm run lint
```
or
```sh
yarn lint
```

## Project Structure
```
├── public
│   └── [static assets]
├── src
│   ├── app
│   │   └── app.vue
│   ├── components
│   │   └── [reusable Vue components]
│   ├── pages
│   │   └── [application pages]
│   ├── router
│   │   └── index.ts
│   ├── store
│   │   └── [Vuex stores]
│   ├── translation
│   │   └── [i18n setup]
│   ├── utils
│   │   └── [utility functions and classes]
│   ├── main.scss
│   └── main.ts
├── package.json
├── vite.config.ts
└── README.md
```

## Key Features
- **Vue 3**: The progressive JavaScript framework for building user interfaces.
- **Vue Router**: The official router for Vue.js for building single-page applications.
- **Pinia**: The intuitive state management library for Vue.
- **Vue Toastification**: A Vue.js toast notification library.
- **i18n**: Internationalization plugin for Vue.js.
- **TypeScript**: Typed JavaScript at any scale.

## Configuration
### Environment Variables
The project uses environment variables defined in the Vite project config. You can set these variables in a `.env` file at the root of the project.

### Toast Notification Options
The toast notifications are configured with the following options:
- `timeout`: 3000ms
- `closeOnClick`: true
- `pauseOnFocusLoss`: true
- `pauseOnHover`: true
- `draggable`: true
- `draggablePercent`: 0.6
- `showCloseButtonOnHover`: false
- `hideProgressBar`: false
- `closeButton`: 'button'
- `icon`: true
- `rtl`: false

## Contributing
We welcome contributions to improve this project. To contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.