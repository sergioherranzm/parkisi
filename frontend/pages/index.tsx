import Head from 'next/head';
import { SignupForm } from '../components/SignupForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Parkisi</title>
      </Head>
      <SignupForm />
    </>
  );
}
