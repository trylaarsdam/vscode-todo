import * as Amqp from "amqplib";

var channel: import("bluebird") <Amqp.Channel>;

Amqp.connect("amqp://testing:password@trek.thewcl.com:5672").then(function(connection){
    channel = connection.createChannel();
}).catch(console.warn);
//var exchange = connection.declareExchange(exchangeName, 'fanout', {durable: false});

export async function sendMessage(exchangeName: string): Promise<any> {
	//var msg = new Amqp.Message(Buffer.from("Message from VSCode extension"));
	//exchange.send(msg);
    var exchange = (await channel).assertExchange(exchangeName, 'fanout', {durable: false}).then(async function(){
		(await channel).publish(exchangeName, '', Buffer.from("Test message from nodejs"));
	});

	return true;
}

export function configure() {

}