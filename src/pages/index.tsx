import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Index from '@/components/pages/index';

const IndexPage: NextPage = () => {
	return <Index />;
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, [
			'common',
			'footer',
			'landing',
			'header',
			'about',
			'contact',
		])),
	},
});

export default IndexPage;
