const fs = require('fs');
const path = require('path');


const getData = (pathname) => {
    return fs.readFileSync(path.resolve(__dirname, pathname), 'utf8');
}

const writeData = (pathname,data) => {
  fs.writeFile(path.resolve(__dirname, pathname), data, (err) => {
    if (err) {
      throw err;
    }else{
      console.log("Saved Data");
    }
    
  }); 
}

const appendData = (pathname,data) => {
  fs.appendFile(path.resolve(__dirname, pathname), data, function (err) {
    if (err) throw err;
    console.log('appended successfully');
  }); 
}


exports.appendDataAtlast = (pathname,data) => {
  appendData(pathname,data);
}

exports.writeFileData = (pathname,data) => {
  writeData(pathname,data);
}

exports.getFileData = (pathname) => {
  getData(pathname);
}

exports.numberOfAllChar = (pathname) => {
  let str = getData(pathname)
  return str.length; 
}

exports.charWithoutSpace = (pathname) => {
    let str = getData(pathname)
    let space=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)===' '){
          space+=1;
        }
    }
    return str.length-space; 
}

exports.firstChar = (pathname) => {
    let str = getData(pathname)
    return str.charAt(0)
}

exports.lastChar = (pathname) => {
    let str = getData(pathname)
    return str.charAt(str.length);
}

exports.firstWord = (pathname) => {
    let str = getData(pathname)
    let res = "";
    if(str.charCodeAt(0)===13||str.charCodeAt(0)===20)
    return str.charAt(0);

    for(let i=0;i<str.length;i++){
      if(str.charCodeAt(i)===13||str.charCodeAt(i)===20)
      break;
      res+=str.charAt(i);
    }

    return res;
}

exports.lastWord = (pathname) => {
    let str = getData(pathname)
    let allLines = str.split(/\n/);
    let lastWord = allLines[allLines.length-1].split(" ")
    return lastWord[lastWord.length-1];
}

exports.linesCount = (pathname) => {
    let str = getData(pathname)
    let allLines = str.split(/\n/);
    return allLines.length;
}

exports.wordsCount = (pathname) => {
  let str = getData(pathname)

  str = str.replace(/(^\s*)|(\s*$)/gi,"");
      
  str = str.replace(/[ ]{2,}/gi," ");
      
  str = str.replace(/\n /,"\n");
  return str.split(' ').length
}

exports.isPresent = (pathname,value) => {
  if(typeof value === 'undefined'){
      throw "ERROR: String value parameter undefined";
  }
  let str = getData(pathname)
  return str.includes(value);
}


exports.placeCharater = (pathname,value) => {
  if(typeof value === 'undefined'){
      throw "ERROR: String index parameter undefined";
  }
  let str = getData(pathname)
  return str.charAt(value);
}


exports.replaceWord = (pathname,value,replaceWith) => {
  if(typeof value === 'undefined'|| typeof replaceWith === 'undefined'){
      throw "ERROR: parameter undefined";
  }

  let str = getData(pathname)
  let allLines = str.split(/\n/);
  let newStr=allLines[0].replace(value,replaceWith);
  for(let i=1;i<allLines.length;i++){
    newStr=newStr+"\n"+allLines[i];
  }
  writeData(pathname,newStr);
}

// exports.replaceAllWord = (pathname,value,replaceWith) => {
//   if(typeof value === 'undefined'|| typeof replaceWith === 'undefined'){
//       throw "ERROR: parameter undefined";
//   }
//   let str = getData(pathname)
//   let allLines = str.split(/\n/);
//   let newStr=allLines[0].replaceAll(value,replaceWith); replaceAll doesnt Work with LTS version of node
//   for(let i=1;i<allLines.length;i++){
//     newStr=newStr+"\n"+allLines[i];
//   }
//   console.log(newStr);
// }




