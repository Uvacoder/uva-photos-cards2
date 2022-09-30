/** @type {import('./$types').PageLoad} */
export function load({ data }) {
	return {
		images: data.images
	};
}

export const prerender = true;
