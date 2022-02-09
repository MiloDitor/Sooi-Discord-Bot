module.exports = {
    name: 'poll',
    description: "This command creates a reaction role!",
    async execute(client, message, args, cmd, Discord) {
        if(message.member.roles.cache.some(r=>["Moderators", "Director"].includes(r.name)) ) {

            const yesEmoji = '✅';
            const noEmoji = '🔵';

            let embed = new Discord.MessageEmbed()
            .setColor('#6A0AD8')
            .setTitle('Should Dal watch Your Lie In April??')
            .setDescription('Say yes so he actually does it.\n\n'
                + `${yesEmoji} he should watch it right now!\n`
                + `${noEmoji} he shouldnt watch it and I'm uncultured..`);

            let MessageEmbed = await message.channel.send(embed);
            MessageEmbed.react(yesEmoji);
            MessageEmbed.react(noEmoji);
      
      
      
        } else {
            message.channel.send('You do not have permission to do that!')
       }
    }
}