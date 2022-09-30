import { loadAllImages } from "../lib/loadAllImages";

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    const images = await loadAllImages();

	return {
		images
	};
}
