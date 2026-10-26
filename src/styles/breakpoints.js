/**
 * Breakpoints padronizados para consultas responsivas em JS.
 * Alinhados com os media queries dos CSS Modules (640px, 768px, 1024px).
 */
const size = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
};

const breakpoints = {
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
};

export default breakpoints;