import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import GoniDarioGilberto from '../public/images/Goni Darío Gilberto.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const GoniDarioGilbertoPage = () => (
  <>
    <Head>
      <title>Goni Darío Gilberto | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Goni Darío Gilberto | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={GoniDarioGilberto} alt="Foto de Goni Darío Gilberto" />
      <div className={styles.downloadContainer}>
        <a href={GoniDarioGilberto.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/GO%C3%91I%20MARTINEZ%2C%20Dario%20Gilberto%20ficha%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default GoniDarioGilbertoPage;
