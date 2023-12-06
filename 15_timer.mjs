/**
 * timer merupakan standart library untuk melakukan secaduling
 * function timer terdapat di global, sehigga kita bisa menggunakannya tnapa perlu melakukan import, namun semua function timer, menggunakan callback
 * Jika kita inggin menggunakan  versi Promise, kita bisa menggunakan mengiimport dari module time/promise
 * https://nodejs.org/dist/latest-v16.x/docs/api/timers.html
 */

setInterval(()=>{
	console.info("Hello");
},3000)

// timer promise
import timers from 'timers/promises';

for await (const value of timers.setInterval(1000, new Date())) {
	console.info(value);
	
}
