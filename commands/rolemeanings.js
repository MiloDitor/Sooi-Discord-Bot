module.exports = {
    name: 'rolemeanings',
    description: 'This is a command that shows all the admin commands!',
    execute(client, message, args, cmd, Discord) {
        if(message.member.roles.cache.some(r=>["Director", "Developers", "Moderators"].includes(r.name)) ) {
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#6A0AD8')
                .setTitle('What do the roles mean?')
                .setDescription('All the main roles are listed below')
                .addFields(
                    {name: 'Director', value: 'For Dal, the server owner'},
                    {name: 'Oda Clan', value: 'Anyone who is helping with the development for the games or server'},
                    {name: 'Moderators', value: 'The people overseeing the server, be sure to listen to them'},
                    {name: 'COUNTING FAILURE', value: 'If you mess up the count in #counting, you will get the role alone'},


                )
                .setFooter('Make sure to grab your own roles too to express what type of creator you are and if you want to join events!')
                
                message.channel.send(newEmbed);
        } 
        else
        message.channel.send('You cant use this command!');
        }
    

}