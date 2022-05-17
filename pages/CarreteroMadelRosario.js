import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import CarreteroMadelRosario from '../public/images/Carretero Ma del Rosario.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const CarreteroMadelRosarioPage = () => (
  <>
    <Head>
      <title>Carretero Ma del Rosario</title>
      <meta name="description" content="Foto y Carretero Ma del Rosario"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={CarreteroMadelRosario} alt="Foto de Carretero Ma del Rosario" />
      <div className={styles.downloadContainer}>
        <a href={CarreteroMadelRosario.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/CARRETERO%20CARDENAS%2C%20Casimira%20Maria%20del%20Rosario%20Ficha%202018%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default CarreteroMadelRosarioPage;
