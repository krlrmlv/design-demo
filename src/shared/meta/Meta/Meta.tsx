import type { FC } from 'react';
import Parser from 'html-react-parser';
import Head from 'next/head';

import metaData from '@/shared/meta/meta-data.json';
import { IMetaData } from '@/shared/types/meta.types';

const faviconHtml: string = metaData && metaData.favicon.html_code;

const DEFAULT_META = {
	title: '',
	description: '',
	image: '',
	keywords: ''
};

interface MetaProps {
	meta?: IMetaData;
}

const Meta: FC<MetaProps> = ({ meta }) => {
	const { title, description, keywords } = meta ?? DEFAULT_META;
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
			<meta httpEquiv='X-DNS-Prefetch-Control' content='on' />
			<meta httpEquiv='cleartype' content='on' />
			<meta name='keywords' lang='ru' content={keywords ?? DEFAULT_META.keywords} />
			{Parser(faviconHtml)}
			<title>{title ?? DEFAULT_META.title}</title>
			<meta name='description' content={description ?? DEFAULT_META.description} />
		</Head>
	);
};

export default Meta;
