const fs = require("fs");
const path = require("path");
const file_input_location = path.resolve(__dirname, "input.txt");
const file_output_location = path.resolve(__dirname, "output.txt");

const readableStream = fs.createReadStream(file_input_location, {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream(file_output_location);

readableStream.on("readable", () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {}
});

readableStream.on("end", () => {
  console.log("Done");
});
