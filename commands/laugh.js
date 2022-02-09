    const Discord = require('discord.js');
        const laughGif = require('./laugh.json');
        
        module.exports = {
          name: 'laugh',
          description: 'laugh at someone',
          execute: async (client, message, args) => {
            const gif = laughGif[Math.floor(Math.random() * laughGif.length)];
        
            if (!message.mentions.users.first())
              return message.reply('***please mention someone.***');
        
            const embed = new Discord.MessageEmbed()
              .setColor('#6A0AD8')
              .setTitle(
                `*lmao.. ${message.author.username} is lauhing at ${
                  message.mentions.users.first().username
                }!*`,
              )
              .setImage(gif);
        
            message.channel.send(embed);
          },
        }; 
     
 

