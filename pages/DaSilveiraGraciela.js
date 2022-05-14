import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import DaSilveiraGraciela from '../public/images/Da Silveira Graciela.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const DaSilveiraGracielaPage = () => {
  const [imageSrc] = React.useState(DaSilveiraGraciela.src);

  return (
    <>
      <Head>
        <title>Da Silveira Graciela</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={DaSilveiraGraciela} alt="Foto de Da Silveira Graciela" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default DaSilveiraGracielaPage;
