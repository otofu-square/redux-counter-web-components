import { html } from "lit-html";
import { render } from "~/src/utils/render";
import { css } from "~/src/utils/css";

const stylesheet = css`
  img {
    width: 50px;
  }
`;

class ArrowButton extends HTMLElement {
  type: string | null;

  constructor() {
    super();
    this.type = this.getAttribute("type");
    render(this.renderHtml(), this, stylesheet);
  }

  getImgSrc = () => {
    switch (this.type) {
      case "top":
        return "https://alikinvv.github.io/stepper-iteration/build/img/arrow-top.svg";
      case "bottom":
      default:
        return "https://alikinvv.github.io/stepper-iteration/build/img/arrow-bottom.svg";
    }
  };

  getImgAlt = () => {
    switch (this.type) {
      case "top":
        return "arrow-top";
      case "bottom":
      default:
        return "arrow-bottom";
    }
  };

  renderHtml = () => html`
    <img src="${this.getImgSrc()}" alt="${this.getImgAlt()}" role="button" />
  `;
}

customElements.define("arrow-button", ArrowButton);
