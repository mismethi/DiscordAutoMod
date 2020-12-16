const discord = require("discord.js");

module.exports = {
  name: "music",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT WILL SOON NEW FEATURES `)
      .setDescription(
        `
<a:visuals:743831283821707329>__**MUSIC COMMAND**__<a:visuals:743831283821707329>
<a:Right:743831162686013553>\`qplay\` :- give name of song or link
<a:Right:743831162686013553>\`qsearch\` :- give title of song
<a:Right:743831162686013553>\`qskip\`:- skip the song
<a:Right:743831162686013553>\`qstop\` :- stop the song
<a:Right:743831162686013553>\`qpause\`:- pause the song
<a:Right:743831162686013553>\`qresume\`:- resume the song
<a:Right:743831162686013553>\`qnowplaying\` :-  now playing songs
<a:Right:743831162686013553>\`qqueue\` :- give list of queue songs
<a:Right:743831162686013553>\`qvolume\` :- set volume 0 to 100

[__**Support Server**__](https://dsc.gg/kmdevs) 
`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter(`BOT MADE BY LOVE BY SMOKIE `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

  }
};
