/**
 * Buffer juga bisa dilakukan untuk melakukan encoding dari suatu encoding ke encoding lainnya
 * Ada banyak encoding yang di dukung oleh Buffer, misal utf8,hex,ascii,base64, base64url dan lain lain
 * 
 */

const buffer = Buffer.from("Asep Riki By Titip Informatika","utf8");

// hasil dari utf8
console.info(buffer.toString("utf8"));


// hasil conversi ke base64
console.info(buffer.toString("base64url"));

const buffer2 = Buffer.from("QXNlcCBSaWtpIEJ5IFRpdGlwIEluZm9ybWF0aWth","base64url");
console.info(buffer2.toString("utf8"))


