bot.command('start', (ctx) => { 
        ctx.chat.id,
	ctx.replyWithHTML(`👋🏼 <b><i><a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name}</a></i></b> ${config.startmesaj}`,			 
	    {
           reply_markup:{
            inline_keyboard:[
                [{text:"🔔 Etiraf Et",  callback_data:'etirafbuton'}]
            ]
        }
    }) 
})

bot.action('start', (ctx) => { 
        ctx.chat.id,
        ctx.deleteMessage()
	ctx.replyWithHTML(`👋🏼 <b><i><a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name}</a></i></b> ${config.startmesaj}`,			 
	    {
            reply_markup:{
            inline_keyboard:[
                [{text:"🔔 Etiraf Et",  callback_data:'etirafbuton'}]
            ]
        }
    })
})


bot.action('etirafbuton', ctx=>{
	ctx.deleteMessage()
	ctx.telegram.sendMessage(ctx.chat.id, '✍️ *Buyurun,Etirafınızı Yazın*', { parse_mode: 'MarkdownV2' });
})


let etiraf;

bot.on("text", ctx => {
	let kanalid = 1108583389
	etiraf = ctx.message.text
    ctx.telegram.sendMessage(ctx.from.id, `📍 Etirafınız necə paylaşılsın?`, {
	reply_markup: {
		inline_keyboard: [
		
		[{text: '🔐 Anonim ', callback_data: 'anonimetiraf'}],
		[{text: '🗣 Açıq ', callback_data: 'aciqetiraf'}]
		
		]
	}	
})
})


bot.action("aciqetiraf", async (ctx, next) => {
	let aciqetiraf= `${config.aciqetirafeden} ${ctx.from.first_name}\n\n\n`
	let kanalid = -1001611084249
	var seliqe = `${config.aciqyazdigietiraf} ${etiraf}\n\n\n`
	var sonda = `${config.sonluq}`
	ctx.telegram.sendMessage(kanalid, `${aciqetiraf+seliqe+sonda}`)
	ctx.deleteMessage()
	await ctx.replyWithHTML(`<a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name}</a> yazdığınız etirafa görə təşəkkürlər`,			 
	    {
            reply_markup: { 
                inline_keyboard: [
                    [{text: `${config.yenidenetiraf}`, callback_data:'etirafbuton' }]
                ]
            }
       }
    
     )
})

bot.action("anonimetiraf", async (ctx) => {
	let aciqetiraf = `${config.anonimetiraf} \n\n\n`
	let kanalid = -1001611084249
	var seliqe = `${config.anonimyazdigietiraf} ${etiraf}\n\n\n`
	var sonda = `${config.sonluq}`
	ctx.telegram.sendMessage(kanalid, `${aciqetiraf+seliqe+sonda}`)
	ctx.deleteMessage()
	await ctx.replyWithHTML(`<a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name}</a> yazdığınız etirafa görə təşəkkürlər`,			 
	    {
            reply_markup: { 
                inline_keyboard: [
                    [{text: `${config.yenidenetiraf}`, callback_data:'etirafbuton' }]
                ]
            }
       }
    
     )
})


//xətaları göstərsin
bot.catch((err) => {
    console.log('Error: ', err)
})

// Botun nickname alan kod
bot.telegram.getMe().then(botInfo => {
    bot.options.username = botInfo.username
    console.log(`Bot Aktif Oldu => ${bot.options.username}`)
})

bot.launch()

// Bu, botumuzu yavaşca dayandırmağa imkan verir.
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
