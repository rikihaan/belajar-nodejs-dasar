/***
 * File system merupakan standart library yang bisa digunakan untuk memanipulasi file system
 * Dalam file system, terdapat 3 jenis library
 * Pertama library yang bersipat blocking atau syncronous
 * Kedua library yang bersipat non Blocking atau Asyncronous menggunakan callback
 * Ketika Library yang bersipat non-blocking atau asyncronous tapi menggunakan Promise
 */
import fs from 'fs';
const buffer = fs.readFileSync("5path.mjs");

// membaca isi file
console.info(buffer.toString());

// write ke file
fs.writeFileSync("temp.text", "Hello ini di tulis lewat FileSystem")