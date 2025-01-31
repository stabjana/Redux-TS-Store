# Redux-TS-Store

This is our first use of Redux as a stage management tool.

#### Steps to install:

Steps:

1. Create a vite application

```bash
npm create vite@latest
```

2. Install dependencies
   Navigate to the project directory and install the dependencies

```bash
npm install
```

3. Clean the application by removing the default files to necessary ones.

- clean the App.tsx
- Clean the index.css and the App.css

4. Install the necessary dependencies you plan to work with:

- Install the material ui library

```bash
npm install @mui/material @emotion/react @emotion/styled
```

- Install the react-router-dom library

```bash
npm install react-router-dom
```

- Install the required fonts and add them to your project entry point (main.tsx)

```bash
npm install @fontsource/roboto
```

```js
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
```

5. Test everything is still working, and your MUI components work by adding a button temporarily to the App.tsx file, you can delete once you have tested.

```tsx
<Button>Hello World</Button>
```

```shell
npm run dev
```

6. Once the appliation is working, you can start adding redux to the application.

- Install the redux library

```bash
npm install @reduxjs/toolkit react-redux
```

```bash
npm install axios
```

## Adding Redux to the application

### Remembering the key points to adding state management to the application

1. Create a store or state
2. Connect the store or state to the application
3. Create a provider to wrap the application
4. Use the store or state in components.

# Redux-TS-Store
