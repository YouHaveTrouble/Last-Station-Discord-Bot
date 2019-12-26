module.exports = {
	name: 'zgłoś',
	description: 'System zgłoszeń',
    args: true,
    usage: '<błąd>',
    cooldown: 5,
	execute(message) {
        message.channel.send('Pong.');
        console.log(`${message.author.username} wykonał komendę "zgłoś"`);
	},
};