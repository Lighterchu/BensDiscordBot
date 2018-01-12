const Discord = require("discord.js");

const Token = "NDAwNTk1NjYyMjMzOTI3Njgw.DTd7Uw.1xgMN6dGzCMCjExyT2Fo5u7dxBo"
const prefix = "."
const role = null
var bot = new Discord.Client();



bot.on("ready", function() {
    console.log("ready");
   
});

// event when client writes a message
bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    role = message.guild.roles.find("name", "test");

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

bot.on("guildMemberAdd", function(member) {
    
    member.guild.channels.find("name", "general").sendMessage(member.toString() + ", welcome to the server!");
     member.addRole(member.guild.roles.find("name","test"));
   // member.addRole(role).catch(console.error);
});
bot.login(Token);