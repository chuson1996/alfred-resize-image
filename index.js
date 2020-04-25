const alfy = require('alfy');
const sharp = require('sharp')
const path = require('path');
const [filePaths, newWidth] = alfy.input.split('|');

// console.log(filePaths.split('\n'));

filePaths.split('\t').forEach(filePath => {
  const dirPath = path.dirname(filePath);
  const fileExt = path.extname(filePath)
  const fileName = path.basename(filePath, fileExt);

  const newFileName = `${fileName}_w${newWidth}`;
  const newPath = `${dirPath}/${newFileName}${fileExt}`;

  sharp(filePath)
    .resize(parseInt(newWidth))
    .toFile(newPath, (err, info) => {
      console.log(`err with ${filePath}`, err);
      console.log('info', info);
    });
});
