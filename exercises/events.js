
const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const name = ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo, ${name}!`)
})

bot.on('text', ctx => {
    ctx.reply(`Texto '${ctx.update.message.text}' recebido com sucesso`)
})

bot.on('location', ctx => {
    const location = cxt.update.message.location
    console.log(location)
    ctx.reply(`Entendido, você está em 
            Lat: ${location.latitudo},
            Lon: ${location.longitude}`)
})

bot.on('contact', ctx => {
    const contact = cxt.update.message.contact
    console.log(contact)
    ctx.reply(`Vou lembrar do(a) 
            ${contact.first_name} (${contact.phone_number})`)
})

bot.on('voice', ctx => {
    const voice = cxt.update.message.voice'
    console.log(voice)
    ctx.reply(`Audio recebido, ele possui ${voice.duration} segundos`)
})


bot.on('photo', ctx => {
    const location = cxt.update.message.contact
    console.log(contac)
    ctx.reply(`Vou lembrar do(a) 
            ${contact.first_name} (${contact.phone_number})`)
})

bot.startPolling()