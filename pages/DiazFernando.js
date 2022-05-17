import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import DiazFernando from '../public/images/Diaz Fernando.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const DiazFernandoPage = () => (
  <>
    <Head>
      <title>Diaz Fernando | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Diaz Fernando | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={DiazFernando} alt="Foto de Diaz Fernando" />
      <div className={styles.downloadContainer}>
        <a href={DiazFernando.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/D%C3%8DAZ%20de%20C%C3%81RDENAS%20Fernando%20Rafael%20Santiago%20Ficha%202018%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default DiazFernandoPage;
