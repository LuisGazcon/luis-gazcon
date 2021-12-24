import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import '@/resources/scss/index.scss';

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default appWithTranslation(App);
