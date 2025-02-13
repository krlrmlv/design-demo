import React, { FC } from 'react';

import AddToCart from '@/features/product-card/add-to-cart/AddToCart';

import styles from './ProductCard.module.scss';

import { ICatalogProduct } from '@/shared/api/services/catalog';

interface Props {
	product: ICatalogProduct;
}

const ProductCard: FC<Props> = ({ product }) => {
	return (
		<div
			className={styles.root}
		>
			<span>{product.title}</span>
			<AddToCart />
		</div>
	);
};

export default ProductCard;