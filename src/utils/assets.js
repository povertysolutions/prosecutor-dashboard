export default{
  load(filename){
    console.log("getting: " + filename);
    var file;
    try{
      file = require("../assets/" + filename);
      console.log(file);
    }
    catch(e){
      file = "";
      console.log("failed to load: " + filename);
    }
    return file;
  }
}

// import * as fs from 'fs';
//
// var asset = {
//     get(file){
//
//     const fs = require("fs");
//     const data = fs.readFileSync('./input.txt',
//             {encoding:'utf8', flag:'r'});
//
//     // fs.readFileSync("../components", function(error) {
//     //   if (error) {
//     //     console.log("Directory does not exist.")
//     //   } else {
//     //     console.log("Directory exists.")
//     //   }
//     // })
//     //require('../../public/icons/address.svg')
//     // var path = "../../..public/icons/address.svg";
//     // console.log("path: " + path);
//     // try {
//     //   require(path)
//     // }
//     // catch (error) {
//     //   console.error(path + " does not exist!");
//     // }
//   }
// }
//
// export default asset;
