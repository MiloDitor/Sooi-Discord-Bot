module.exports = {
    name: 'unmute',
    description: "This command unmutes a member!",
    execute(client, message, args, cmd, Discord) {
        if(message.member.roles.cache.some(r=>["mod", "me"].includes(r.name)) ) {
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member')
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted')

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);
        } else{
            message.channel.send('Sorry that member cannot be found. Please check the ID.')
        }


     } else {
            message.channel.send('You do not have permission to do that!')
       }
    }
}
