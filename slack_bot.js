var Botkit = require('./botkit/lib/Botkit.js');
var shuffle = require('shuffle-array');
var controller = Botkit.slackbot({
  debug: true
});

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}
controller.spawn({
  token: process.env.token
}).startRTM()

// 参加しているチャンネルでメッセージを受け取った
const EVENT_MESSAGE_RECEIVED = 'message_received';
// botに1対1のダイレクトメッセージを送った
const EVENT_DIRECT_MESSAGE = 'direct_message';
// 先頭にメンション @bot hello
const EVENT_DIRECT_MENTION = 'direct_mention';
// 会話中にメンション hello @bot
const EVENT_MENTION = 'mention';

/**
 * botへの疎通確認に使用する
 */
controller.hears(['hello', 'hi'], [EVENT_DIRECT_MENTION, EVENT_MENTION], function(bot, message) {
  bot.reply(message, 'Hello!! ぼくBot!!');
});

/**
 * ランダムでサイコロ振りたいときに使う
 * ex) 選んで A B C D
 * 区切り文字に半角か全角の空文字
 */
controller.hears(['選んで (.*)'], EVENT_DIRECT_MENTION ,function(bot, message) {
    var matched = message.text.match(/選んで (.*)/i);
    // 全角空文字を半角空文字に置換し、配列に変換
    var splited = matched[1].replace(/　/g, ' ').split(' ');
    var shuffled = shuffle.pick(splited);

    bot.reply(message, shuffled + 'を選んだ');
});

/**
 * wikiを表示させるときに使う
 * ex) wiki PHP
 * PHPのwikipediaページに移動してくれる
 */
controller.hears(['wiki (.*)'], EVENT_DIRECT_MENTION ,function(bot, message) {
    var searchWord = message.text.match(/wiki (.*)/i)[1];
    var url = 'https://ja.wikipedia.org/wiki/';

    bot.reply(message, '検索した！！\r' + url + searchWord);
});
