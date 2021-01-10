import { DocumentHighlight } from "vscode";
import App from "../components/TrekSidebar.svelte";

const app = new App({
    target: document.body,
});

export default app;