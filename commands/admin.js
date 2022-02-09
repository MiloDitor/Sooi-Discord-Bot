module.exports = {
    name: 'twitter',
    description: 'This is a command that shows all the admin commands!',
    execute(client, message, args, cmd, Discord) {
                if(message.member.roles.cache.some(r=>["mod", "me"].includes(r.name)) ) {
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#28C7F5')
                .setTitle('Twitter')
                .setDescription('Twitter ahaha')
                .setURL('https://twitter.com/StudioDallience/status/1398648549601067010?s=20')
                
                message.channel.send(newEmbed);
        } 
        else
        message.channel.send('You cant use this command!');
        }
    

}