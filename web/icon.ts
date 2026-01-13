import { outline, filled, duotone, iconSizes } from "../core"
import heart from "../core/shapes/heart.svg?raw"

type IconVariant = "outline" | "filled" | "duotone"

interface CreateIconOptions {
  variant?: IconVariant
  size?: keyof typeof iconSizes
  className?: string
}

/**
 * Creates an SVG icon element
 */
export function createIcon(options: CreateIconOptions = {}) {
  const {
    variant = "outline",
    size = "md",
    className
  } = options

  let svg = heart

  if (variant === "filled") svg = filled(svg)
  if (variant === "duotone") svg = duotone(svg)
  if (variant === "outline") svg = outline(svg)

  const wrapper = document.createElement("span")
  wrapper.innerHTML = svg

  const svgEl = wrapper.firstElementChild as SVGElement
  svgEl.style.width = iconSizes[size]
  svgEl.style.height = iconSizes[size]

  if (className) {
    svgEl.classList.add(className)
  }

  return svgEl
}
