import { getWebsites } from '../utils/index.js';

const isFound = (id, list = []) => list.some(item => item.id == id);

export default async ({ params }) => {
	const { id } = params;

	const websites = await getWebsites();

	if (!isFound(id, websites))
		return {
			status: 400,
			body: {
				message: `website with id of ${id} was not found.`,
			},
		};
};
