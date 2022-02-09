const Discord = require('discord.js');
const twerkGif = require('./twerkgif.json');

module.exports = {
  name: 'twerk',
  description: 'sadly twerk',
  execute: async (client, message, args) => {
    const gif = twerkGif[Math.floor(Math.random() * twerkGif.length)];

    const embed = new Discord.MessageEmbed()
      .setColor('#FF8DC4')
      .setTitle(
        `*oh... ${message.author.username} is sadly twerking ;)*`,
      )
      .setImage(gif);

    message.channel.send(embed);
  },
}; 