module.exports = {
    name: 'customreact',
    description: "This command creates a reaction role!",
    async execute(client, message, args, cmd, Discord) {
        if(message.member.roles.cache.some(r=>["Moderators", "me"].includes(r.name)) ) {

            const redEmoji = '\:test:';
            const blueEmoji = '🔵';

            let embed = new Discord.MessageEmbed()
            .setColor('#A569BD')
            .setTitle('React for Colours!')
            .setDescription('Make sure to pick a colour!\n\n'
                + `${redEmoji} for red!\n`
                + `${blueEmoji} for blue!`);

            let MessageEmbed = await message.channel.send(embed);
            MessageEmbed.react(redEmoji);
            MessageEmbed.react(blueEmoji);
      
      
      
        } else {
            message.channel.send('You do not have permission to do that!')
       }
    }
}

