export const useAddToFavoritesState = () => {
	const handleAddToFavorites = () => {
		console.log('add to favorites');
	};
	
	return ({
		handleAddToFavorites
	});
};