import type { VariantTransformer } from "./types";

/**
 * Filled variant
  */
  export const filled: VariantTransformer = (svg) => {
    return svg
        .replace(/stroke="[^"]*"/g, "")
            .replace(
                  "<svg",
                        '<svg fill="currentColor"'
                            );
                            };