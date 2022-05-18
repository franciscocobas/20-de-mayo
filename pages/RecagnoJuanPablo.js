import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import BackArrow from '../public/images/icons/back_arrow.svg';
import BackArrowWithText from '../public/images/icons/back_arrow_and_text.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';
import MadresYFamiliaresLogo from '../public/images/icons/logo_madres.svg';

import RecagnoJuanPablo from '../public/images/Recagno Juan Pablo.jpeg';

const RecagnoJuanPabloPage = () => (
  <>
    <Head>
      <title>Recagno Juan Pablo | 27ᵃ marcha del silencio</title>
      <meta name="description" content="Recagno Juan Pablo | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
    </Head>
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <a className={styles.downloadBtnWithoutText}><Image src={BackArrow} alt="Botón de volver atrás" /></a>
        </Link>
        <Link href="/">
          <a><h1>IMÁGENES DEL SILENCIO</h1></a>
        </Link>
        <div className={styles.socialNetworks}>
          <a href="https://twitter.com/img_delsilencio" target="_blank" rel="noreferrer noopener">TWITTER</a>
          <a href="https://www.instagram.com/imagenes.del.silencio" target="_blank" rel="noreferrer noopener">INSTAGRAM</a>
          <a href="https://www.facebook.com/imagenesdelsilencio/" target="_blank" rel="noreferrer noopener">FACEBOOK</a>
        </div>
        <div className={styles.logoMadresYFamiliares}>
          <Image src={MadresYFamiliaresLogo} alt="Logo de Madres y Familiares de Detenidos desaparecidos"/>
        </div>
      </div>
    </header>
    <main className={styles.main}>
      <div className={styles.mainImageContainer}>
        <Image layout="fill" placeholder="blur" src={RecagnoJuanPablo} alt="Foto de Recagno Juan Pablo" />
      </div>
      <div className={styles.downloadContainer}>
        <Link href="/">
          <a className={styles.downloadBtnWithText}><Image src={BackArrowWithText}  alt="Botón de volver atrás" /></a>
        </Link>
        <a href={RecagnoJuanPablo.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/sites/secretaria-derechos-humanos-pasado-reciente/files/documentos/publicaciones/RECAGNO%20IBARBURU%2C%20Juan%20Pablo%20Ficha%20accesible_0.pdf" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default RecagnoJuanPabloPage;
