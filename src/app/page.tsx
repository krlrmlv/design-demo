import HomePage from '@/root-pages/home/HomePage';

export default async function Home() {
	await new Promise((res) => setTimeout(res, 2000));
	return <HomePage />;
}
