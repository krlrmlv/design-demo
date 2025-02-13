'use client';

import { ErrorPage } from '@/root-pages/error/Errors';

export default function GlobalError({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	console.log(error);
	return <ErrorPage error={error} reset={reset} />;
}
