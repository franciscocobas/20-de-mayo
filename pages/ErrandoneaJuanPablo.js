import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import ErrandoneaJuanPablo from '../public/images/Errandonea Juan Pablo.jpeg';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';

const ErrandoneaJuanPabloPage = () => (
  <>
    <Head>
      <title>Errandonea Juan Pablo</title>
      <meta name="description" content="Foto y Errandonea Juan Pablo"/>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <Image src={BackArrow} alt="Botón de volver atrás" />
      </Link>
      <h1>IMÁGENES DEL SILENCIO</h1>
    </header>
    <main className={styles.main}>
      <Image placeholder="blur" src={ErrandoneaJuanPablo} alt="Foto de Errandonea Juan Pablo" />
      <div className={styles.downloadContainer}>
        <a href={ErrandoneaJuanPablo.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/ERRANDONEA%20SALVIA%2C%20Juan%20Pablo%20Ficha%202018%20accesible_0.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default ErrandoneaJuanPabloPage;
