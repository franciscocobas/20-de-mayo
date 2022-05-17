import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import HernandezHobbasBeatriz from '../public/images/Hernandez Hobbas Beatriz.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const HernandezHobbasBeatrizPage = () => (
  <>
    <Head>
      <title>Hernandez Hobbas Beatriz</title>
      <meta name="description" content="Foto y Hernandez Hobbas Beatriz"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={HernandezHobbasBeatriz} alt="Foto de Hernandez Hobbas Beatriz" />
      <div className={styles.downloadContainer}>
        <a href={HernandezHobbasBeatriz.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/HERNANDEZ%20HOBBAS%2C%20Beatriz%20Lourdes%20Ficha%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default HernandezHobbasBeatrizPage;
