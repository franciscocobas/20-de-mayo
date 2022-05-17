import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import ScopiseNorma from '../public/images/Scopise Norma.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const ScopiseNormaPage = () => (
  <>
    <Head>
      <title>Scopise Norma | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Scopise Norma | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={ScopiseNorma} alt="Foto de Scopise Norma" />
      <div className={styles.downloadContainer}>
        <a href={ScopiseNorma.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/SC%C3%93PICE%20RIJO%2C%20Norma%20Mary%20Ficha%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default ScopiseNormaPage;
