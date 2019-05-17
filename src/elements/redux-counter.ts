import { html } from "lit-html";
import { render } from "~/src/utils/render";
import { css } from "~/src/utils/css";
import { store } from "~/src/store";
import { counterActions } from "~/src/modules/counter";

const stylesheet = css``;

export class ReduxCounter extends HTMLElement {
  constructor() {
    super();
    render(this.renderHtml(), this, stylesheet);
  }

  onDecrementClick = () => {
    store.dispatch(counterActions.decrement());
    render(this.renderHtml(), this);
  };

  onIncrementClick = () => {
    store.dispatch(counterActions.increment());
    render(this.renderHtml(), this);
  };

  renderHtml = () => html`
    <div>
      <arrow-button type="top" @click="${this.onIncrementClick}"></arrow-button>
      <p>count: ${store.getState().counter.count}</p>
      <arrow-button
        type="bottom"
        @click="${this.onDecrementClick}"
      ></arrow-button>
    </div>
  `;
}

customElements.define("redux-counter", ReduxCounter);
