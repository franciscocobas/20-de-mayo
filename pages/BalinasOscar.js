import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import BalinasOscar from '../public/images/Balinas Oscar.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const BalinasOscarPage = () => (
  <>
    <Head>
      <title>Balinas Oscar | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Balinas Oscar | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={BalinasOscar} alt="Foto de Balinas Oscar" />
      <div className={styles.downloadContainer}>
        <a href={BalinasOscar.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/BALI%C3%91AS%20ARIAS%2C%20%C3%93scar%20Jos%C3%A9%20Ficha%202018%20accesible_0.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default BalinasOscarPage;
