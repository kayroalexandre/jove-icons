/**
 * Global icon variants supported by the system
 * This type MUST live only here.
 */
export type IconVariant = "outline" | "filled" | "duotone";

/**
 * Base icon definition
 * (future-proof for multiple icons)
 */
export interface IconDefinition {
  name: string;
  svg: string;
}
