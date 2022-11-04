import Link from 'next/link'

import { HomeLayout } from '../layouts/HomeLayout'

export default function HomePage() {
	return (
		<HomeLayout title="Home - Dcode" description="Home page">
			<h1>Home page</h1>
			<h1 className={'title'}>
				Go to <Link href="/about">About</Link>
			</h1>
			<h1 className={'title'}>
				Go to <Link href="/contact">Contact</Link>
			</h1>
			<h1 className={'title'}>
				Go to <Link href="/pricing">Pricing</Link>
			</h1>

			<p className={'description'}>
				Get started by editing <code className={'code'}>pages/index.jsx</code>
			</p>
		</HomeLayout>
	)
}
