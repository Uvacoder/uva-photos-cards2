export const loadAllImages = async () => {
	const imageModules = import.meta.glob('../../static/photos/*');

	console.log(imageModules);

	const steve = await Promise.all(
		Object.keys(imageModules).map(async (key) => {
			// const { default: imageURL } = (await imageModules[key]()) as unknown as { default: string };
			return [key, key.replace('../../static', '')];
		})
	);

	return steve.reverse();
};
