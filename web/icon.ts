import { outline, filled, duotone, iconSizes } from "../core";
import type { IconAnimation } from "../core";
import { animationClassMap } from "../core";

import heart from "../core/shapes/heart.svg?raw";

type IconVariant = "outline" | "filled" | "duotone";

interface CreateIconOptions {
  variant?: IconVariant;
  size?: keyof typeof iconSizes;
  animation?: IconAnimation;
  className?: string;
}

/**
 * Creates an SVG icon element
 */
export function createIcon(options: CreateIconOptions = {}) {
  const {
    variant = "outline",
    size = "md",
    animation,
    className
  } = options;

  let svg = heart;

  if (variant === "filled") svg = filled(svg);
  if (variant === "duotone") svg = duotone(svg);
  if (variant === "outline") svg = outline(svg);

  const wrapper = document.createElement("span");
  wrapper.innerHTML = svg;

  const svgEl = wrapper.firstElementChild as SVGElement;

  svgEl.style.width = `var(--jove-icon-size-${size})`;
  svgEl.style.height = `var(--jove-icon-size-${size})`;

  if (animation) {
    const animClass = animationClassMap[animation];
    if (animClass) {
      svgEl.classList.add(animClass);
    }
  }

  if (className) {
    svgEl.classList.add(className);
  }

  return svgEl;
}