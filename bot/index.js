import Bot from 'node-telegram-bot-api'


const { BOT_TOKEN } = process.env;

const bot = new Bot(BOT_TOKEN, {
    polling: true
});

function onStart ({ chat }) {

    console.log('Start')

    bot.sendMessage(chat.id, 'Тут будет описания, потом три кнопки:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Играть', web_app: { url: "https://vvit.netlify.app" } }],
                [{ text: 'Подписаться на канал', url: 'https://t.me/hamster_kombat' }],
                [{ text: 'Как играть', callback_data: 'info' }]
            ]
        }
    });
}

function onInfo (query) {
    bot.sendMessage(query.message.chat.id, 'Тут будут правила игры и еще что-то.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Играть', web_app: { url: "https://vvit.netlify.app" } }],
                [{ text: 'Подписаться на канал', url: 'https://t.me/hamster_kombat' }]
            ]
        }
    });
}

bot.onText(/\/start/, onStart);
bot.on('callback_query', onInfo);

