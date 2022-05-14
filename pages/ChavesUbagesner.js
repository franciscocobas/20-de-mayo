import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import ChavesUbagesner from '../public/images/Chaves Ubagesner.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const ChavesUbagesnerPage = () => {
  const [imageSrc] = React.useState(ChavesUbagesner.src);

  return (
    <>
      <Head>
        <title>Chaves Ubagesner</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={ChavesUbagesner} alt="Foto de Chaves Ubagesner" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default ChavesUbagesnerPage;
