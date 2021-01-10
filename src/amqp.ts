import * as Amqp from "amqplib";

var exchangeName = "logs";
var connection = Amqp.connect("amqp://testing:password@trek.thewcl.com:5672");
//var exchange = connection.declareExchange(exchangeName, 'fanout', {durable: false});

export function sendMessage() {
	//var msg = new Amqp.Message(Buffer.from("Message from VSCode extension"));
	//exchange.send(msg);
	return true;
}

export function configure() {

}