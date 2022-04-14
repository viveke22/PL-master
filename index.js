const express = require("express")
const app = express()
const Database = require("@replit/database")
const db = new Database()



app.get("/", (req,res) => {
  res.send("hello world!")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Vicky always op" }})
})
client.on("message", async message => {
  if (message.content === 'ping') {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
PREFIX="!"
if(message.content === "embed") {
  let embed = new Discord.MessageEmbed()
  .setTitle("This is Embed Title")
  .setDescription("This is Embed description")
  .setColor("RANDOM")
  .setFooter("This is Embed Footer")
  message.channel.send(embed);
}
if(message.content === "shelly") {
  let shelly = ["https://wallpapercave.com/wp/wp6422430.jpg","https://i.redd.it/hlhpf6ui25441.jpg","http://is.am/4cs8","9f.jpg"]
  message.channel.send(`${shelly[Math.floor(Math.random() * shelly.length)]} here is shelly!`)
}
if(message.content === "image") {
 let image = new Discord.MessageAttachment("9f.jpg")
  message.channel.send(image)
}
if(message.content === "image") {
 let image = new Discord.MessageAttachment("bmg.jpg")
  message.channel.send(image)
}
if(message.content === "hi" || message.content === "Hi"){
  message.channel.send("hello there!")
  }
    
    if(message.content === "help" || message.content === "Help") {
    let help = new Discord.MessageEmbed()
  .setTitle("List")
  .setDescription("(Type play r.p.s to play)(Type roll a dice)(flip a coin)(who is vicky?)")
  .setColor("RANDOM")
  .setFooter("some commands may not work") 
  message.channel.send(help);
 }
 
if (message.content === "flip a coin"){
  let coin =["heads","tails"]
  message.channel.send(`${coin[Math.floor(Math.random() * coin.length)]}`)
}
 if (message.content === "who is vicky?") {
   message.channel.send("creator of me")
 }
  if (message.content === "play r.p.s") {
    message.channel.send("ok lets play type rock or paper or scissors")
   }
    if (message.content === "rock" || message.content === "paper" || message.content === "scissors") {
      let rock =["r","p","s"]
      message.channel.send(`${rock[Math.floor(Math.random() * rock.length)]}`)
    }

  if (message.content  === "roll a dice" || message.content === "Roll a dice") {
    let dice=[1,2,3,4,5,6]
    message.channel.send(`${dice[Math.floor(Math.random() * dice.length)]}`)
   }

//below is how to ping
if (message.content === "hello") {
const filter = m => m.author.id === message.author.id;
message.reply ("yo wssup?")
}
if(message.content.startsWith("?kill")) {
  let victim = message.mentions.users.first()
  if(!victim) message.reply("mention someone to kill")
  else {
    message.channel.send(`${victim} Died lol`)
  }
}
if (message.content === "who is good bot?") {
 message.channel.send("prolegends master is best but iron bot is waste")
}

// collect messages
if (message.author.bot) return;
 const filter = (m) => m.author.id === message.author.id;

 if (message.content === '?yello') {
  message.channel.send("yellow") ;
  message.channel
  .awaitMessages(filter, { max: 5, time: 1000 * 60, errors: ['time'] })
  .then((collected) => {
    console.log(collected.size);
    const msg = collected.first();
    console.log(msg.content);
  })
  .catch((err) => console.log(err));
}
// say command
if(message.content.startsWith('.say')){
 const whattosay = message.content.slice("".length).trim().split(/ +/);
whattosay.shift().toLowerCase().split(" ")[0]
message.channel.send(whattosay.join(" "))
}

// dm command
if(message.content.startsWith(`-dm`)){
 const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('Provide a user!')
if(!whattosend[1]) return message.channel.send('What do you want to send to them?')
member.send(whattosend.slice(1).join(" "))
}
if(message.content.toLowerCase().startsWith("?balance")){
  let balance = await db.get(`wallet_${message.author.id}`)
  let bank = await db.get(`bank_${message.author.id}`)
  if(balance === null) balance = 0
  if(bank === null) bank = 0
  let moneyEmbed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username}'s Balance`)
  .setDescription(`Wallet: ${balance}\nBank: ${bank}`)
  .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
  message.channel.send(moneyEmbed)
  
}





  



});
client.login(process.env.token)