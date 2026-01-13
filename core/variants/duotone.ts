import type { IconVariant } from "./types"
import { iconColors } from "../tokens"

/**
 * Duotone variant
 * Uses primary and secondary colors
 */
export const duotone: IconVariant = (svg) => {
  return svg
    .replace(
      "<svg",
      `<svg fill="${iconColors.primary}"`
    )
    .replace(
      "<path",
      `<path fill="${iconColors.secondary}" opacity="0.6"`
    )
}
