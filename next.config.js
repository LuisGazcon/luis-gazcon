const path = require('path');
const SassAlias = require('sass-alias');

module.exports = {
	poweredByHeader: false,
	reactStrictMode: true,
	sassOptions: {
		importer: new SassAlias({
			'@resources': path.join(__dirname, 'src', 'resources'),
		}),
	},
	webpack: (config) => {
		config.module.rules[3].oneOf.forEach((moduleLoader, i) => {
			Array.isArray(moduleLoader.use) &&
				moduleLoader.use.forEach((l) => {
					if (l.loader.includes('\\css-loader') && !l.loader.includes('postcss-loader')) {
						const { getLocalIdent, ...others } = l.options.modules;

						l.options = {
							...l.options,
							modules: {
								...others,
								localIdentName: '[hash:base64:8]',
								exportLocalsConvention: 'camelCase',
							},
						};
					}
				});
		});
		return config;
	},
};
