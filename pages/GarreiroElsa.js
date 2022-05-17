import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import GarreiroElsa from '../public/images/Garreiro Elsa.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const GarreiroElsaPage = () => (
  <>
    <Head>
      <title>Garreiro Elsa</title>
      <meta name="description" content="Foto y Garreiro Elsa"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={GarreiroElsa} alt="Foto de Garreiro Elsa" />
      <div className={styles.downloadContainer}>
        <a href={GarreiroElsa.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/GARREIRO%20MART%C3%8DNEZ%2C%20Mar%C3%ADa%20Elsa%20Ficha%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default GarreiroElsaPage;
