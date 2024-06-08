import TelegramBot from 'node-telegram-bot-api'

// Replace 'YOUR_TOKEN' with your bot's API token
const TOKEN = '7376362883:AAH7CF7q35ZAcprO8fbBluDvGg0-ybAKWps';
const WEB_APP_URL = 'https://vvit.netlify.app/';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, { polling: true });

// Matches "/start"
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name;

    console.log(`User ${firstName} started the bot.`);

    // Inline keyboard button to open the web app
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Web App',
                        url: WEB_APP_URL
                    }
                ]
            ]
        }
    };

    bot.sendMessage(chatId, 'Welcome! Click the button below to open the web app:', opts);
});

// Log any errors
bot.on('polling_error', (error) => {
    console.error(error);
});