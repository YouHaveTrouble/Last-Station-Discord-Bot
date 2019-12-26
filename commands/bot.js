const { Client, RichEmbed } = require('discord.js');
const config = require('../config.json');
module.exports = {
	name: 'bot',
    description: 'Informacje o bocie',
    cooldown: 5,
	execute(message) {
        		const embed = new RichEmbed()
      .setTitle(`Bot serwera Last Station ${config.version}`)
      .setColor(0x0099ff)
      .setDescription(`Wersja: ${config.version}\nAutorzy: YouHaveTrouble\n \nPrefix: ${config.prefix}\n \nChcesz pomóc w rozwoju bota i znasz node.js?\n Kod źródłowy znajdziesz na:\nhttps://github.com/YouHaveTrouble/Last-Station-Discord-Bot`);
    message.channel.send(embed);
        console.log(`${message.author.username} wykonał komendę "bot"`);
	},
};