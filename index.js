const Discord = require("discord.js");

const Token = "NDAwNTk1NjYyMjMzOTI3Njgw.DTd7Uw.1xgMN6dGzCMCjExyT2Fo5u7dxBo"
const prefix = "."

var bot = new Discord.Client();



bot.on("ready", function() {
    console.log("ready");
   
});


bot.on("guildMemberAdd", function(member) {
    let role = message.guild.roles.find("name", "test");
    member.guild.channels.find("name", "general").sendMessage(member.toString() + ", welcome to the server!");

    //member.addRole(member.guild.roles.find("name","test"));
    member.addRole(role).catch(console.error);
});

// event when client writes a message
bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var commands = message.content.substring(prefix.length).split(" ");

    switch (commands[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("pong")
            break;
        case "are you alive":
            message.channel.sendMessage("Yes i am Alive")
            break;

    }
});

bot.login(Token);