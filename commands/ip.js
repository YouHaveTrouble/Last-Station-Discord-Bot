module.exports = {
	name: 'ip',
    description: 'Ip serwera',
    cooldown: 5,
	execute(message) {
        message.channel.send(`${message.author}\nIP serwera minecraft to: play.laststation.pl`);
        console.log(`${message.author.username} wykonał komendę "ip"`);
	},
};