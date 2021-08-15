const { Telegraf } = require('telegraf')

const bot = new Telegraf('1925679701:AAGiMYFVD027JCRyIhzqGjZLyu8wario2C0')


bot.start(ctx => {
    ctx.telegram.sendMessage(
        ctx.chat.id,
	return ctx.replyWithMarkdown(trueTrim(`
        Salam *$(ctx.from.first_name),* bota etiraf etmək istədiyin mesajı yazırsan və kanalda paylaşılır.\n\nEtirafınızı yazdıxdan sonra Anonim(gizli) yoxsa Açıx paylaşım soruşacam ✅
	Buyur bir etiraf et 💁🏼‍♀️`,)
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Saytımız", url: "https://teslagame.tk" }, {text: "Github", url: "https://github.com/sirincay"}],
                    [{ text: "Kanalımız", url: "https://t.me/husnuehedov"}]
                ]
            }
       }
    )
});




bot.command("admin", ctx => {
	if(ctx.from.id===1816126399){
		ctx.reply("Giriş uğurludur.")
	}else{
		ctx.reply("Giriş uğursuzdur.")
	
	}
})



let metn;

bot.on("text", ctx => {
	let kanalid = -1001424334391
	metn = ctx.message.text
ctx.telegram.sendMessage(ctx.from.id, 'Etirafınız necə paylaşılsın?',{
	reply_markup: {
		inline_keyboard: [
		
		[{text: 'Açıq☠️ ', callback_data: 'Açıq☠️ '}],
		[{text: 'Gizli☠️ ', callback_data: 'Gizli☠️ '}]
		
		]
	}
})
	

})

bot.action("Açıq☠️ ", ctx => {
	let aciqetiraf= `Etiraf edən şəxs ☠️ : ${ctx.from.first_name}\n\n\n`
	let kanalid = -1001424334391
	var seliqe = `Etdiyi etiraf ✍️ : ${metn}\n\n\n`
	var sonda = 'Etiraf etmək üçün ☂️ : @MyEtirafBot-a yazın.'
	ctx.telegram.sendMessage(kanalid, `${aciqetiraf+seliqe+sonda}`)
	ctx.reply('Etirafınız göndərildi. Yoxlanıldıqdan sonra @MenimEtirafim kanalında paylaşılacaq.')
})



bot.action("Gizli☠️ ", ctx => {
	let eden = ctx.from.first_name 
	let aciqetiraf= `Etiraf edən şəxs ☠️ : Anonim\n\n\n`
	let kanalid = -1001424334391
	var seliqe = `Etdiyi etiraf ✍️ : ${metn}\n\n\n`
	var sonda = 'Etiraf etmək üçün ☂️ : @ConfessTrBot-a yazın.'
	ctx.telegram.sendMessage(kanalid, `${eden}\n\n\n${aciqetiraf+seliqe+sonda}`)
	ctx.reply('Etirafınız göndərildi. Yoxlanıldıqdan sonra @ConfessTr kanalında paylaşılacaq.')
})

bot.catch((err) => {
    console.log('Error: ', err)
})

// Botun nickname alan kod
bot.telegram.getMe().then(botInfo => {
    bot.options.username = botInfo.username
    console.log(`Bot Aktif Oldu! => ${bot.options.username}`)
})



console.log('Aktif')

bot.launch()
