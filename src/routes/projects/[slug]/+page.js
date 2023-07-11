import { error } from '@sveltejs/kit';

import projectData from '../../../project-data.js';

export function load({ params }) {
	const data = projectData.find((p) => p.slug === params.slug);

	if (data) return data;
	else throw error(404, 'Not found');
}
