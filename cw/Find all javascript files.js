// https://www.codewars.com/kata/6532a9996ba625003242272f/

function findAllJavascriptFiles(folder, callback) {
  parser(folder).then(callback);
}

function parser(folder, jsFiles = []) {
  return new Promise(resolve => {
    folder.size(size => {
      const promises = [];

      for (let i = 0; i <= size - 1; i++) {
        promises.push(finder(i, folder, jsFiles));
      }

      Promise
        .all(promises)
        .then(() => resolve(jsFiles));
    });
  });
}

function finder(i, folder, jsFiles) {
  return new Promise(resolve => {
    folder.read(i, file => {
      if (isJsFile(file)) {
        jsFiles.push(file);
        resolve();
      } else if (isFolder(file)) {
        parser(file, jsFiles)
          .then(resolve);
      } else {
        resolve();
      }
    });
  });
}

function isJsFile(fileName) {
  return typeof fileName === 'string' && /\.js/i.test(fileName);
}

function isFolder(file) {
  return !!(file.size && file.read);
}


let obj = {
  size: () => { },
  read: () => { }
}


console.log(isFolder(obj));
