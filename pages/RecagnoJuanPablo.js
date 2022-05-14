import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import RecagnoJuanPablo from '../public/images/Recagno Juan Pablo.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const RecagnoJuanPabloPage = () => {
  const [imageSrc] = React.useState(RecagnoJuanPablo.src);

  return (
    <>
      <Head>
        <title>Recagno Juan Pablo</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={RecagnoJuanPablo} alt="Foto de Recagno Juan Pablo" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default RecagnoJuanPabloPage;
