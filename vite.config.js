import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	base: '/svelte-gh-deploy/',
	plugins: [sveltekit()]
};

export default config;
