import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import MartinezJorge from '../public/images/Martinez Jorge.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const MartinezJorgePage = () => (
  <>
    <Head>
      <title>Martinez Jorge</title>
      <meta name="description" content="Foto y Martinez Jorge"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={MartinezJorge} alt="Foto de Martinez Jorge" />
      <div className={styles.downloadContainer}>
        <a href={MartinezJorge.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://sitiosdememoria.uy/sites/default/files/2020-02/MART%c3%8dNEZ%20HORMINOGUEZ,%20Jorge%20Hugo%20Ficha%20accesible.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default MartinezJorgePage;
