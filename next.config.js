const path = require('path');
const SassAlias = require('sass-alias');
const { i18n } = require('./next-i18next.config');

module.exports = {
	i18n: i18n,
	poweredByHeader: false,
	reactStrictMode: true,
	swcMinify: false,
	sassOptions: {
		importer: new SassAlias({
			'@resources': path.join(__dirname, 'src', 'resources'),
		}).getImporter(),
	},
	webpack: (config) => {
		config.module.rules[2].oneOf.forEach((moduleLoader) => {
			Array.isArray(moduleLoader.use) &&
				moduleLoader.use.forEach((l) => {
					if (!l.loader) return;
					if (l.loader.includes('css-loader') && !l.loader.includes('postcss-loader')) {
						l.options.modules.exportLocalsConvention = 'camelCase';
						l.options = {
							...l.options,
							modules: l.options.modules,
						};
					}
				});
		});
		return config;
	},
};
