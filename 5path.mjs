import path from "path";

console.info(path.sep)///path separator
const file = "/data/index.html";
console.info(path.dirname(file))
console.info(path.basename(file))
console.info(path.extname(file))
console.info(path.parse(file))