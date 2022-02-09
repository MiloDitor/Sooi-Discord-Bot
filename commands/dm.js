module.exports = {
    name: "dm",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    async execute(client, message, args, cmd, Discord) {
      const channel = await message.guild.channels.create(`DM: ${message.author.tag}`);
      
      channel.setParent("853369764779917384");
  
      channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGE: false,
        VIEW_CHANNEL: false,
      });
      channel.updateOverwrite(message.author, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
      });
  
      const reactionMessage = await channel.send("Thank you for making a DM! Dal will get to you soon!");
  
      try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send("Error sending emojis!");
        throw err;
      }
  
      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR",),
        { dispose: true }
      );
      message.member.roles.cache.some(r=>["Director", "Moderators"].includes(r.name))

      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
            
            break;
          case "⛔":
            channel.send("Deleting this channel in 5 seconds!");
            setTimeout(() => channel.delete(), 5000);
            break;
        }
      });
  
      message.channel
        .send(`Dal will be right with you! ${channel}`)
        .then((msg) => {
          setTimeout(() => msg.delete(), 7000);
          setTimeout(() => message.delete(), 3000);
        })
        .catch((err) => {
          throw err;
        });
    },
  };
  