/**
 *Zlib adalah standart library yang digunakan 
 https://nodejs.org/dist/latest-v16.x/docs/api/zlib.html 
 
 */

import zlib from "zlib"
import fs from "fs";

const source = fs.readFileSync("19-Zlib.mjs");
console.info(source.toString())

// comprest data dengan 
const result = zlib.gzipSync(source);
console.info(result);

fs.writeFileSync("zlib.mjs.text", result);

const fileZlib = fs.readFileSync("zlib.mjs.text")
console.info(fileZlib.toString());

// mengembalikan atau Unzlib / Decompresss
const fileCompres = zlib.unzipSync(fileZlib);
console.info(fileCompres.toString())