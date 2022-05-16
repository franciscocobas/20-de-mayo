import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import EpelbaumClaudio from '../public/images/Epelbaum Claudio.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const EpelbaumClaudioPage = () => (
  <>
    <Head>
      <title>Epelbaum Claudio</title>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={EpelbaumClaudio} alt="Foto de Epelbaum Claudio" />
      <div className={styles.downloadContainer}>
        <a href={EpelbaumClaudio.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
      </div>
    </main>
  </>
);

export default EpelbaumClaudioPage;
