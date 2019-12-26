module.exports = {
	name: 'beep',
    description: 'Boop!',
    cooldown: 5,
	execute(message) {
        message.channel.send('Boop.');
        console.log(`${message.author.username} wykonał komendę "beep"`);
	},
};