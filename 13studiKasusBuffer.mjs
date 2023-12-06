/***
 * Latihan Studi kasus Materi Buffer
 */
import fs from 'fs/promises';

// membuat buffer dati string
const stringData = "Ini adalah contoh penggunaan buffer di nodejs";

// mengconversi dari string ke buffer
const bufferFromString = Buffer.from(stringData, "utf8");
console.info(bufferFromString);

// mengubah atau mengembalikan buffer ke string
const stringFromBuffer = bufferFromString.toString("ascii");
console.info(`String dari buffer: ${stringFromBuffer}`)

// Mengabungkan Beberapa Buffer menjadi satu
const buffer1 = Buffer.from("Asep");
const buffer2 = Buffer.from("Riki");
const buffer3 = Buffer.from("Hari");
const buffer4 = Buffer.from("Rendi");
const buffer5 = Buffer.from("Suryana");

const combineBuffer = Buffer.concat([buffer1, buffer2, buffer3, buffer4, buffer5]);
console.info(`Hasil Combine dari Beberapa Buffer: ${combineBuffer}`);


// membaca file binner/ buffer dari imaga

fs.readFile('data/image.jpg').
	then((result) => {
		console.info(`size Image adalah : ${result.length}`)
	}).catch((error) => {
		console.info(error);
	})








