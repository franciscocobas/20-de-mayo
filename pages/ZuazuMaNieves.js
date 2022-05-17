import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import ZuazuMaNieves from '../public/images/Zuazu Ma Nieves.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const ZuazuMaNievesPage = () => (
  <>
    <Head>
      <title>Zuazu Ma Nieves</title>
      <meta name="description" content="Zuazu Ma Nieves | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={ZuazuMaNieves} alt="Foto de Zuazu Ma Nieves" />
      <div className={styles.downloadContainer}>
        <a href={ZuazuMaNieves.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://sitiosdememoria.uy/sites/default/files/2019-12/ZUAZU%20MAIO%2C%20Maria%20Nieves%202019%20Ficha%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default ZuazuMaNievesPage;
