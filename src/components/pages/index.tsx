import React, { Fragment } from 'react';
import type { FC } from 'react';

import Button from '@/components/atoms/button';
import Landing from '@/components/organisms/landing';
import Header from '@/components/organisms/header';
import Skills from '@/components/organisms/skills';
import Contact from '@/components/organisms/contact';
import About from '@/components/organisms/about';
import Footer from '@/components/organisms/footer';

interface IndexProps {}

const Index: FC<IndexProps> = ({}: IndexProps) => {
	return (
		<Fragment>
			<Header />
			<Landing />
			<Skills />
			<About />
			<Contact />
			<Footer />
		</Fragment>
	);
};

export default Index;
