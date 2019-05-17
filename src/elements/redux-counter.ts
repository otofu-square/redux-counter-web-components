import { html } from "lit-html";
import { render } from "~/src/utils/render";
import { css } from "~/src/utils/css";
import "./arrow-button";

type State = {
  count: number;
};

const stylesheet = css`
  p {
    color: red;
    font-size: 30px;
  }
`;

export class ReduxCounter extends HTMLElement {
  state: State = { count: 0 };

  constructor() {
    super();
    render(this.renderHtml(), this, stylesheet);
  }

  setState = (newState: State) => {
    this.state = { ...this.state, ...newState };
    render(this.renderHtml(), this);
  };

  onDecrementClick = () => {
    this.setState({ count: this.state.count - 1 });
  };

  onIncrementClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  renderHtml = () => html`
    <div>
      <arrow-button type="top" @click="${this.onIncrementClick}"></arrow-button>
      <p>count: ${this.state.count}</p>
      <arrow-button
        type="bottom"
        @click="${this.onDecrementClick}"
      ></arrow-button>
    </div>
  `;
}

customElements.define("redux-counter", ReduxCounter);
