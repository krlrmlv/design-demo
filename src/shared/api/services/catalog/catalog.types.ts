export interface ICatalogProductsOpts {
	page: number;
}

export interface ICatalogProducts {
	products: ICatalogProduct[];
	total: number;
	skip: number;
	limit: number;
}

export interface ICatalogProduct {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}
