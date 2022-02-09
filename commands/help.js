module.exports = {
    name: 'help',
    description: 'This is a help command!',
    execute(client, message, args, cmd, Discord) {
                 const newEmbed = new Discord.MessageEmbed()
                .setColor('#A569BD')
                .setTitle('Help')
                .setURL('https://gph.is/2Apj846')
                .setDescription('Message an admin if you need any more help!')
                .addFields(
                    {name: 'What should I do?', value: 'Talk in our various channels and take a look at our roles section!'},
                    {name: 'What can I do for fun?', value: 'Go to our games category and gamble, count, get cards and play trivia! Also look at the **free** games on sale!'},
                    {name: 'How do I join the Minecraft server?', value: 'After reading our rules and roles go to our minecraft-ip channel in information! Here you will get the IP and a brief explanation of what to do when you first login!'}
                )
                .setFooter('Dont be afraid to ask anyone for help!')
                
                message.channel.send(newEmbed);
        } 

}