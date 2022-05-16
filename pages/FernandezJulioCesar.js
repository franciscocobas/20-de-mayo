import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import FernandezJulioCesar from '../public/images/Fernandez Julio Cesar.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const FernandezJulioCesarPage = () => {
  const [imageSrc] = React.useState(FernandezJulioCesar.src);

  return (
    <>
      <Head>
        <title>Fernandez Julio Cesar</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={FernandezJulioCesar} alt="Foto de Fernandez Julio Cesar" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image placeholder="blur" src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

export default FernandezJulioCesarPage;
