module.exports = {
    name: "say",
    description: "says something",

    
    async execute(client, message, args, cmd, Discord) {
          if(message.member.roles.cache.some(r=>["milo"].includes(r.name)) ) {
 
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return 

        let textChannel = message.mentions.channels.first() 
        if(!args[0]) return message.channel.send('Provide a channel for me to send the message in!'); 
        if(!args[1]) return message.channel.send('Provide a message to say!');
        if (!message.guild.channels.cache.has(textChannel.id)) return; 
        message.delete() 

            msg = args.slice(1).join(" "); 
            textChannel.send(msg) 
   } 
        else
        message.channel.send('You cant use this command!');
        }
    
        }