module.exports = {
    name: 'eventlmao',
    description: "This command creates a reaction role!",
    async execute(client, message, args, cmd, Discord) {
        if(message.member.roles.cache.some(r=>["Director", "Developers", "Moderators", "Studio Bot"].includes(r.name)) ) {
            message.channel.send("||@everyone||")
            const elementEmoji = '⛈️';
            const seasonsEmoji = '🍂';
            const timeEmoji = '⌛';

            let embed = new Discord.MessageEmbed()
            .setColor('#6A0AD8')
            .setTitle('Event')
            .setDescription('The first art contest will be held soon but first lets decide which theme you would want to go with! Vote with the corresponding emote for which you would want, (Only vote for one). In 3 days the winning vote will be chosen and that will be the set theme!\n\n'
                + `${elementEmoji} for Elements (Fire, Water ect.)!\n`
                + `${timeEmoji} for Time (Future, Ancient ect.)!\n`
                + `${seasonsEmoji} for Seasons (Spring, Summer ect.)!`);

            let MessageEmbed = await message.channel.send(embed);
            MessageEmbed.react(elementEmoji);
            MessageEmbed.react(timeEmoji);
            MessageEmbed.react(seasonsEmoji);
      
      
      
        } else {
            message.channel.send('You do not have permission to do that!')
       }
    }
}