import * as Amqp from "amqplib";
import { once } from "process";

var channel: import("bluebird") <Amqp.Channel>;

Amqp.connect("amqp://testing:password@trek.thewcl.com:5672").then(function(connection){
    channel = connection.createChannel();
}).catch(console.warn);
//var exchange = connection.declareExchange(exchangeName, 'fanout', {durable: false});

export async function sendMessage(exchangeName: string, message: string): Promise<any> {
	//var msg = new Amqp.Message(Buffer.from("Message from VSCode extension"));
	//exchange.send(msg);
    var exchange = (await channel).assertExchange(exchangeName, 'fanout', {durable: false}).then(async function(){
		(await channel).publish(exchangeName, '', Buffer.from(message));
	});
	return true;
}

export function amqpConfigure() {
	Amqp.connect("amqp://testing:password@trek.thewcl.com:5672").then(function(connection){
    	channel = connection.createChannel();
	}).catch(console.warn);
	console.log("amqp.ts | connection established");
	return true;
}

export async function amqpDeactivate() {
	(await channel).close();
	console.log("amqp.ts | AMQP channel closed.");
}