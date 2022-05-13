const fs = require('fs');
const path = require('path');

function createPageString(imageFilenameComplete, cammelCaseName, onlyNameWithSpaces) {
  return `
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ${cammelCaseName} from '../public/images/${imageFilenameComplete}';

const ${cammelCaseName}Page = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>${onlyNameWithSpaces}</title>
      </Head>
      <main>
        <Image src={${cammelCaseName}} alt="Foto de ${onlyNameWithSpaces}" />
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
