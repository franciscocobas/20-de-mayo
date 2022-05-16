import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import TriasCecilia from '../public/images/Trias Cecilia.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const TriasCeciliaPage = () => {
  const [imageSrc] = React.useState(TriasCecilia.src);

  return (
    <>
      <Head>
        <title>Trias Cecilia</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={TriasCecilia} alt="Foto de Trias Cecilia" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image placeholder="blur" src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default TriasCeciliaPage;
