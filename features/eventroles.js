module.exports = {

    async execute(Discord, client, reaction, user, deleted) {
        
        const channel = '851927730765430784';
        const server = client.guilds.cache.get('849025133422837760')
        const acRole = server.roles.cache.find(role => role.name === "Art Contest Participants");
        const gmRole = server.roles.cache.find(role => role.name === "Game/Movie Night Participants");


        const gmEmoji = '🎥';
        const acEmoji = '🎀';



        if (deleted === false) {

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === acEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(acRole);
                }
                if (reaction.emoji.name === gmEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gmRole);

                }
            } else {
                return;
            }
                

        }

        if (deleted === true) {

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === acEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(acRole);
                }
                if (reaction.emoji.name === gmEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gmRole);
                }
            } else {
                return;
            }
        }


    }
}
