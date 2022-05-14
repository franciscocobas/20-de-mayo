import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import UrtasunJoseLuis from '../public/images/Urtasun Jose Luis.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const UrtasunJoseLuisPage = () => {
  const [imageSrc] = React.useState(UrtasunJoseLuis.src);

  return (
    <>
      <Head>
        <title>Urtasun Jose Luis</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={UrtasunJoseLuis} alt="Foto de Urtasun Jose Luis" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default UrtasunJoseLuisPage;
