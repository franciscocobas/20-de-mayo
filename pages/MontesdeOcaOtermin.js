import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import MontesdeOcaOtermin from '../public/images/Montes de Oca Otermin.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const MontesdeOcaOterminPage = () => (
  <>
    <Head>
      <title>Montes de Oca Otermin</title>
      <meta name="description" content="Montes de Oca Otermin | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={MontesdeOcaOtermin} alt="Foto de Montes de Oca Otermin" />
      <div className={styles.downloadContainer}>
        <a href={MontesdeOcaOtermin.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://sitiosdememoria.uy/sites/default/files/2019-11/MONTES%20DE%20OCA%20DOMENECH%2C%20Oterm%C3%ADn%20Laureano%20Ficha%20accesible_0.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default MontesdeOcaOterminPage;
