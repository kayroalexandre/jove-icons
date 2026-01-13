/**
 * JOVE ICONS — Color Tokens
 *
 * Icon colors are controlled by CSS.
 * Primary color uses currentColor.
 * Secondary color is optional (used for duotone).
 */

export const iconColors = {
  primary: "currentColor",
  secondary: "var(--jove-icon-secondary-color, currentColor)"
} as const
