/**
 * Stream adalah standart library untuk kontrak aliran data di nodeJs
 * Ada banyak sekali Stram object di nodeJs
 * Stream bisa jadi object yang bisa di baca, atau bisa di tulis,dan stream adalah turunan dari EventEmitter
 * https://nodejs.org/dist/latest-v16.x/docs/api/stream.html
 */
import fs, { read, write } from 'fs'
const writer = fs.createWriteStream("target.log");
writer.write("Asep")
writer.write("Riki")
writer.write("Ganteng");
writer.close();

// membaca file
const reader = fs.createReadStream("target.log");
reader.addListener("data", function (data) {
	console.info(data.toString());
	reader.close();
})



