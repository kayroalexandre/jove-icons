import type { VariantTransformer } from "./types";

/**
 * Outline variant
  */
  export const outline: VariantTransformer = (svg) => {
    return svg
        .replace(/fill="[^"]*"/g, 'fill="none"')
            .replace(
                  "<svg",
                        '<svg stroke="currentColor" stroke-width="var(--jove-icon-stroke-regular)"'
                            );
                            };
