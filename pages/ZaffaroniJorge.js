import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import ZaffaroniJorge from '../public/images/Zaffaroni Jorge.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const ZaffaroniJorgePage = () => (
  <>
    <Head>
      <title>Zaffaroni Jorge</title>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={ZaffaroniJorge} alt="Foto de Zaffaroni Jorge" />
      <div className={styles.downloadContainer}>
        <a href={ZaffaroniJorge.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
      </div>
    </main>
  </>
);

export default ZaffaroniJorgePage;
