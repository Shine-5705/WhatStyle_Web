const config = {
  // plugins: ["@tailwindcss/postcss"],
  plugins: {
    '@tailwindcss/postcss': {}, // Tailwind CSS plugin
    autoprefixer: {}, // Adds vendor prefixes for browser compatibility
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}), // Minifies CSS only in production
  },
};

export default config;
