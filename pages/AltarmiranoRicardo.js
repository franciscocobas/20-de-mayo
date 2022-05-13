
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AltarmiranoRicardo from '../public/images/Altarmirano Ricardo.jpeg';

const AltarmiranoRicardoPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Altarmirano Ricardo</title>
      </Head>
      <main>
        <Image src={AltarmiranoRicardo} alt="Foto de Altarmirano Ricardo" />
      </main>
    </>
  )
}

export default AltarmiranoRicardoPage;
