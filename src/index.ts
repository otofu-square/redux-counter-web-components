import { render, html } from "lit-html";
import "~/src/elements/redux-counter";

const app = () => html`
  <div><redux-counter></redux-counter></div>
`;

render(app(), document.body);
