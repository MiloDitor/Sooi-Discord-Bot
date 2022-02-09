module.exports = {
    name: 'rules',
    description: "Embeds!",
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#28C7F5')
        .setTitle('Rules')
        .setURL('https://gph.is/g/ZY8BB3a')
        .setDescription('Make sure to read the rules below!')
        .addFields(
            {name: 'Rule 1', value: 'Respect all staff members.'},
            {name: 'Rule 2', value: 'Make sure new members feel welcome.'},
            {name: 'Rule 3', value: 'Use the respected channels for certain conversation.'},
            {name: 'Rule 4', value: 'Anyone using the incorrect age roles will be banned.'},
            {name: 'Rule 5', value: `Don't push your luck with dark humour. (know your limits)`},
            {name: 'Rule 6', value: `Don't spam or flood the channel with shit.`},
            {name: 'Rule 7', value: `No advertisement without expressed permission. (Ban hammer without the correct permission)`},
            {name: 'Rule 8', value: `No harassment.`},
        )
        .setImage('https://media1.tenor.com/images/13c3e803a85dff90e46d084990bc0fb1/tenor.gif?itemid=21286283')
        .setFooter('Also follow the Discord TOS!')
        
        message.channel.send(newEmbed);
    
    }

}