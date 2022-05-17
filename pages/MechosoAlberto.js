import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import MechosoAlberto from '../public/images/Mechoso Alberto.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const MechosoAlbertoPage = () => (
  <>
    <Head>
      <title>Mechoso Alberto | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Mechoso Alberto | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={MechosoAlberto} alt="Foto de Mechoso Alberto" />
      <div className={styles.downloadContainer}>
        <a href={MechosoAlberto.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://sitiosdememoria.uy/sites/default/files/2020-02/MECHOSO%20M%C3%89NDEZ%2C%20Alberto%20Cecilio%20Ficha%20accesible_0%281%29.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default MechosoAlbertoPage;
