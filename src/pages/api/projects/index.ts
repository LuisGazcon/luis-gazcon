import { NextApiRequest, NextApiResponse } from 'next';

const projects = [
	{
		id: 1,
		name: 'SASS Module alias',
		repositoryUrl: 'https://wwww.github.com/LuisGazcon/sass-alias',
		homepageUrl: 'https://www.npmjs.com/package/sass-alias',
		thumbnailUrl: '/images/thumbnails/sass-alias.png',
		description: 'sass-alias is a node-sass and dart-sass importer that brings aliasing to sass.',
		tags: ['TypeScript', 'SASS', 'CSS'],
	},
	{
		id: 2,
		name: 'Luis Gazcon Portfolio',
		thumbnailUrl: '/images/thumbnails/luis-gazcon.png',
		description: 'This web developer portfolio, builted using React.js and Next.js.',
		repositoryUrl: 'https://www.github.com/LuisGazcon/luis-gazcon',
		homepageUrl: 'https://luisgazcon.vercel.app',
		tags: ['TypeScript', 'Next.js', 'SASS'],
	},
	{
		id: 3,
		name: 'Hybrid Elite',
		repositoryUrl: 'https://wwww.github.com/LuisGazcon/sass-alias',
		homepageUrl: 'https://www.npmjs.com/package/sass-alias',
		thumbnailUrl: '/images/thumbnails/hybrid-elite.png',
		description:
			'Hybrid Elite is a full web system created to manage users, workouts, supplements and a lot more.',
		tags: ['TypeScript', 'SASS', 'CSS'],
	},
];

export default function handler(request: NextApiRequest, response: NextApiResponse) {
	response.status(200).send(projects);
}
