const fs = require('fs');
const slugify = require('slugify');
const dataBio = require('./datos_personas.js');

function createPageString(imageFilenameComplete, cammelCaseName, onlyNameWithSpaces) {
  return `import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import BackArrow from '../public/images/icons/back_arrow.svg';
import BackArrowWithText from '../public/images/icons/back_arrow_and_text.svg';
import DownloadIcon from '../public/images/icons/download.svg';
import BioData from '../public/images/icons/person_data_btn.svg';
import MadresYFamiliaresLogo from '../public/images/icons/logo_madres.svg';

import ${cammelCaseName} from '../public/images/${imageFilenameComplete}';

const ${cammelCaseName}Page = () => (
  <>
    <Head>
      <title>${onlyNameWithSpaces} | 27ᵃ marcha del silencio</title>
      <meta name="description" content="${onlyNameWithSpaces} | Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
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
        <Image layout="fill" placeholder="blur" src={${cammelCaseName}} alt="Foto de ${onlyNameWithSpaces}" />
      </div>
      <div className={styles.downloadContainer}>
        <Link href="/">
          <a className={styles.downloadBtnWithText}><Image src={BackArrowWithText}  alt="Botón de volver atrás" /></a>
        </Link>
        <a href={${cammelCaseName}.src} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        <a href="${dataBio[imageFilenameComplete]}" target="_blank" rel="noopener noreferrer"><Image src={BioData} alt="Botón de ir a la página con más detalles" /></a>
      </div>
    </main>
  </>
);

export default ${cammelCaseName}Page;
`;
}



(async () => {
  try {
    const images = await fs.promises.readdir('./public/images/');
    // Loop through all images
    for (imageFilenameComplete of images) {
      // Do not do anythig for files that are not images
      if (!String(imageFilenameComplete).includes('.jpeg')) continue;

      // Remove dashes
      const onlyNameWithSpaces = imageFilenameComplete.slice(0, imageFilenameComplete.length - 5);

      // Remove extension
      const cammelCaseName = slugify(onlyNameWithSpaces.replace(/ /g, ''));

      // Create Page
      fs.writeFile(`./pages/${cammelCaseName}.js`, createPageString(imageFilenameComplete, cammelCaseName, onlyNameWithSpaces), (err) => {
        if (err) throw err;
      });
    }
    
    const imagesLowQuality = await fs.promises.readdir('./public/images/baja/');

    let importStatementForAllImages = ``;
    let arrayOfAllImages = `const images = [`;

    for (imageLowQualityFileName of imagesLowQuality) {

      // Do not do anythig for files that are not images
      if (!String(imageLowQualityFileName).includes('.jpeg')) continue;


      const realName = imageLowQualityFileName.slice(0, imageLowQualityFileName.length - 10);

      const imageName = realName.replace(/ /g, '');

      // 
      importStatementForAllImages += `import ${imageName} from '../public/images/baja/${imageLowQualityFileName}';
`;
      arrayOfAllImages += `<Link key="${realName}" href="${imageName}"><Image placeholder="blur" src={${imageName}} alt="Imagen de ${realName}" /></Link>, `;
    }

    importStatementForAllImages += `

${arrayOfAllImages}];
`

    fs.writeFile('./allFiles', importStatementForAllImages, (err) => {
      if (err) throw err;
    });
  } catch(error) {
    console.log(error);
  }
})();
