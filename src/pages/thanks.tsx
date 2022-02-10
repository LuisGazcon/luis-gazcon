import React, { Fragment } from 'react';
import type { FC } from 'react';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Header from '@/components/organisms/header';
import Thanks from '@/components/organisms/thanks';

interface ThanksPageProps {}

const ThanksPage: NextPage = ({}) => {
	const { t } = useTranslation();

	return (
		<Fragment>
			<Head>
				<title>{`${t('title')} | ${t('thanks')}`}</title>
				<meta name='title' content={`${t('title')} | ${t('slogan')}`} />
				<meta name='description' content={t('description')} />

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://metatags.io/' />
				<meta property='og:title' content={`${t('title')} | ${t('slogan')}`} />
				<meta property='og:description' content={t('description')} />
				<meta
					property='og:image'
					content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
				/>

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://metatags.io/' />
				<meta property='twitter:title' content={`${t('title')} | ${t('slogan')}`} />
				<meta property='twitter:description' content={t('description')} />
				<meta
					property='twitter:image'
					content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
				/>
			</Head>
			<Header />
			<Thanks />
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

export default ThanksPage;
