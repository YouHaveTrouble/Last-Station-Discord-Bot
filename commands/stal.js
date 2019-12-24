const { Client, RichEmbed } = require('discord.js');
const config = require('../config.json');
module.exports = {
	name: 'stal',
    description: 'Stal. Gang.',
    cooldown: 60,
	execute(message) {
        const embed = new RichEmbed()
      .setTitle(`Stal na życzenie`)
      .setColor(0x0099ff)
      .setDescription(`https://www.youtube.com/watch?v=b_K8kgAQhnQ`);
    message.channel.send(embed);
        console.log(`wykonano komendę "stal"`);
	},
};