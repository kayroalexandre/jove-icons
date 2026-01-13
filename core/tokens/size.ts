/**
 * JOVE ICONS — Size Tokens
 *
 * Semantic sizes for icons.
 * Values are defined using CSS variables with fallback.
 */

export const iconSizes = {
  xs: "var(--jove-icon-size-xs, 12px)",
  sm: "var(--jove-icon-size-sm, 16px)",
  md: "var(--jove-icon-size-md, 24px)",
  lg: "var(--jove-icon-size-lg, 32px)",
  xl: "var(--jove-icon-size-xl, 40px)"
} as const

export type IconSize = keyof typeof iconSizes
