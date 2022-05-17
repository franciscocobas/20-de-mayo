import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import PaittaAntonioOmar from '../public/images/Paitta Antonio Omar.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const PaittaAntonioOmarPage = () => (
  <>
    <Head>
      <title>Paitta Antonio Omar</title>
      <meta name="description" content="Foto y Paitta Antonio Omar"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={PaittaAntonioOmar} alt="Foto de Paitta Antonio Omar" />
      <div className={styles.downloadContainer}>
        <a href={PaittaAntonioOmar.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/PAITTA%20CARDOZO%2C%20Antonio%20Omar%20Ficha%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default PaittaAntonioOmarPage;
