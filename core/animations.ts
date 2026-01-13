/**
 *  * Supported icon animations
  */
  export type IconAnimation =
    | "spin"
      | "pulse"
        | "bounce"
          | undefined;

          /**
           * Maps animation names to CSS classes
            * CSS implementation lives in web/
             */
             export const animationClassMap: Record<
               Exclude<IconAnimation, undefined>,
                 string
                 > = {
                   spin: "jove-anim-spin",
                     pulse: "jove-anim-pulse",
                       bounce: "jove-anim-bounce"
                       };