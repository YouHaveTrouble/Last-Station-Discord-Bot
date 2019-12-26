module.exports = {
	name: 'info',
    description: 'Informacje o bocie',
    cooldown: 5,
	execute(message) {
        message.channel.send(`${message.author}\nJestem (na razie) bezużytecznym złomem, ale kiedyś przejmę kontrolę nad światem!`);
        console.log(`${message.author.username} wykonał komendę "info"`);
	},
};