module.exports = {
    name: 'staff',
    description: 'This is a list of all the staff members!',
    execute(client, message, args, cmd, Discord) {
                 const newEmbed = new Discord.MessageEmbed()
                .setColor('#A569BD')
                .setTitle('Staff')
                .setURL('https://media.giphy.com/media/l2SpLkj1bhZqRx8pa/giphy.gif')
                .setDescription('This is a list of all the staff members!')
                .addFields(
                    {name: '**Founders**', value: 'Milo'},
                    {name: 'Admins', value: 'no one.'},
                )
                .setFooter('Dont be afraid to ask anyone for help!')
                
                message.channel.send(newEmbed);
        } 

}