const { Client, RichEmbed } = require('discord.js');
module.exports = {
	name: 'server',
    description: 'Informacje o serwerze',
    cooldown: 5,
    guildOnly: true,
	execute(message) {
		const embed = new RichEmbed()
      // Set the title of the field
      .setTitle(`Wszystkich członków na ${message.guild.name}`)
      // Set the color of the embed
      .setColor(0x0099ff)
      // Set the main content of the embed
      .setDescription(`${message.guild.memberCount}`);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
    console.log(`wykonano komendę "server"`);
	},
};