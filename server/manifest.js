export const manifest = {
	appDir: "_app",
	appPath: "svelte-gh-pages/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-4f28c7e5.js","imports":["_app/immutable/start-4f28c7e5.js","_app/immutable/chunks/index-1664d19c.js","_app/immutable/chunks/singletons-90043bb3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
