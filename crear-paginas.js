const fs = require('fs');

function createPageString(imageFilenameComplete, cammelCaseName, onlyNameWithSpaces) {
  return `import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

import ${cammelCaseName} from '../public/images/${imageFilenameComplete}';
import BackArrow from '../public/images/back_arrow.svg';
import DownloadIcon from '../public/images/download.svg';

const ${cammelCaseName}Page = () => {
  const [imageSrc] = React.useState(AguirreMaRosa.src);

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
    let importStatementForAllImages = ``;
    let arrayOfAllImages = `const images = [`;
    // Loop through all images
    for (imageFilenameComplete of images) {

      // Do not do anythig for files that are not images
      if (!String(imageFilenameComplete).includes('.jpeg')) continue;

      // Remove dashes
      const onlyNameWithSpaces = imageFilenameComplete.slice(0, imageFilenameComplete.length - 5);

      // Remove extension
      const cammelCaseName = onlyNameWithSpaces.replace(/ /g, '');

      // 
      importStatementForAllImages += `import ${cammelCaseName} from '../public/images/${imageFilenameComplete}';
`;
      arrayOfAllImages += `<Link key="${onlyNameWithSpaces}" href="${cammelCaseName}"><Image src={${cammelCaseName}} alt="Imagen de ${onlyNameWithSpaces}" /></Link>, `
      

      // Create Page
      fs.writeFile(`./pages/${cammelCaseName}.js`, createPageString(imageFilenameComplete, cammelCaseName, onlyNameWithSpaces), (err) => {
        if (err) throw err;
      });
    }
    importStatementForAllImages += `

${arrayOfAllImages}]
`

    fs.writeFile('./allFiles', importStatementForAllImages, (err) => {
      if (err) throw err;
    });
  } catch(error) {
    console.log(error);
  }
})();
