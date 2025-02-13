import { FC } from 'react';
import Link from 'next/link';
import { SearchParams } from 'nuqs';

import { loadSearchParams } from './searchParams';
import { TestModal } from './TestModal';

type Props = {
	searchParams: Promise<SearchParams>;
};

const AboutPage: FC<Props> = async ({ searchParams }) => {
	const { modal } = await loadSearchParams(searchParams);

	return (
		<div>
			About Page
			{modal === 'test-1' && (
				<>
					<div>opened modal test-1 on server</div>
					<Link href={'/community'}>close modal test-1</Link>
				</>
			)}
			{modal === 'test-2' && (
				<>
					<div>opened modal test-2 on server</div>
					<Link href={'/community'}>close modal test-2</Link>
				</>
			)}
			<TestModal />
		</div>
	);
};

export default AboutPage;
