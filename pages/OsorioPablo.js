import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import OsorioPablo from '../public/images/Osorio Pablo.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const OsorioPabloPage = () => (
  <>
    <Head>
      <title>Osorio Pablo | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Osorio Pablo | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={OsorioPablo} alt="Foto de Osorio Pablo" />
      <div className={styles.downloadContainer}>
        <a href={OsorioPablo.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="http://www.desaparecidos.org/arg/victimas/osoriop/" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default OsorioPabloPage;
