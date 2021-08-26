const path = require('path');
const SassAlias = require('sass-alias');

const PRODUCTION = process.env['NODE_ENV'] === 'production';
const SOURCE_PATH = path.join(__dirname, 'src');
const RESOURCES_PATH = path.join(SOURCE_PATH, 'resources');

const CSS_LOADER_OPTIONS_MODULES = {
	compileType: 'module',
	localIdentName: PRODUCTION ? '[hash:base64:8]' : '[path][name]__[local]',
	localIdentContext: SOURCE_PATH,
	mode: 'local',
	auto: true,
	exportGlobals: true,
	exportOnlyLocals: false,
	exportLocalsConvention: 'camelCase',
	namedExport: false,
};

module.exports = (config) => {
	config.module.rules[3].oneOf.forEach((loader) => {
		if (Array.isArray(loader.use)) {
			loader.use.forEach((l) => {
				if (l.loader.includes('css-loader') && !l.loader.includes('postcss-loader')) {
					l.options = {
						...l.options,
						importLoaders: 'false',
						esModule: false,
						sourceMap: false,
						modules: CSS_LOADER_OPTIONS_MODULES,
					};
				}
				if (l.loader.includes('sass-loader')) {
					l.loader = require.resolve('sass-loader');
					l.options = {
						...l.options,
						sassOptions: {
							importer: new SassAlias({
								'@resources': RESOURCES_PATH,
							}).getImporter(),
						},
					};
				}
			});
		}
	});

	return config;
};
