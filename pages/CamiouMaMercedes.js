import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import CamiouMaMercedes from '../public/images/Camiou Ma Mercedes.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const CamiouMaMercedesPage = () => {
  const [imageSrc] = React.useState(CamiouMaMercedes.src);

  return (
    <>
      <Head>
        <title>Camiou Ma Mercedes</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={CamiouMaMercedes} alt="Foto de Camiou Ma Mercedes" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default CamiouMaMercedesPage;
