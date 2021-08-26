import type { AppProps } from 'next/app';

import '@/resources/scss/index.scss';

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};
export default App;
