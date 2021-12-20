const path = require('path');
const SassAlias = require('sass-alias');
const { i18n } = require('./next-i18next.config');

module.exports = {
	i18n: i18n,
	poweredByHeader: false,
	reactStrictMode: true,
	sassOptions: {
		importer: new SassAlias({
			'@resources': path.join(__dirname, 'src', 'resources'),
		}).getImporter(),
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
