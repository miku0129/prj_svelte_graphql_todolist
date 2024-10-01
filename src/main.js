import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    appTitle: "Svelte-graphql-app"
  }
});

export default app;
