import Link from 'next/link';
import { HomeLayout } from '../../layouts/HomeLayout';

export default function ContactPage() {
  return (
    <HomeLayout title="Contact - Dcode" description="Contact page">
      <h1>Contact Page</h1>

      <h1 className={'title'}>
        Go to <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/contact/index.jsx</code>
      </p>
    </HomeLayout>
  );
}
