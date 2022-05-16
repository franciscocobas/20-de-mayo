import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import HobbasLourdes from '../public/images/Hobbas Lourdes.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const HobbasLourdesPage = () => (
  <>
    <Head>
      <title>Hobbas Lourdes</title>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={HobbasLourdes} alt="Foto de Hobbas Lourdes" />
      <div className={styles.downloadContainer}>
        <a href={HobbasLourdes.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
      </div>
    </main>
  </>
);

export default HobbasLourdesPage;
