import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import SobaAdalberto from '../public/images/Soba Adalberto.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const SobaAdalbertoPage = () => (
  <>
    <Head>
      <title>Soba Adalberto | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Soba Adalberto | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={SobaAdalberto} alt="Foto de Soba Adalberto" />
      <div className={styles.downloadContainer}>
        <a href={SobaAdalberto.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/SOBA%20FERN%C3%81NDEZ%2C%20Adalberto%20Waldemar%20Ficha%20accesible_para%20web.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default SobaAdalbertoPage;
