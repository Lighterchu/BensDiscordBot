const Discord = require("discord.js");

const Token = "NDAwNTk1NjYyMjMzOTI3Njgw.DTd7Uw.1xgMN6dGzCMCjExyT2Fo5u7dxBo"
const prefix = "."
var uptime = 0

var bot = new Discord.Client();

now = new Date();
countTo = new Date(countTo);
difference = (now-countTo);

bot.on("ready", function() {
    console.log("ready");
    uptime = Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
});


bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + ", welcome to the server!");

    //member.addRole(member.guild.roles.find("name","test"));
    member.guild.addMember(member).roles("test");
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
        case "uptime":
            message.channel.sendMessage("Uptime: " + uptime)
            break;

    }
});

bot.login(Token);