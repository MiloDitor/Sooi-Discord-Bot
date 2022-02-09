module.exports = async (client) =>{
    const guild = client.guilds.cache.get('827577156237525003');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('828019472286744616');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count');
}, 500);
}