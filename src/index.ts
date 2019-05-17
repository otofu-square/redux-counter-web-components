import { render, html } from "lit-html";
import "~/src/elements";

const app = () => html`
  <div>
    <redux-counter @hover="${() => console.log("hovered")}"></redux-counter>
  </div>
`;

render(app(), document.body);
