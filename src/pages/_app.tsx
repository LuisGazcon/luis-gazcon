import type { AppProps } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';

import '@/resources/scss/index.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default appWithTranslation(App);
