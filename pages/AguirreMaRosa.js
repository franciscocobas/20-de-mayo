
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AguirreMaRosa from '../public/images/Aguirre Ma Rosa.jpeg';

const AguirreMaRosaPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Aguirre Ma Rosa</title>
      </Head>
      <main>
        <Image src={AguirreMaRosa} alt="Foto de Aguirre Ma Rosa" />
      </main>
    </>
  )
}

export default AguirreMaRosaPage;
