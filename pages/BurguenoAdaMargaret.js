import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import BurguenoAdaMargaret from '../public/images/Burgueno Ada Margaret.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const BurguenoAdaMargaretPage = () => {
  const [imageSrc] = React.useState(BurguenoAdaMargaret.src);

  return (
    <>
      <Head>
        <title>Burgueno Ada Margaret</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={BurguenoAdaMargaret} alt="Foto de Burgueno Ada Margaret" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image placeholder="blur" src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default BurguenoAdaMargaretPage;
