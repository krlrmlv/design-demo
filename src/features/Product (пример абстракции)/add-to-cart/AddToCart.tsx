import React from 'react';

import { useAddToCartState } from '@/features/product-card/add-to-cart/AddToCart.state';

import Flex from '@/shared/ui/components/Flex/Flex';

const AddToCart = () => {
	const { handleAddToCart } = useAddToCartState();
	return (
		<Flex onClick={handleAddToCart}>
			ДОБАВИТЬ В КОРЗИНУ
		</Flex>
	);
};

export default AddToCart;