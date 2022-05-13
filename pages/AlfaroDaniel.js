
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AlfaroDaniel from '../public/images/Alfaro Daniel.jpeg';

const AlfaroDanielPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Alfaro Daniel</title>
      </Head>
      <main>
        <Image src={AlfaroDaniel} alt="Foto de Alfaro Daniel" />
      </main>
    </>
  )
}

export default AlfaroDanielPage;
