const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const cooldowns = new Discord.Collection();
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
console.log(`Zalogowano jako ${client.user.tag}!`);

});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('Komenda niedostępna w prywatnej wiadomości!');
    }
    if (command.args && !args.length) {
        return message.channel.send(`Nie wprowadzono argumentów, ${message.author}!`);
    }
    if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
    const data = [];
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            message.delete()
            return message.author.send(`Zaczekaj ${timeLeft.toFixed(1)} sekund.`)
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('wystąpił błąd podczas wykonywania komendy!');
	}


});



client.login(config.token);