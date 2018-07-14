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
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'test') {
		message.channel.send('This is a test message. Please refrain from spamming this command as it is completely useless.');
	}
	else if (command === 'nut') {
		message.channel.send('N U T');
	}
	else if (command === 'hi') {
		message.channel.send(`Hi, ${message.author}!`);
	}
	else if (command === 'niceday') {
		if (!args.length) {
			return message.channel.send(`Have a nice day, ${message.author}!`);
		}
		else if (args.length > 1) {
			return message.channel.send('Too many arguments!');
		}
		else if (args[0] === 'help') {
			return message.channel.send('Usage: !niceday INSERT_HOW_NICE_OF_A_DAY_YOU_WANT. One word only.');
		}
		else {
			return message.channel.send(`Have a ${args[0]} nice day, ${message.author}!`);
		}
	}
});
