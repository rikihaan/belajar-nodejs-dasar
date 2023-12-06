import { threadId, parentPort } from "worker_threads";

parentPort.addListener("message", function (message) {
	for (let i = 0; i < message; i++){
		console.info(`threads ID: ${threadId} send message ${i}`);
		// kembalikan ke thread utama
		parentPort.postMessage(i);
	}

	parentPort.close();
})