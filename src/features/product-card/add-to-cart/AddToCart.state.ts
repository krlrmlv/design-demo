export const useAddToCartState = () => {
	const handleAddToCart = () => {
		console.log('add to cart');
	};
	
	return ({
		handleAddToCart
	});
};