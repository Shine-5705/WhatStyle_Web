import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
			generateScopedName: '[name]__[local]__[hash:base64:5]'
		},
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
			}
		},
		postcss: {
			plugins: [
				autoprefixer(),
				cssnano({
					preset: 'default'
				})
			]
		}
	},
	build: {
		cssCodeSplit: true,
		minify: true,
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo.name && assetInfo.name.endsWith('.css')) {
						return 'assets/css/[name].[hash].min.css';
					}
					return 'assets/[name].[hash][extname]';
				}	
			}
		}
	},
	resolve: {
		alias: {
			'@': '/src',
		}
	},
	test: {
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					environment: 'browser',
					browser: {
						enabled: true,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
