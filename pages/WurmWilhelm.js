import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import WurmWilhelm from '../public/images/Wurm Wilhelm.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const WurmWilhelmPage = () => (
  <>
    <Head>
      <title>Wurm Wilhelm</title>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={WurmWilhelm} alt="Foto de Wurm Wilhelm" />
      <div className={styles.downloadContainer}>
        <a href={WurmWilhelm.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
      </div>
    </main>
  </>
);

export default WurmWilhelmPage;
