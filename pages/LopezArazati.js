import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import LopezArazati from '../public/images/Lopez Arazati.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const LopezArazatiPage = () => (
  <>
    <Head>
      <title>Lopez Arazati</title>
      <meta name="description" content="Foto y Lopez Arazati"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={LopezArazati} alt="Foto de Lopez Arazati" />
      <div className={styles.downloadContainer}>
        <a href={LopezArazati.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/L%C3%93PEZ%20L%C3%93PEZ%2C%20Arazat%C3%AD%20Ram%C3%B3n%20ficha%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default LopezArazatiPage;
