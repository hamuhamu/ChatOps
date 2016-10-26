'use strict';
var shuffle = require('shuffle-array');

class Erande {
    randomize (str) {
        var matched = str.match(/選んで (.*)/i);
        // 全角空文字を半角空文字に置換し、配列に変換
        var splited = matched[1].replace(/　/g, ' ').split(' ');
        var shuffled = shuffle.pick(splited);

        return shuffled + 'を選んだ';
    }
}
module.exports = Erande;
