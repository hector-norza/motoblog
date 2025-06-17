// Create placeholder SVG for image lazy loading
const createPlaceholderSVG = () => {
  const width = 1200;
  const height = 630;
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="${width}" height="${height}" fill="#1e293b" />
      <text x="${width/2}" y="${height/2}" font-family="Inter, sans-serif" font-size="32" fill="#64748b" text-anchor="middle" dominant-baseline="middle">MotoBlog Image</text>
    </svg>
  `;
  
  // Convert SVG to base64
  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
};

export default createPlaceholderSVG;
