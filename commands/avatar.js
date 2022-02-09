const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'avatar',
    description: 'Return a user(s) avatar picture!',
   async execute(client, message, args, cmd, Discord)  {
    const member = message.mentions.members.first() || message.member;

    message.channel.send(
        new MessageEmbed()
        .setTitle(`${member.user.tag}'s avatar`)
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512}))
        .setColor("#6A0AD8")
    );
   },
};