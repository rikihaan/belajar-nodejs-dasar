/***
 * NET Merupakan standart library yang bisa digunakanan  untunk membuat network	 cliend dan server
 * Berbasis TCP
 * Net server dan client merupakan object steream, sehingga kita bisa baca datanya, tulis datanya dan menambahkan lisener
 * https://nodejs.org/dist/latest-v16.x/docs/api/net.html
 */

// membuat server
import net from "net";

const server = net.createServer(function (client) {
	console.info('client connected');
	client.addListener("data", function (data) {
		console.info(`Resive data from client ${data.toString()}`)
		client.write(`Hello ${data.toString()}\r\n`)
	})
})
server.addListener("error", function (err) {
	console.info(err)
	server.close()
})

server.listen(3000, 'localhost');