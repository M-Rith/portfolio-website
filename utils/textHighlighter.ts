/**
 * Splits text into segments and identifies which segments should be highlighted
 * @param text The text to process
 * @param highlights Array of terms to highlight
 * @returns Array of segments with their highlight status
 */
export const splitTextWithHighlights = (
  text: string,
  highlights?: string[]
): { segment: string; isHighlighted: boolean }[] => {
  if (!highlights?.length) return [{ segment: text, isHighlighted: false }];

  // Create a regex pattern that matches any of the highlight terms
  const pattern = new RegExp(`(${highlights.join("|")})`, "gi");
  const segments = text.split(pattern);

  return segments.map((segment) => ({
    segment,
    isHighlighted: highlights.some(
      (term) => segment.toLowerCase() === term.toLowerCase()
    ),
  }));
}; 