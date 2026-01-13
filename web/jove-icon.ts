import { createIcon } from "./icon";

class JoveIcon extends HTMLElement {
  static get observedAttributes() {
    return ["name", "variant", "size"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  private render() {
    const name = this.getAttribute("name");
    if (!name) return;

    const variant = this.getAttribute("variant") ?? undefined;
    const size = this.getAttribute("size") ?? undefined;

    this.innerHTML = "";

    const icon = createIcon({
      variant: variant as any,
      size: size as any
    });

    this.appendChild(icon);
  }
}

customElements.define("jove-icon", JoveIcon);