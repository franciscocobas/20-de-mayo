import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import ArocenaMarcos from '../public/images/Arocena Marcos.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const ArocenaMarcosPage = () => (
  <>
    <Head>
      <title>Arocena Marcos | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Arocena Marcos | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={ArocenaMarcos} alt="Foto de Arocena Marcos" />
      <div className={styles.downloadContainer}>
        <a href={ArocenaMarcos.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/AROCENA%20da%20SILVA%20GUIMARAES%2C%20Marcos%20Basilio%20Ficha%202018%20accesible_0.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default ArocenaMarcosPage;
