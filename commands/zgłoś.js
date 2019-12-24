module.exports = {
	name: 'zgłoś',
	description: 'System zgłoszeń',
    args: true,
    usage: '<błąd>',
	execute(message) {
        message.channel.send('Pong.');
        console.log(`wykonano komendę "zgłoś"`);
	},
};