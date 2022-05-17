import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import BentancourWalner from '../public/images/Bentancour Walner.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const BentancourWalnerPage = () => (
  <>
    <Head>
      <title>Bentancour Walner</title>
      <meta name="description" content="Foto y Bentancour Walner"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={BentancourWalner} alt="Foto de Bentancour Walner" />
      <div className={styles.downloadContainer}>
        <a href={BentancourWalner.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/BENTANCOUR%20GAR%C3%8DN%2C%20Walner%20Ademir%20Ficha%202018%20Accesible._0.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default BentancourWalnerPage;
