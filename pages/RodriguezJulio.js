import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import RodriguezJulio from '../public/images/Rodriguez Julio.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const RodriguezJulioPage = () => (
  <>
    <Head>
      <title>Rodriguez Julio</title>
      <meta name="description" content="Foto y Rodriguez Julio"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={RodriguezJulio} alt="Foto de Rodriguez Julio" />
      <div className={styles.downloadContainer}>
        <a href={RodriguezJulio.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/RODR%C3%8DGUEZ%20RODR%C3%8DGUEZ%2C%20Julio%20Oscar%20C%C3%A9sar.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default RodriguezJulioPage;
