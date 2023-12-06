/***
 * Console adalah standart library yang sudah sering kita guanakan
 * Scara global, obeject console bisa kita guanaka tanpa harus melakukan import module, dan console melakukan print text nya ke stdout
 * Namun jika kita mau , kita bisa membuat obeject console tersindiri
 * https://nodejs.org/dist/latest-v16.x/docs/api/console.html
 * 
 */
import { Console } from "console";
import fs from 'fs';

const logfile = fs.createWriteStream("application.log");
const log = new Console({
	stdout: logfile,
	stderr: logfile
})

// percobaan
log.info("Hello Logging With Custum Object console")
log.error("ups Error custum with new Object Console")