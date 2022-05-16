import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import ChegenianSegundo from '../public/images/Chegenian Segundo.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const ChegenianSegundoPage = () => (
  <>
    <Head>
      <title>Chegenian Segundo</title>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={ChegenianSegundo} alt="Foto de Chegenian Segundo" />
      <div className={styles.downloadContainer}>
        <a href={ChegenianSegundo.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
      </div>
    </main>
  </>
);

export default ChegenianSegundoPage;
