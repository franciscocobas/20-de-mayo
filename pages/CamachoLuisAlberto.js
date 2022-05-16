import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import CamachoLuisAlberto from '../public/images/Camacho Luis Alberto.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const CamachoLuisAlbertoPage = () => (
  <>
    <Head>
      <title>Camacho Luis Alberto</title>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={CamachoLuisAlberto} alt="Foto de Camacho Luis Alberto" />
      <div className={styles.downloadContainer}>
        <a href={CamachoLuisAlberto.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
      </div>
    </main>
  </>
);

export default CamachoLuisAlbertoPage;
