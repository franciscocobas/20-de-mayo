import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import CendanJuanAngel from '../public/images/Cendan Juan Angel.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const CendanJuanAngelPage = () => (
  <>
    <Head>
      <title>Cendan Juan Angel</title>
      <meta name="description" content="Foto y Cendan Juan Angel"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={CendanJuanAngel} alt="Foto de Cendan Juan Angel" />
      <div className={styles.downloadContainer}>
        <a href={CendanJuanAngel.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/CEND%C3%81N%20ALMADA%2C%20Juan%20%C3%81ngel%20Ficha%202018%20accesible_0.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default CendanJuanAngelPage;
