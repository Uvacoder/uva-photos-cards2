export const loadAllImages = async () => {
	const imageModules = import.meta.glob('../../static/photos/*');

	const steve = await Promise.all(
		Object.keys(imageModules).map(async (key) => {
			return [key, key.replace('../../static', '')];
		})
	);

	return steve.reverse();
};
