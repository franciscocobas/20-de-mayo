import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import MadresYFamiliaresLogo from '../public/images/logo_madres.svg';

import AguirreMaRosa from '../public/images/Aguirre Ma Rosa.jpeg';
import AlfaroDaniel from '../public/images/Alfaro Daniel.jpeg';
import AltarmiranoRicardo from '../public/images/Altarmirano Ricardo.jpeg';
import AltmanBlanca from '../public/images/Altman Blanca.jpeg';

const images = [<Link key="Aguirre Ma Rosa" href="AguirreMaRosa"><Image src={AguirreMaRosa} alt="Imagen de Aguirre Ma Rosa" /></Link>, <Link key="Alfaro Daniel" href="AlfaroDaniel"><Image src={AlfaroDaniel} alt="Imagen de Alfaro Daniel" /></Link>, <Link key="Altarmirano Ricardo" href="AltarmiranoRicardo"><Image src={AltarmiranoRicardo} alt="Imagen de Altarmirano Ricardo" /></Link>, <Link key="Altman Blanca" href="AltmanBlanca"><Image src={AltmanBlanca} alt="Imagen de Altman Blanca" /></Link>, ]

export default function Home() {
  return (
    <>
      <Head>
        <title>27ᵃ Marcha del Silencio</title>
      </Head>
      <header>
        <div className="container">
          <h1>IMÁGENES DEL SILENCIO</h1>
          <Image src={MadresYFamiliaresLogo} alt="Logo de Madres y Familiares de Detenidos desaparecidos"/>
        </div>
      </header>
      <main className="main-homepage">
        {
          images.map((image) => image)
        }
      </main>
    </>
  );
}
