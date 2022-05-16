import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import ArtigasMaAsuncion from '../public/images/Artigas Ma Asuncion.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const ArtigasMaAsuncionPage = () => (
  <>
    <Head>
      <title>Artigas Ma Asuncion</title>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={ArtigasMaAsuncion} alt="Foto de Artigas Ma Asuncion" />
      <div className={styles.downloadContainer}>
        <a href={ArtigasMaAsuncion.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
      </div>
    </main>
  </>
);

export default ArtigasMaAsuncionPage;
