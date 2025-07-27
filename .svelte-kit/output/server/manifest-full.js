export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.iDVUepvN.js",app:"_app/immutable/entry/app.6inFPL-h.js",imports:["_app/immutable/entry/start.iDVUepvN.js","_app/immutable/chunks/DYmrexpb.js","_app/immutable/chunks/Ms2dBmXR.js","_app/immutable/chunks/CDKAzuPa.js","_app/immutable/chunks/WMzA5ePA.js","_app/immutable/entry/app.6inFPL-h.js","_app/immutable/chunks/CDKAzuPa.js","_app/immutable/chunks/WMzA5ePA.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Ms2dBmXR.js","_app/immutable/chunks/BWgRJD9r.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
