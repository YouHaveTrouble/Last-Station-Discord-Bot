module.exports = {
	name: 'ping',
    description: 'Ping!',
    cooldown: 5,
	execute(message) {
        message.channel.send('Pong.');
        console.log(`${message.author.username} wykonał komendę "ping"`);
	},
};