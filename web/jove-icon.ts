import { createIcon } from "./icon";

class JoveIcon extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  private render() {
    // Limpa qualquer conteúdo anterior
    this.innerHTML = "";

    // Cria o SVG (versão simples, sem argumentos)
    const icon = createIcon();

    if (!icon) return;

    this.appendChild(icon);
  }
}

customElements.define("jove-icon", JoveIcon);