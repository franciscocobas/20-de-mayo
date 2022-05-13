
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AltmanBlanca from '../public/images/Altman Blanca.jpeg';

const AltmanBlancaPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Altman Blanca</title>
      </Head>
      <main>
        <Image src={AltmanBlanca} alt="Foto de Altman Blanca" />
      </main>
    </>
  )
}

export default AltmanBlancaPage;
