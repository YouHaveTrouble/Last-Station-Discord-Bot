const { Client, RichEmbed } = require('discord.js');
module.exports = {
	name: 'bot',
    description: 'Informacje o bocie',
    cooldown: 5,
	execute(message) {
        		const embed = new RichEmbed()
      // Set the title of the field
      .setTitle(`Bot serwera Last Station`)
      // Set the color of the embed
      .setColor(0x0099ff)
      // Set the main content of the embed
      .setDescription(`Chcesz pomóc? Kod źródłowy znajdziesz na:\nhttps://github.com/YouHaveTrouble/Last-Station-Discord-Bot`);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
        console.log(`wykonano komendę "bot"`);
	},
};