module.exports = {
	name: 'ping',
    description: 'Ping!',
    cooldown: 5,
	execute(message) {
        message.channel.send('Pong.');
        console.log(`wykonano komendę "ping"`);
	},
};