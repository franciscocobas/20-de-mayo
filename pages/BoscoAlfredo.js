import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import BoscoAlfredo from '../public/images/Bosco Alfredo.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const BoscoAlfredoPage = () => (
  <>
    <Head>
      <title>Bosco Alfredo | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Bosco Alfredo | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <div className={styles.mainImageContainer}>
        <Image layout="fill" placeholder="blur" src={BoscoAlfredo} alt="Foto de Bosco Alfredo" />
      </div>
      <div className={styles.downloadContainer}>
        <a href={BoscoAlfredo.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/BOSCO%20MU%C3%91OZ%2C%20Alfredo%20Fernando%20Ficha%202018%20accesible_0.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default BoscoAlfredoPage;
