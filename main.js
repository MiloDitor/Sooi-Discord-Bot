
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.on('messageReactionAdd', async (reaction, user) => {





  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error('Something went wrong when fetching the message: ', error);

      return;
    }
  }
  console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);

  console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
});

client.on('eventroleReactionAdd', async (reaction, user) => {

  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error('Something went wrong when fetching the message: ', error);

      return;
    }
  }
  console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);

  console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
});

client.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Ronin')

  guildMember.roles.add(welcomeRole);
});


const fs = require('fs');

const memberCounter = require('./counters/member-counter');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);

})

const quick = require('quick.db');
client.login(process.env.DISCORD_TOKEN);

client.on(
  'messageReactionAdd',
  async (potentialPartialReaction, potentialPartialUser) => {
    try {
      const reaction = await potentialPartialReaction.fetch();
      const user = await potentialPartialUser.fetch();
    } catch (err) {
      console.log(err);
    }
    
    

 
  
  

})


client.on('message', (message) => {
  if (message.content.includes('banana', 'bananas', 'Banana')) {
      message.react("🍌");
  }
});

client.on('message', (message) => {
  msg = message.content.toLowerCase();
  
  if (msg.startsWith ('rin', 'Rin')) {
      message.react("🤡");
  }
});