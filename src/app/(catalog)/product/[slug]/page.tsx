import { FC } from 'react';

import ProductPage from '@/root-pages/product/ProductPage';

type Props = { params: Promise<{ slug: string }> };

const ProductDetailPage: FC<Props> = async ({ params }) => {
	const { slug } = await params;
	return <ProductPage slug={slug} />;
};

export default ProductDetailPage;
