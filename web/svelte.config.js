import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html',
			pages: 'build/',
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
		},
		alias: {
			// an alias ending /* will only match
			// the contents of a directory, not the directory itself
			'$components/*': './src/components/*',
			'$static/*': './static/*',
			'$stores/*': './src/stores/*',

		}
	}
};

export default config;
