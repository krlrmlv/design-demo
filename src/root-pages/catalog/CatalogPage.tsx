'use client';

import React from 'react';

import ProductList from '@/widgets/catalog/ProductList/ProductList';

import { useGetCatalogProducts } from '@/shared/api/services/catalog';
import Icon from '@/shared/ui/components/Icon/Icon';

const CatalogPage = () => {
	const { data } = useGetCatalogProducts({ page: 1 });
	return (
		<div>
			<Icon icon={'Warning/Circle_Check'} color={'alert01'} />
			<Icon icon={'Warning/Octagon_Warning'} color={'success01'} />
			<Icon icon={'Warning/Help'} color={'error04'} colorType={'stroke'} />
			<Icon icon={'Warning/Wavy_Check'} />
			<ProductList productsData={data?.data} />
		</div>
	);
};

export default CatalogPage;