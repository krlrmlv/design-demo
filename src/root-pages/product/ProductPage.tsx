'use client';

import React, { FC } from 'react';

type Props = { slug: string }

const ProductPage: FC<Props> = ({ slug }) => {
	return (
		<div>
			детальная страница товара {slug}
		</div>
	);
};

export default ProductPage;