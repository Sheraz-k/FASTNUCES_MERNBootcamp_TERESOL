/**
 *  In main file
 *  let script1 = require('./script1');
 *  console.log(script1.sum(1, 2));
 */

var fs = require('fs')

fs.readdir('/folder/with/files', (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach(file => {
    fs.readFile(file, 'utf8', function (err,result) {
      if (err) {
          return console.log(err);
      }
      result = //logic;

      fs.writeFile('/new/file/path',result,'utf8', function (err) {
        if (err) {
          return console.log(err);
        }
      });
  });
});
