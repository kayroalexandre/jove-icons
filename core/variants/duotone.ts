import type { VariantTransformer } from "./types";

/**
 * Duotone variant
 * Uses opacity tokens for layers
 */
export const duotone: VariantTransformer = (svg) => {
  return svg
    .replace(
      "<svg",
      `<svg fill="currentColor">`
    )
    .replace(
      "<path",
      `<path opacity="var(--jove-icon-duotone-secondary-opacity)"`
    );
};
