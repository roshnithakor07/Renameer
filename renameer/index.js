"use strict";

const fs = require("fs");
const path = require("path");

let path_of_directory = __dirname + path.join("/folder_name/");

// files inside folder or directory
let files = fs.readdirSync(path_of_directory);

files.forEach((e, index) => {
  fs.renameSync(
    path_of_directory + e,
    path_of_directory + `read- ${index + 1}.py`
    );
  
});
