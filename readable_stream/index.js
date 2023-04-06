const fs = require("fs");
const path = require("path");

const file_location = path.resolve(__dirname, "article.txt");

const readableStream = fs.createReadStream(file_location, {
  highWaterMark: 10,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {}
});

readableStream.on("end", () => {
  console.log("Done");
});
