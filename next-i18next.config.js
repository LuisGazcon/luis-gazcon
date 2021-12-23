const path = require('path');

module.exports = {
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en',
		localeSubpaths: {
			en: 'en',
			es: 'es',
		},
		localePath: path.join(__dirname, 'public', 'locales'),
	},
	reloadOnPrerender: true,
	react: { useSuspense: false },
};
