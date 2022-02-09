module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message, args, cmd, Discord) {
        if(message.member.roles.cache.some(r=>["mod", "me"].includes(r.name)) ) {
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send('You cannot kick that member!');
        }
     } else {
            message.channel.send('You do not have permission to do that!')
       }
    }
}
