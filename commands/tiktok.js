module.exports = {
    name: 'tiktok',
    description: 'This is a link to our tiktok!',
    execute(client, message, args, cmd, Discord) {
        message.channel.send('https://www.tiktok.com/@midaliesmp?lang=en');
    }
}