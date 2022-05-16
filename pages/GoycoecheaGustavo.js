import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import GoycoecheaGustavo from '../public/images/Goycoechea Gustavo.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const GoycoecheaGustavoPage = () => {
  const [imageSrc] = React.useState(GoycoecheaGustavo.src);

  return (
    <>
      <Head>
        <title>Goycoechea Gustavo</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={GoycoecheaGustavo} alt="Foto de Goycoechea Gustavo" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image placeholder="blur" src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default GoycoecheaGustavoPage;
