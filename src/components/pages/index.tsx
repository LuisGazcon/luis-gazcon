import React, { Fragment } from 'react';
import type { FC } from 'react';

import { Button } from '@/components/atoms/button/button.component';
import { Landing } from '@/components/organisms/landing/landing.component';
import Header from '@/components/organisms/header';
import Skills from '@/components/organisms/skills';
import Contact from '@/components/organisms/contact';
import About from '@/components/organisms/about';
import Footer from '@/components/organisms/footer';
import Projects from '@/components/organisms/projects/projects.components';

interface IndexProps {}

const Index: FC<IndexProps> = ({}: IndexProps) => {
	return (
		<Fragment>
			<Header />
			<Landing />
			<Skills />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</Fragment>
	);
};

export default Index;
