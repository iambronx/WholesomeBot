// require the discord.js module
const Discord = require('discord.js');

// require the config file
const { prefix, token } = require('./config.json');

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
client.login(token);

client.on('message', message => {
	if (message.content === `${prefix}test`) {
		message.channel.send('This is a test message. Please refrain from spamming this command as it is completely useless.');
	}
	else if (message.content === `${prefix}nut`) {
		message.channel.send('N U T');
	}
});
