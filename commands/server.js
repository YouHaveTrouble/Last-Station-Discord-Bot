const { Client, RichEmbed } = require('discord.js');
module.exports = {
	name: 'server',
    description: 'Informacje o serwerze',
    cooldown: 5,
    guildOnly: true,
	execute(message) {
		const embed = new RichEmbed()
      .setTitle(`Wszystkich członków na ${message.guild.name}`)
      .setColor(0x0099ff)
      .setDescription(`${message.guild.memberCount}`);
    message.channel.send(embed);
    console.log(`wykonano komendę "server"`);
	},
};