import heart from "../core/shapes/heart.svg?raw";

export function createIcon() {
  const parser = new DOMParser();
  const doc = parser.parseFromString(heart, "image/svg+xml");

  const svg = doc.querySelector("svg");

  if (!svg) {
    console.error("SVG inválido");
    return null;
  }

  // estilos básicos para provar que funciona
  svg.setAttribute("width", "40");
  svg.setAttribute("height", "40");
  svg.setAttribute("fill", "red");

  return svg;
}