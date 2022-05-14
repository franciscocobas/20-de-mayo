import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import AguirreMaRosa from '../public/images/Aguirre Ma Rosa.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const AguirreMaRosaPage = () => {
  const [imageSrc] = React.useState(AguirreMaRosa.src);

  return (
    <>
      <Head>
        <title>Aguirre Ma Rosa</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={AguirreMaRosa} alt="Foto de Aguirre Ma Rosa" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default AguirreMaRosaPage;
