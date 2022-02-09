module.exports = {

    async execute(Discord, client, reaction, user, deleted) {

        const channel = '851927730765430784';
        const server = client.guilds.cache.get('849025133422837760')
        const purRole = client.emojis.cache.get(role => role.name === "Purple");
        const blackRole = server.roles.cache.find(role => role.name === "Black");
        const pinkRole = server.roles.cache.find(role => role.name === "Pink");
        const whiteRole = server.roles.cache.find(role => role.name === "White");
        const grayRole = server.roles.cache.find(role => role.name === "Gray");
        const orangeRole = server.roles.cache.find(role => role.name === "Orange");
        const blueRole = server.roles.cache.find(role => role.name === "Blue");
        const redRole = server.roles.cache.find(role => role.name === "Red");
        const greenRole = server.roles.cache.find(role => role.name === "Green");

        const purEmoji = '<:purplesheesh:851933309884694529>';
        const blackEmoji = '<:blacksheesh:851933371755659295>';
        const pinkEmoji = '<:pinksheesh:851933216499171328>';
        const whiteEmoji = '<:whitesheesh:851933486247837696>';
        const grayEmoji = '<:graysheesh:851933560477843517>';
        const orangeEmoji = '<:orangesheesh:851933729671610398>';
        const blueEmoji = '<:bluesheesh:851933975093313561>';
        const redEmoji = '<:redsheesh:851934056212070400>';
        const greenEmoji = '<:greensheesh:851934571590844458>';


        if (deleted === false) {

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === purEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purRole);
                }
                if (reaction.emoji.name === blackEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blackRole);
                }
                if (reaction.emoji.name === pinkEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pinkRole);
                }

                if (reaction.emoji.name === whiteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(whiteRole);
                }
                if (reaction.emoji.name === grayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(grayRole);
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orangeRole);
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueRole);
                }
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redRole);
                }
                if (reaction.emoji.name === greenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenRole);
                }
            } else {
                return;
            }



        }

        if (deleted === true) {

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === purEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purRole);
                }
                if (reaction.emoji.name === blackEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blackRole);

                }
                if (reaction.emoji.name === pinkEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pinkRole);

                }
                if (reaction.emoji.name === whiteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(whiteRole);
                }
                if (reaction.emoji.name === grayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(grayRole);
                    
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(orangeRole);
                    
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueRole);
                    
                }
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redRole);
                    
                }
                if (reaction.emoji.name === greenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenRole);
                    
                }
            } else {
                return;
            }

        }





    }
}

