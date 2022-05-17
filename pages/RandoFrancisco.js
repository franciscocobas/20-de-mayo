import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import RandoFrancisco from '../public/images/Rando Francisco.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const RandoFranciscoPage = () => (
  <>
    <Head>
      <title>Rando Francisco | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Rando Francisco | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={RandoFrancisco} alt="Foto de Rando Francisco" />
      <div className={styles.downloadContainer}>
        <a href={RandoFrancisco.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://sitiosdememoria.uy/sites/default/files/2019-12/RANDO%20FERREIRA%2C%20Francisco%20Ficha%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default RandoFranciscoPage;
