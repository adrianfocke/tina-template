import { useMemo } from "react";

/**
 * Hook that generates a random background image URL
 * @param enabled - Whether to generate a background image (typically based on a condition like variant === 'solid')
 * @returns The background image URL or null if not enabled
 */
export const useBackgroundImage = (enabled: boolean): string | null => {
  const backgroundImage = useMemo(() => {
    if (!enabled) return null;
    const randomNum = Math.floor(Math.random() * 9) + 1;
    return `/uploads/buttons/button${randomNum}.png`;
  }, [enabled]);

  return backgroundImage;
};
