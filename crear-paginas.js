const fs = require('fs');
const slugify = require('slugify');

function createPageString(imageFilenameComplete, cammelCaseName, onlyNameWithSpaces) {
  return `import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import ${cammelCaseName} from '../public/images/${imageFilenameComplete}';
import BackArrow from '../public/images/icons/back_arrow.svg';
import DownloadIcon from '../public/images/icons/download.svg';

const ${cammelCaseName}Page = () => {
  const [imageSrc] = React.useState(${cammelCaseName}.src);

  return (
    <>
      <Head>
        <title>${onlyNameWithSpaces}</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image src={BackArrow} alt="Botón de volver atrás" />
        </Link>
        <h1>IMÁGENES DEL SILENCIO</h1>
      </header>
      <main className={styles.main}>
        <Image src={${cammelCaseName}} alt="Foto de ${onlyNameWithSpaces}" />
        <div className={styles.downloadContainer}>
          <a href={imageSrc} download><Image src={DownloadIcon} alt="Icono de descargar la imagen" /></a>
        </div>
      </main>
    </>
  )
}

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
