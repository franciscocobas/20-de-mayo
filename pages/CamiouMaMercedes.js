import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import CamiouMaMercedes from '../public/images/Camiou Ma Mercedes.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const CamiouMaMercedesPage = () => (
  <>
    <Head>
      <title>Camiou Ma Mercedes</title>
      <meta name="description" content="Foto y Camiou Ma Mercedes"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={CamiouMaMercedes} alt="Foto de Camiou Ma Mercedes" />
      <div className={styles.downloadContainer}>
        <a href={CamiouMaMercedes.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/CAMIOU%20MINOLI%2C%20Mar%C3%ADa%20Mercedes%20Ficha%202018%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default CamiouMaMercedesPage;
