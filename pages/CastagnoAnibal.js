import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import CastagnoAnibal from '../public/images/Castagno Anibal.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const CastagnoAnibalPage = () => (
  <>
    <Head>
      <title>Castagno Anibal</title>
      <meta name="description" content="Foto y Castagno Anibal"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={CastagnoAnibal} alt="Foto de Castagno Anibal" />
      <div className={styles.downloadContainer}>
        <a href={CastagnoAnibal.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/CASTAGNO%20LUZARDO%2C%20An%C3%ADbal%20Ram%C3%B3n%20Ficha%202018%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default CastagnoAnibalPage;
