module.exports = {
    name: 'suggestion',
    description: "Make a suggestion!",
    execute(client, message, args, cmd, Discord) {
        const channel = message.guild.channels.cache.find(c => c.name === '📩│suggestions');
        if(!channel) return message.channel.send('suggestions channel does not exist!');
    
        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('#A569BD')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setDescription(messageArgs);


        channel.send(embed).then((msg) =>{
            msg.react('✅');
            msg.react('🚫');
            message.delete();
        }).catch((err) =>{
            throw err;
        })
    }
   
}