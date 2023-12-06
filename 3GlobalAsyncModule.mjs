/***
 * Saat kita belajar javascript, untuk menggunakan Async Await, biasanya kita perlu membuat terlebih dahulu function yang kita tandai sebagai Async
 * Saat kita menggunakan modele, secara default, global code adalah async, oleh karena itu kita bisa langsung menggunaka await dengan sarat rubah ke javacsript modeule dari .js menjadi mjs
 */


function simplePromise() {
	return Promise.resolve("Asep Riki");
}

const data = await simplePromise();
console.info(data);