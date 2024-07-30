const { Telegraf } = require("telegraf");
const TOKEN = "6713396623:AAEpofgDy_GUUnxgDgojVal_5dNSAXsvUNk";
const bot = new Telegraf(TOKEN);

const web_link = "https://ton-connect-test.netlify.app";
const bot_url= "https://t.me/bBetterbet_bot."

bot.start((ctx) =>
  ctx.reply("Welcome :))))) \n to Ton connect", {
    reply_markup: {
      inline_keyboard: [[{ text: "Open App", url: web_link  }]],

    },
  })
);


bot.launch();
