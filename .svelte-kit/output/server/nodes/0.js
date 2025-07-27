

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BU8Kd4SL.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CDKAzuPa.js"];
export const stylesheets = [];
export const fonts = [];
