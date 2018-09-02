
const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    if(from.username == 'fernandobotti'){
        ctx.reply(`Seja bem vindo mestre, ${from.first_name}!`)
    } else {
        ctx.reply(`Desculpe, apenas atendo meu mestre`)
    }
})

bot.startPolling()