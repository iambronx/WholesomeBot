// require the discord.js module
const Discord = require('discord.js');

// create a new Discord
const client = new Discord.Client();

// when the client is ready, run this code
// this event will trigger whenever your bot:
// - finishes logging in
// - reconnects after disconnecting
client.on('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login('NDY3Nzg5NzI0MDk0ODI0NDU4.DivupQ.M6ctpZAGJZFNiZLJNRizZUyau0w');

client.on('message', message => {
	if (message.content === '!test') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('This is a test message. Please refrain from spamming this command as it is completely useless.');
	}
});
