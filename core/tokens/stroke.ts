/**
 * JOVE ICONS — Stroke Tokens
 *
 * Semantic stroke widths for outline icons.
 */

export const iconStrokes = {
  thin: "var(--jove-icon-stroke-thin, 1)",
  regular: "var(--jove-icon-stroke-regular, 2)",
  bold: "var(--jove-icon-stroke-bold, 2.5)"
} as const

export type IconStroke = keyof typeof iconStrokes
