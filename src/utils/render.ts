import { render as _render, TemplateResult } from "lit-html";

export const render = (
  html: TemplateResult,
  component: HTMLElement,
  stylesheet?: Object // TODO: add typing for stylesheet
) => {
  const shadow =
    component.shadowRoot || component.attachShadow({ mode: "open" });

  if (stylesheet) {
    // @ts-ignore NOTE: could not find adoptedStyleSheets typing
    shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, stylesheet];
  }

  _render(html, shadow);
};
