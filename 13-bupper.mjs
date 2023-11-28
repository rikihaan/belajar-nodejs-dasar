/**
 * Buffer merupakan object yang berisikan urutan byte dengan panjang tetap
 * Buffer merupakan turunnan dari type data Unit8Array
 * https://nodejs.org/dist/latest-v16.x/docs/api/buffer.html
 * 
 * Cara Kerja Buffer
 * Buffer menyimpan data dalam bentuk binner, dimana setiap element didalamnya direpresentasikan oleh satu byte (8byte) element dalam buffer dapat berupa angka 0 sampai 255
 *  
 */

const buffer = Buffer.from("Asep Riki");

// hasil dari buffer
console.info(buffer);

// di kembalikan ke string
console.info(buffer.toString());