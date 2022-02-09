module.exports = {
    name: 'clear',
    description: "Clear Messages!",
    
    async execute(client, message, args, cmd, Discord) {
        if(message.member.roles.cache.some(r=>["milo"].includes(r.name)) ) {
        if(!args[0]) return message.reply("Please enter the amount of messages you would like to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages!");
        if(args[0] < 1) return message.reply("You must delete atleast one message!");
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        })
        
    } else {
             message.channel.send('You do not have permission to do that!')
        }

}
}