// Author: Zakro Gogolidze
// Copyright 2021. All rights reserved.
// license that can be found in the LICENSE file.

'use strict';

var Speach = /** @class */ (function () {
    function Speach(setting) {
        this.setting = setting;
    }
    Speach.prototype.run = function () {
        var _this = this;
        if (!this.browserSupport()) {
            document.querySelector(this.setting.html.result).value = 'Your browser is not supported. Please download Google chrome or Update your Google chrome!';
        }
        var speechRecognizer = new webkitSpeechRecognition();
        speechRecognizer.continuous = true;
        speechRecognizer.interimResults = true;
        speechRecognizer.lang = this.setting.language;
        document.querySelector(this.setting.html.buttons.start).addEventListener('click', function () {
            _this.startConverting(speechRecognizer);
        });
        document.querySelector(this.setting.html.buttons.stop).addEventListener('click', function () {
            _this.stopConverting(speechRecognizer);
        });
        document.querySelector(this.setting.html.buttons.clear).addEventListener('click', function () {
            _this.clearConverting();
        });
    };
    Speach.prototype.startConverting = function (speechRecognizer) {
        var _this = this;
        speechRecognizer.start();
        var finalTranscripts = '';
        speechRecognizer.onresult = function (event) {
            var interimTranscripts = '';
            for (var i = event.resultIndex; i < event.results.length; i++) {
                var transcript = event.results[i][0].transcript;
                transcript.replace("\n", "<br>");
                if (event.results[i].isFinal) {
                    finalTranscripts += transcript;
                }
                else {
                    interimTranscripts += transcript;
                }
            }
            document.querySelector(_this.setting.html.result).value = finalTranscripts + interimTranscripts;
        };
        speechRecognizer.onerror = function (event) {
            console.error(event);
        };
    };
    Speach.prototype.stopConverting = function (speechRecognizer) {
        speechRecognizer.abort();
    };
    Speach.prototype.clearConverting = function () {
        document.querySelector(this.setting.html.result).value = '';
    };
    Speach.prototype.browserSupport = function () {
        if ('webkitSpeechRecognition' in window) {
            return true;
        }
        return false;
    };
    return Speach;
}());
