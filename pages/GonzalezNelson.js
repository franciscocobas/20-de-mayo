import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import GonzalezNelson from '../public/images/Gonzalez Nelson.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const GonzalezNelsonPage = () => (
  <>
    <Head>
      <title>Gonzalez Nelson | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Gonzalez Nelson | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={GonzalezNelson} alt="Foto de Gonzalez Nelson" />
      <div className={styles.downloadContainer}>
        <a href={GonzalezNelson.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/GONZ%C3%81LEZ%20FERN%C3%81NDEZ%2C%20Nelson%20Wilfredo%20accesible_0.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default GonzalezNelsonPage;
