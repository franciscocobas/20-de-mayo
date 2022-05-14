import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import SosaValdezLujan from '../public/images/Sosa Valdez Lujan.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const SosaValdezLujanPage = () => {
  const [imageSrc] = React.useState(SosaValdezLujan.src);

  return (
    <>
      <Head>
        <title>Sosa Valdez Lujan</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={SosaValdezLujan} alt="Foto de Sosa Valdez Lujan" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default SosaValdezLujanPage;
