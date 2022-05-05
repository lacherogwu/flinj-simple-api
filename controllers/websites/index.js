import { getWebsites, updateWebsites } from '../../utils/index.js';

export const post = async ({ query }) => {
	const { name } = query;

	const websites = await getWebsites();

	const lastWebsiteId = websites[websites.length - 1]?.id || 0;
	const website = { id: lastWebsiteId + 1, name };
	websites.push(website);
	await updateWebsites(websites);

	return {
		body: {
			message: 'Website created successfully',
			website,
		},
	};
};

export const get = async () => {
	const websites = await getWebsites();
	return {
		body: websites,
	};
};
