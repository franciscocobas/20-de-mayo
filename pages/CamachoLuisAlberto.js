import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import CamachoLuisAlberto from '../public/images/Camacho Luis Alberto.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const CamachoLuisAlbertoPage = () => {
  const [imageSrc] = React.useState(CamachoLuisAlberto.src);

  return (
    <>
      <Head>
        <title>Camacho Luis Alberto</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={CamachoLuisAlberto} alt="Foto de Camacho Luis Alberto" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default CamachoLuisAlbertoPage;
