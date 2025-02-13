import React from 'react';

import { useAddToFavoritesState } from '@/features/product-card/add-to-favorites/AddToFavorites.state';

import Flex from '@/shared/ui/components/Flex/Flex';

const AddToFavorites = () => {
	const { handleAddToFavorites } = useAddToFavoritesState();
	return (
		<Flex onClick={handleAddToFavorites}>
			ДОБАВИТЬ В КОРЗИНУ
		</Flex>
	);
};

export default AddToFavorites;