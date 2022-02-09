
module.exports = {
    name: 'reactionrole',
    description: "This command creates a reaction role!",
    async execute(client, message, args, cmd, Discord) {
        if(message.member.roles.cache.some(r=>["The Empire", "Logger"].includes(r.name)) ) {

           
            const channel = '837808392675262484';
            const redRole = message.guild.roles.cache.find(role => role.name === "red");
            const blueRole = message.guild.roles.cache.find(role => role.name === "blue");
            
            const redEmoji = '🔴';
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

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === redEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(redRole);
                    }
                    if (reaction.emoji.name === blueEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(blueRole);
                }
            } else { 
                return;
            }
            });

            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === redEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(redRole);
                    }
                    if (reaction.emoji.name === blueEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(blueRole);
                }
            } else { 
                return;
            }
            });



     } else {
            message.channel.send('You do not have permission to do that!')
       }
    }
}
