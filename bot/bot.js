const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize bot
const bot = new TelegramBot(process.env.TELEGRAM_API_TOKEN, { polling: true });

// Initialize Express app
const app = express();
const port = 3000;

// Serve the Web App (HTML, CSS, JS files)
app.use(express.static('web-app'));

// Handle "/start" command in Telegram
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    
    const options = {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Join Airdrop",
                    web_app: { url: "https://alimakbar31.github.io/telegram-airdrop/" }
                }]
            ]
        }
    };
    
    bot.sendMessage(chatId, "Welcome to PAWS Airdrop! Click below to join:", options);
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
