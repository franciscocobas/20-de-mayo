import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import DelFabroEduardo from '../public/images/Del Fabro Eduardo.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const DelFabroEduardoPage = () => (
  <>
    <Head>
      <title>Del Fabro Eduardo | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Del Fabro Eduardo | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={DelFabroEduardo} alt="Foto de Del Fabro Eduardo" />
      <div className={styles.downloadContainer}>
        <a href={DelFabroEduardo.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/DEL%20FABRO%20de%20BERNARDI%2C%20Eduardo%20Jos%C3%A9%20Mar%C3%ADa%20Ficha%202018%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default DelFabroEduardoPage;
