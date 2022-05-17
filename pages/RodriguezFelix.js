import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import RodriguezFelix from '../public/images/Rodriguez Felix.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const RodriguezFelixPage = () => (
  <>
    <Head>
      <title>Rodriguez Felix | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Rodriguez Felix | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <div className={styles.mainImageContainer}>
        <Image layout="fill" placeholder="blur" src={RodriguezFelix} alt="Foto de Rodriguez Felix" />
      </div>
      <div className={styles.downloadContainer}>
        <a href={RodriguezFelix.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/RODR%C3%8DGUEZ%20LIBERTO%2C%20F%C3%A9lix%20Antonio%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default RodriguezFelixPage;
