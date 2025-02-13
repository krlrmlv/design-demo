import React, { FC } from 'react';

import ProductCard from '@/entities/product-card/ProductCard';

import { ICatalogProducts } from '@/shared/api/services/catalog';
import Flex from '@/shared/ui/components/Flex/Flex';

interface Props {
	productsData?: ICatalogProducts;
}

const ProductList: FC<Props> = ({ productsData }) => {
	if (!productsData) {
		return null;
	}

	const { products: productList } = productsData;

	return (
		<Flex style={{ flexWrap: 'wrap', gap: '10px 20px' }}>
			{productList.map((product) => {
				return <ProductCard key={product.id} product={product} />;
			})}
		</Flex>
	);
};

export default ProductList;
