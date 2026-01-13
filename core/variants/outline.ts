import type { IconVariant } from "./types"
import { iconStrokes } from "../tokens"

/**
 * Outline variant
 * Applies stroke and no fill
 */
export const outline: IconVariant = (svg) => {
  return svg
    .replace(
      "<svg",
      `<svg fill="none" stroke="currentColor" stroke-width="${iconStrokes.regular}"`
    )
}
