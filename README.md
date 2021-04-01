# file-awesome

The file-awesome is a node module built in pure javascript, which offers easy file manilputation with predefined functions and even gives a flexibility to create your own as it simplifies basic CURD operations of fs library with syntatical sugar.

# Getting Started

Install file-awesome using npm

`npm install file-awesome`

Import file-awesome

`const fileAwesome = require('file-awesome");`

# file-awesome methods

All the methods need pathname of the file as parameter in `string` note: you need to come to root directory of your node.js project from file-awesome module by using `../../` followed by continuation of the file path.

eg. for a file named as text.txt in the root directory of you project path will be `../../text.txt`

## Simplified fs library methods

* *Read File* - fileAwesome.getFileData(`string` pathname);
`var response = fileAwesome.getFileData("../../text.txt");`

getFileData reads the file data and returns it in `string` fromat which can be manipulated asccordingly bu the user. 

* *Write File* - fileAwesome.getFileData(`string` pathname,`string` data);
`fileAwesome.writeFileData("../../text.txt","Data that need to be written in the file");`

writeFileData takes pathname in first parameter and data that need to be written in the second.

* *Append File* - fileAwesome.appendDataAtlast(`string` pathname,`string` data);
`fileAwesome.appendDataAtlast("../../text.txt","this data appends at the last in the file");`

appendDataAtlast appends the data at the last of the file.

* *Delete File Data* - fileAwesome.removeFileData(`string` pathname);
`fileAwesome.removeFileData("../../text.txt");`

removeFileData deletes the whole data in the file.

* *Delete File* - fileAwesome.deleteFile(`string` pathname);
`fileAwesome.deleteFile("../../text.txt");`

deleteFile deletes the file in the specified directory.

## File manipulation methods

* *Number of Charaters in a file* - fileAwesome.numberOfAllChar(`string` pathname);
`var response = fileAwesome.numberOfAllChar("../../text.txt");`

numberOfAllChar returns the number of `char` in a file, return type `int`.

* *Number of Charaters in a file without space* - fileAwesome.numberOfAllChar(`string` pathname);
`var response = fileAwesome.charWithoutSpace("../../text.txt");`

charWithoutSpace returns the number of `char` in a file excluding spaces, return type `int`.

* *First Charater* - fileAwesome.firstChar(`string` pathname);
`var response = fileAwesome.firstChar("../../text.txt");`

firstChar returns the first `char` in the specified file.

* *Last Charater* - fileAwesome.lastChar(`string` pathname);
`var response = fileAwesome.lastChar("../../text.txt");`

lastChar returns the last `char` in the specified file.

* *First Word* - fileAwesome.firstWord(`string` pathname);
`var response = fileAwesome.firstWord("../../text.txt");`

firstWord returns the first word in the specified file as `string`.

* *Last Word* - fileAwesome.lastWord(`string` pathname);
`var response = fileAwesome.lastWord("../../text.txt");`

lastWord returns the first word in the specified file as `string`.

* *Count words* - fileAwesome.wordsCount(`string` pathname);
`var response = fileAwesome.wordsCount("../../text.txt");`

wordsCount returns the the number of words persent in the specified file as `int`.

* *Lines words* - fileAwesome.linesCount(`string` pathname);
`var response = fileAwesome.linesCount("../../text.txt");`

linesCount returns the the number of lines persent in the specified file as `int`.


* *Charater on the plaveValue* - fileAwesome.placeCharater(`string` pathname,`int` placeValue);
`var response = fileAwesome.placeCharater("../../text.txt",3);`

placeCharater returns the the `char` present on the specified `int` place in the file.

* *Charater on the plaveValue* - fileAwesome.isPresent(`string` pathname,`string` value);
`var response = fileAwesome.isPresent("../../text.txt","Hello");`

isPresent returns the the `boolean` value to indicate weather the string is present in the file or not.

* *Replace first word occurance* - fileAwesome.replaceWord(`string` pathname,`string` valueTobeReplaced,`string` replacingValue);
`var response = fileAwesome.replaceWord("../../text.txt","Hello","world");`

replaceWord replaces the first word occurance in the file which is specified in the second parameter and replaces it with the third parameter word of the function.