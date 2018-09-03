const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

var fs = require('fs');
var text2png = require('text2png');
var data = new Date();


bot.start(async ctx => {
    await ctx.replyWithHTML(`${ctx.update.message.from.first_name}, You've entered a <code>forbidden zone!</code>💀`)
    fs.writeFileSync(__dirname+'/out.png', text2png(ctx.update.message.from.first_name + "\n" + ctx.update.message.from.last_name + "\n" + data.getHours()+":"+data.getMinutes(), {font: '100px Lucida Console', 
    textColor: 'black', bgColor: 'white',  lineSpacing: 10, padding: 20}));
    //await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
    //    <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
    //    <a href="http://www.google.com">Google</a>`)
   // await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
    //    + ' _de várias_ `formas` ```possíveis```'
    //    + ' [Google](http://www.google.com)')
    await ctx.replyWithPhoto({source: `${__dirname}/zone.jpg`});
    await ctx.replyWithPhoto({source: `${__dirname}/out.png`});
    //await ctx.replyWithPhoto('http://files.cod3r.com.br/curso-bot/gato1.jpg',
    //    { caption: 'Olha o estilo!' })
    //await ctx.replyWithPhoto({ url: 'http://files.cod3r.com.br/curso-bot/gato2.jpg'})
    //await ctx.replyWithLocation(37.3151609, 141.0212362)
    //await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
    await ctx.replyWithHTML(`Are you sure you want to continue ?`);
    
})

bot.startPolling()