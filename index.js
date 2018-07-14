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

	// test command to ensure bot functionality
	if (command === 'test') {
		message.channel.send('This is a test message. Please refrain from spamming this command as it is completely useless.');
	}
	// nut command because why not
	else if (command === 'nut') {
		message.channel.send('N U T');
	}
	// say hi to the bot
	else if (command === 'hi') {
		message.channel.send(`Hi, ${message.author}!`);
	}
	// nice day command to make sure someone has a nice day
	else if (command === 'niceday') {
		const taggedUser = message.mentions.users.first();

		if (!args.length) {
			return message.channel.send(`Have a nice day, ${message.author}!`);
		}
		else if (args.length > 1) {
			return message.reply('that is too many arguments! You are still beautiful though!');
		}
		else if (!message.mentions.users.size) {
			return message.reply('only users are accepted as arguments! Still love you!');
		}
		else {
			return message.channel.send(`Have a nice day, ${taggedUser}!`);
		}
	}
});
