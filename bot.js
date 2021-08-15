const { Telegraf } = require('telegraf')

const bot = new Telegraf('1984021148:AAG5yLYXcrOFkb642hpIBVljzVZOwr8_YLs')


bot.start(ctx => {
    ctx.telegram.sendMessage(
        ctx.chat.id,
	return ctx.replyWithMarkdown(trueTrim(`
        Salam $(ctx.from.first_name), bota etiraf etmək istədiyin mesajı yazırsan və kanalda paylaşılır.\n\nEtirafınızı yazdıxdan sonra Anonim(gizli) yoxsa Açıx paylaşım soruşacam ✅
	Buyur bir etiraf et 💁🏼‍♀️`,)
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Etiraf Et 📌", callback_data: "Açıq 💃🏻" }, {text: "Etiraf Kanalı 📣", url: "https://t.me/myetiraf"}]
                ]
            }
       }
    )
});




bot.command("admin", ctx => {
	if(ctx.from.id===1108583389){
		ctx.reply("Giriş uğurludur.")
	}else{
		ctx.reply("Giriş uğursuzdur.")
	
	}
})



let metn;

bot.on("text", ctx => {
	let kanalid = -1513355119
	metn = ctx.message.text
ctx.telegram.sendMessage(ctx.from.id, 'Etirafınız necə paylaşılsın?',{
	reply_markup: {
		inline_keyboard: [
		
		[{text: 'Açıq 💃🏻 ', callback_data: 'Açıq 💃🏻 '}],
		[{text: 'Anonim 👤 ', callback_data: 'Anonim 👤 '}]
		
		]
	}
})
	

})

bot.action("Açıq 💃🏻 ", ctx => {
	let aciqetiraf= `Etiraf edən şəxs 👤 : ${ctx.from.first_name}\n\n\n`
	let kanalid = -1513355119
	var seliqe = `Etdiyi etiraf ✍️ : ${metn}\n\n\n`
	var sonda = 'Etiraf etmək üçün ☂️ : @EtirafAzBot -a yazın.'
	ctx.telegram.sendMessage(kanalid, `${aciqetiraf+seliqe+sonda}`)
	ctx.reply('Etirafınız göndərildi❕\nAdmin Tərəfindən Yoxlanılıb @MyEtiraf Kanalında Paylaşılacaq 🧞‍♀️')
})



bot.action("Anonim 👤 ", ctx => {
	let eden = ctx.from.first_name 
	let aciqetiraf= `Etiraf edən şəxs 👤 : Anonim\n\n\n`
	let kanalid = -1513355119
	var seliqe = `Etdiyi etiraf ✍️ : ${metn}\n\n\n`
	var sonda = 'Etiraf etmək üçün 💁🏼‍♀️ : @EtirafAzBot-a yazın.'
	ctx.telegram.sendMessage(kanalid, `${eden}\n\n\n${aciqetiraf+seliqe+sonda}`)
	ctx.reply('Etirafınız göndərildi❕\nAdmin Tərəfindən Yoxlanılıb @MyEtiraf Kanalında Paylaşılacaq 🧞‍')
})

bot.catch((err) => {
    console.log('Error: ', err)
})

// Botun nickname alan kod
bot.telegram.getMe().then(botInfo => {
    bot.options.username = botInfo.username
    console.log(`Bot Aktif Oldu! => ${bot.options.username}`)
})



console.log('Aktif oldu')

bot.launch()
