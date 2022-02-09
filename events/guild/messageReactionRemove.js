const react = require(`../../features/roles`)
const eventroles = require(`../../features/eventroles`)
module.exports = async (Discord, client, reaction, user) => {

    const deleted = true

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    react.execute(Discord, client, reaction, user, deleted)
    eventroles.execute(Discord, client, reaction, user, deleted)

}
