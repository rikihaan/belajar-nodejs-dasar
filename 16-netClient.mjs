import net from 'net';
import process from 'process';



	const connection = net.createConnection({
		port: 3000,
		host: 'localhost'
	});
connection.on("error", function (error) {
	if (error.code === 'ECONNREFUSED') {
		console.info(`terjadi error ${error.errno}`);
	} 
	})

	setInterval(function(){
		const argh = process.argv[2];
		connection.write(argh)
	},2000)

connection.on("data", function (result) {
		console.info(`resive from server ${result}`)
	})

	
