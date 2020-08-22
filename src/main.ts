import App from "./App.svelte"

const app = new App({
  target: document.body,
})

// @ts-ignore
window.app = app
export default app
