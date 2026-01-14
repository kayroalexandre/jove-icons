import heart from "../core/shapes/heart.svg?raw";

export function createIcon() {
  // 1. Criamos um parser para transformar a string em SVG
  const parser = new DOMParser();

  // 2. Parseamos o SVG em um documento separado
  const parsedDocument = parser.parseFromString(
    heart,
    "image/svg+xml"
  );

  // 3. Pegamos o elemento <svg> desse documento
  const svgFromParser = parsedDocument.querySelector("svg");

  if (!svgFromParser) {
    console.error("SVG inválido ou não encontrado");
    return null;
  }

  // 4. IMPORTANTE:
  // Aqui adotamos o SVG para o documento real da página
  const svg = document.importNode(svgFromParser, true);

  // 5. Agora sim podemos modificar e usar normalmente
  svg.setAttribute("width", "40");
  svg.setAttribute("height", "40");
  svg.setAttribute("fill", "red");

  // 6. Retornamos um SVG que pertence ao DOM atual
  return svg;
}

