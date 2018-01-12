const Discord = require("discord.js");

const Token = "NDAwNTk1NjYyMjMzOTI3Njgw.DTd7Uw.1xgMN6dGzCMCjExyT2Fo5u7dxBo"
const prefix = "."
var bot = new Discord.Client();


bot.on("ready", function() {
    console.log("ready");
   
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
        case "about":
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
            title: "About the bot.",
            description: "This bot was made for the server, AllRoundGamers.",
            fields: [{
                name: "Who developed it.",
                value: "Ben/LighterChu - Flyken."
            },
            {
                name: "Why though?",
                value: "Because we can and you need to stfu."
            },
            {
                name: "Need help?",
                value: "If you need any help, or would like to report a problem, please message: **__@LighterChu__**."
            }
            ],
            timestamp: new Date(),
            footer: {
            icon_url: bot.user.avatarURL,
            text: "© MasterBot - AllRoundGamers - Niverean."
            }
        }
        });
            break;

    }
});

bot.on("guildMemberAdd", function(member) {
    
    member.guild.channels.find("name", "general").sendMessage(member.toString() + ", welcome to the server!");
     member.addRole(member.guild.roles.find("name","test"));
   // member.addRole(role).catch(console.error);
});
bot.login(Token);