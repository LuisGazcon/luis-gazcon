import { Fragment } from 'react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Index from '@/components/pages/index';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

const IndexPage: NextPage = () => {
	const { t } = useTranslation('common');

	return (
		<Fragment>
			<Head>
				<title>{`${t('title')} | ${t('slogan')}`}</title>
				<link rel='manifest' href='/manifest.json'></link>
				<meta name='title' content={`${t('title')} | ${t('slogan')}`} />
				<meta name='description' content={t('description')} />

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://www.luisgazcon.works/' />
				<meta property='og:title' content={`${t('title')} | ${t('slogan')}`} />
				<meta property='og:description' content={t('description')} />
				<meta property='og:image' content='/icons/logo.png' />

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://www.luisgazcon.works/' />
				<meta property='twitter:title' content={`${t('title')} | ${t('slogan')}`} />
				<meta property='twitter:description' content={t('description')} />
				<meta property='twitter:image' content='/icons/logo.png' />

				<link rel='apple-touch-icon' sizes='57x57' href='/icons/apple-icon-57x57.png' />
				<link rel='apple-touch-icon' sizes='60x60' href='/icons/apple-icon-60x60.png' />
				<link rel='apple-touch-icon' sizes='72x72' href='/icons/apple-icon-72x72.png' />
				<link rel='apple-touch-icon' sizes='76x76' href='/icons/apple-icon-76x76.png' />
				<link rel='apple-touch-icon' sizes='114x114' href='/icons/apple-icon-114x114.png' />
				<link rel='apple-touch-icon' sizes='120x120' href='/icons/apple-icon-120x120.png' />
				<link rel='apple-touch-icon' sizes='144x144' href='/icons/apple-icon-144x144.png' />
				<link rel='apple-touch-icon' sizes='152x152' href='/icons/apple-icon-152x152.png' />
				<link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-icon-180x180.png' />
				<link rel='icon' type='image/png' sizes='192x192' href='/icons/android-icon-192x192.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='96x96' href='/icons/favicon-96x96.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />

				<meta name='msapplication-TileColor' content='#a855f7' />
				<meta name='msapplication-TileImage' content='/icons/ms-icon-144x144.png' />
				<meta name='theme-color' content='#a855f7' />
			</Head>
			<Index />
		</Fragment>
	);
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
