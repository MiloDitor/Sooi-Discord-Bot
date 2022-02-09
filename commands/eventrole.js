module.exports = {
    name: 'eventroles',
    description: "This command creates a reaction role!",
    async execute(client, message, args, cmd, Discord) {
        if(message.member.roles.cache.some(r=>["The Empire", "Developers", "Moderators", "Logger"].includes(r.name)) ) {
            const channel = '851927730765430784';
            const acRole = message.guild.roles.cache.find(role => role.name === "Art Contest Participants");
            const gmRole = message.guild.roles.cache.find(role => role.name === "Game/Movie Night Participants");

            
            const gmEmoji = '🎥';
            const acEmoji = '🎀';


            let embed = new Discord.MessageEmbed()
            .setColor('#6A0AD8')
            .setTitle('Want to Join Events?')
            .setDescription('Get the roles for events you want to be pinged for!\n\n'
                + `${acEmoji} Art Contests!\n`
                + `${gmEmoji} Game/Movie Nights!`);

            let MessageEmbed = await message.channel.send(embed);
            MessageEmbed.react(acEmoji);
            MessageEmbed.react(gmEmoji);



     } else {
            message.channel.send('You do not have permission to do that!')
       }
    }
}