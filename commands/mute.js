const ms = require('ms');
module.exports = {
    name: 'mute',
    aliases: ['m'],
    description: "This command mutes a member!",
    execute(client, message, args, cmd, Discord) {
        if(message.member.roles.cache.some(r=>["mod", "me"].includes(r.name)) ) {
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find('846909867858985000')
            let muteRole = message.guild.roles.cache.find('846909967381561386')

            let memberTarget= message.guild.members.cache.get(target.id);

            if(!args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted.`);
                return 
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function(){
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}>, you can now talk.`);
            }, ms(args[1]));
        } else{
            message.channel.send('Sorry that member cannot be found. Please check the ID.')
        }


     } else {
            message.channel.send('You do not have permission to do that!')
       }
    }
}
