import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import CallabaJosePedro from '../public/images/Callaba Jose Pedro.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const CallabaJosePedroPage = () => (
  <>
    <Head>
      <title>Callaba Jose Pedro</title>
      <meta name="description" content="Foto y Callaba Jose Pedro"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={CallabaJosePedro} alt="Foto de Callaba Jose Pedro" />
      <div className={styles.downloadContainer}>
        <a href={CallabaJosePedro.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/CALLABA%20PIRIZ%2C%20Jos%C3%A9%20Pedro%20Ficha%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default CallabaJosePedroPage;
