import Link from 'next/link';
import { HomeLayout } from '../layouts/HomeLayout';
import { LightLayout } from '../layouts/LightLayout';

export default function AboutPage() {
  return (
    <>
      <h1>About page</h1>
      <h1 className={'title'}>
        Go to <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/about.jsx</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <HomeLayout title="About - Dcode" description="About page">
      <LightLayout>{page}</LightLayout>
    </HomeLayout>
  );
};
