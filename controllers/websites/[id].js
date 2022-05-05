import { getWebsites, updateWebsites } from '../../utils/index.js';

export const put = async ({ params, query }) => {
	const { id } = params;
	const { name } = query;

	const websites = await getWebsites();
	console.log('updating a website');

	const website = websites.find(item => item.id == id);
	website.name = name;

	await updateWebsites(websites);

	return {
		body: {
			message: 'website updated successfully!',
			website,
		},
	};
};

export const get = async ({ params }) => {
	const { id } = params;

	const websites = await getWebsites();
	const website = websites.find(item => item.id == id);

	return {
		body: website,
	};
};

export const middlewares = ['isWebsiteExists'];
