"use strict";

var Translate = require('@google-cloud/translate');
var async = require('async');

var TranslateService = {};
var translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

TranslateService.translateText = function (content, targetLang, next) {
    translate
      .translate( content, targetLang )
      .then(results => {
        console.log('Result',results);
        return results[0];
      })
      .catch(err => {
        console.error('ERROR:', err);
      });

};


module.exports = TranslateService;
