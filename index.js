const { Client, Intents } = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Client({
  intents: 3276799
});

client.on('ready', () => {
    console.log('the bot is ready')
})





client.login("your bot token")
