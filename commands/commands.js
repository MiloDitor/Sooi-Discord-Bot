module.exports = {
    name: 'commands',
    description: 'This is a list of all the commands!',
    execute(client, message, args, cmd, Discord) {
                 const newEmbed = new Discord.MessageEmbed()
                .setColor('#A569BD')
                .setTitle('Commands')
                .setURL('http://gph.is/2mNHWxp')
                .setDescription('This is a full list of our commands!')
                .addFields(
                    {name: 'PREFIX', value: 'Our prefix is "?"'},
                    {name: '?8ball', value: 'The ball knows all! What is your question? Ask away!'},
                    {name: '?ping', value: 'Want to make sure the bot is working? Use this command!'},
                    {name: 'avatar', value: 'This is to see your or someone elses avatar and allows you to save it!'},
                    {name: '?play', value: 'Want to listen to music? Use this bot! use URLs or keywords! Along with this command there is ?skip and ?leave!'},
                    {name: '?rules', value: 'Want a rundown of our rules without actually leaving the channel? Use this command!'},
                    {name: '?suggestion', value: 'Want to make a suggestion for our community? Use this command and let the community vote on it!'},
                    {name: '?ticket', value: 'Need help? Use this command to reach the admin team!'},
                    {name: 'laugh', value: 'Want to laugh at someone? Go ahead!'},
                    {name: 'twerk', value: 'Want to sadly twerk? Now you can!'},
                    
                )
                .setFooter('Want to see any features? Let us know!')
                
                message.channel.send(newEmbed);
        } 

}