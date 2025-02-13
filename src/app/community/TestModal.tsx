'use client';

import { useQueryState } from 'nuqs';

import { Button } from '@/shared/ui/components/Button';

export const TestModal = () => {
	const [, setModal] = useQueryState('modal', {
		history: 'push',
		defaultValue: '',
		shallow: false
	});

	return (
		<>
			<Button onClick={() => setModal('test-1')}>Open modal test 1</Button>
			<Button onClick={() => setModal('test-2')}>Open modal test 2</Button>
		</>
	);
};
