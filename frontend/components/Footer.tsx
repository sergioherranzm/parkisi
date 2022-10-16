import Link from 'next/link';

export const Footer = () => {
  return (
    <footer tw="bg-primary-500 text-white">
      <div tw=" text-center container mx-auto px-6 py-4">
        <p tw="inline">&copy; 2022 · Parkisi · </p>
        <p tw="inline hover:underline">
          <Link href={'/contact'}>Contact</Link>
        </p>
      </div>
    </footer>
  );
};
