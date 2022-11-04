import Link from 'next/link'

import { HomeLayout } from '../../layouts/HomeLayout'
import { LightLayout } from '../../layouts/LightLayout'

export default function PricingPage() {
	return (
		<>
			<h1>Pricing page</h1>
			<h1 className={'title'}>
				Go to <Link href="/">Home</Link>
			</h1>

			<p className={'description'}>
				Get started by editing <code className={'code'}>pages/pricing/index.jsx</code>
			</p>
		</>
	)
}

PricingPage.getLayout = function getLayout(page) {
	return (
		<HomeLayout title="Pricing - Dcode" description="Pricing page">
			<LightLayout>{page}</LightLayout>
		</HomeLayout>
	)
}
