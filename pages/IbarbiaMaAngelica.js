import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import IbarbiaMaAngelica from '../public/images/Ibarbia Ma Angelica.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const IbarbiaMaAngelicaPage = () => (
  <>
    <Head>
      <title>Ibarbia Ma Angelica</title>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={IbarbiaMaAngelica} alt="Foto de Ibarbia Ma Angelica" />
      <div className={styles.downloadContainer}>
        <a href={IbarbiaMaAngelica.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
      </div>
    </main>
  </>
);

export default IbarbiaMaAngelicaPage;
