import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import HernandezJorge from '../public/images/Hernandez Jorge.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const HernandezJorgePage = () => (
  <>
    <Head>
      <title>Hernandez Jorge</title>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={HernandezJorge} alt="Foto de Hernandez Jorge" />
      <div className={styles.downloadContainer}>
        <a href={HernandezJorge.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
      </div>
    </main>
  </>
);

export default HernandezJorgePage;
