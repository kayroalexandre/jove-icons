import type { IconVariant } from "./types"

/**
 * Filled variant
 * Applies fill using currentColor
 */
export const filled: IconVariant = (svg) => {
  return svg.replace(
    "<svg",
    `<svg fill="currentColor"`
  )
}