const Discord = require("discord.js");
const client = new Discord.Client()
const winston = require("winston");
const config = require('./config.json');
client.on('ready', () => {
  winston.add(winston.transports.File, { filename: 'logcord.log', level: 'info' });
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  winston.log('info', `${msg.guild} - ${msg.channel.name} - @${msg.author.username}#${msg.author.discriminator} ( ${msg.author} ) - ${msg.createdAt} - ${msg.content}`);
});

client.login(process.env.BOT_TOKEN);
//client.login(config.token)
