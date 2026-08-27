// Tailwind stylesheets are consumed by the NativeWind Metro transformer, not by
// TypeScript. Without this, `import './global.css'` is an unresolved side-effect
// import under `moduleResolution: bundler`.
declare module '*.css';
