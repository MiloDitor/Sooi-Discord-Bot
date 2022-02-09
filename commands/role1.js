module.exports = {
    name: 'role1',
    description: "This command creates a reaction role!",
    async execute(client, message, args, cmd, Discord) {
        if(message.member.roles.cache.some(r=>["The Empire"].includes(r.name)) ) {
            const channel = '851927730765430784';
            const purRole = message.guild.roles.cache.find(role => role.name === "Purple");
            const blackRole = message.guild.roles.cache.find(role => role.name === "Black");
            const pinkRole = message.guild.roles.cache.find(role => role.name === "Pink");
            const whiteRole = message.guild.roles.cache.find(role => role.name === "White");
            const grayRole = message.guild.roles.cache.find(role => role.name === "Gray");
            const orangeRole = message.guild.roles.cache.find(role => role.name === "Orange");
            const blueRole = message.guild.roles.cache.find(role => role.name === "Blue");
            const redRole = message.guild.roles.cache.find(role => role.name === "Red");
            const greenRole = message.guild.roles.cache.find(role => role.name === "Green");
            
            const purEmoji = '<:purplesheesh:851933309884694529>';
            const blackEmoji = '<:blacksheesh:851933371755659295>';
            const pinkEmoji = '<:pinksheesh:851933216499171328>';
            const whiteEmoji = '<:whitesheesh:851933486247837696>';
            const grayEmoji = '<:graysheesh:851933560477843517>';
            const orangeEmoji = '<:orangesheesh:851933729671610398>';
            const blueEmoji = '<:bluesheesh:851933975093313561>';
            const redEmoji = '<:redsheesh:851934056212070400>';
            const greenEmoji = '<:greensheesh:851934571590844458>';

            let embed = new Discord.MessageEmbed()
            .setColor('#28C7F5')
            .setTitle('Pick a Role Colour!')
            .setDescription('Make sure to pick whichever you like most!\n\n\n'
                + `${purEmoji} - For Purple\n`
                + `${blackEmoji} - For Black\n`
                + `${pinkEmoji} - For Pink\n`
                + `${whiteEmoji} - For White\n`
                + `${grayEmoji} - For Gray\n`
                + `${orangeEmoji} - For Orange\n`
                + `${blueEmoji} - For Blue\n`
                + `${redEmoji} - For Red\n`
                + `${greenEmoji} - For Green`);

            let MessageEmbed = await message.channel.send(embed);
            MessageEmbed.react(purEmoji);
            MessageEmbed.react(blackEmoji);
            MessageEmbed.react(pinkEmoji);
            MessageEmbed.react(whiteEmoji);
            MessageEmbed.react(grayEmoji);
            MessageEmbed.react(orangeEmoji);
            MessageEmbed.react(blueEmoji);
            MessageEmbed.react(redEmoji);
            MessageEmbed.react(greenEmoji);


     } else {
            message.channel.send('You do not have permission to do that!')
       }
    }
}