const fs = require("fs");
const path = require("path");
const file_location = path.resolve(__dirname, "notes.txt");

//asychronous
const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }

  console.log(data);
};

fs.readFile(file_location, "UTF-8", fileReadCallback);

//sychronous
const data = fs.readFileSync(file_location, "UTF-8");
console.log(data);
