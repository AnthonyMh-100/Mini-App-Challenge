export const truncateText = ({ maxLength, text }) => {
  if (!text || text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};
