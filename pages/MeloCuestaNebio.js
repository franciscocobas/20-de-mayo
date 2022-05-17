import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import MeloCuestaNebio from '../public/images/Melo Cuesta Nebio.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const MeloCuestaNebioPage = () => (
  <>
    <Head>
      <title>Melo Cuesta Nebio</title>
      <meta name="description" content="Foto y Melo Cuesta Nebio"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={MeloCuestaNebio} alt="Foto de Melo Cuesta Nebio" />
      <div className={styles.downloadContainer}>
        <a href={MeloCuestaNebio.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/MELO%20CUESTA%2C%20Nebio%20Ariel%20Ficha%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default MeloCuestaNebioPage;
