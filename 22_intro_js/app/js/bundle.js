(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//=================1==============
var name = prompt('Как вас зовут?', '');
alert("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, "!")); //=================2===============

var birthYear = parseInt(prompt('Введите год вашего рождения', ''));
var currentYear = 2019;

if (isFinite(birthYear)) {
  alert("\u0412\u0430\u0448 \u0432\u043E\u0437\u0440\u0430\u0441\u0442: ".concat(currentYear - birthYear));
} else {
  alert('Введите число');
} //=================3================


var sideLength = prompt('Укажите длинну стороны квадрата:', '');
alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430: ".concat(sideLength * 4)); //=================4================

var circleRadius = prompt('Укажите радиус окружности:', '');
alert("\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438: ".concat(Math.round(Math.pow(circleRadius, 2) * Math.PI * 100) / 100)); //=================5================

var distance = prompt('Укажите расстояние в километрах между городами:', '');
var time = prompt('Укажите количество часов на дорогу:', '');

if (distance != null && time != null) {
  alert("\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C: ".concat(Math.round(distance / time), " \u043A\u043C/\u0447\u0430\u0441"));
} else {
  alert('Введите значение');
} //=================6================


var dollars = prompt('Сколько долларов вы хотите обменять?', '');
var rate = 1.1;
alert("\u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ".concat(Math.round(dollars * rate * 100) / 100, " \u0435\u0432\u0440\u043E")); //=================7================

var flashMemory = prompt('Укажите обьем флешки в гигабайтах', '');
alert("\u041F\u043E\u043C\u0435\u0449\u0430\u0435\u0442\u0441\u044F ".concat(Math.floor(flashMemory * 1024 / 820), " \u0444\u0430\u0439\u043B\u043E\u0432")); //=================8================

var moneySum = prompt('Сколько гривен у вас есть?', '');
var chocolatePrice = prompt('Какая цена шоколадки?', '');
alert("\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u044C ".concat(Math.floor(moneySum / chocolatePrice), " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A \u0438 \u0443 \u0432\u0430\u0441 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F ").concat(Math.round(moneySum % chocolatePrice * 100) / 100, " \u0433\u0440\u0438\u0432\u0435\u043D")); //=================9================

var num = prompt('Введите трехзначное число', '');
var result = '';

while (num > 0) {
  result += num % 10;
  num = parseInt(num / 10);
}

alert('Число: ' + result); //=================10================

var deposit = prompt('Введите сумму вклада', '');
var month = 2;
var percent = 0.05;
alert("\u0421\u0443\u043C\u043C\u0430 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u043E \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u0430\u043C: ".concat(Math.floor(deposit * month / 12 * percent * 100) / 100));

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy8yMl9pbnRyb19qcy9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxnQkFBRCxFQUFtQixFQUFuQixDQUFqQjtBQUNBLEtBQUssaURBQVksSUFBWixPQUFMLEMsQ0FFQTs7QUFFQSxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLDZCQUFELEVBQWdDLEVBQWhDLENBQVAsQ0FBeEI7QUFDQSxJQUFNLFdBQVcsR0FBRyxJQUFwQjs7QUFDQSxJQUFJLFFBQVEsQ0FBQyxTQUFELENBQVosRUFBeUI7QUFDeEIsRUFBQSxLQUFLLDBFQUFpQixXQUFXLEdBQUcsU0FBL0IsRUFBTDtBQUNBLENBRkQsTUFFTztBQUNQLEVBQUEsS0FBSyxDQUFDLGVBQUQsQ0FBTDtBQUNDLEMsQ0FFRDs7O0FBRUEsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLGtDQUFELEVBQXFDLEVBQXJDLENBQXZCO0FBQ0EsS0FBSyw4R0FBdUIsVUFBVSxHQUFHLENBQXBDLEVBQUwsQyxDQUVBOztBQUVBLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyw0QkFBRCxFQUErQixFQUEvQixDQUF6QjtBQUNBLEtBQUssb0hBQXdCLElBQUksQ0FBQyxLQUFMLENBQVksSUFBSSxDQUFDLEdBQUwsQ0FBUyxZQUFULEVBQXVCLENBQXZCLElBQTRCLElBQUksQ0FBQyxFQUFsQyxHQUF3QyxHQUFuRCxJQUEwRCxHQUFsRixFQUFMLEMsQ0FFQTs7QUFFQSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsaURBQUQsRUFBb0QsRUFBcEQsQ0FBckI7QUFDQSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMscUNBQUQsRUFBd0MsRUFBeEMsQ0FBakI7O0FBQ0EsSUFBSSxRQUFRLElBQUksSUFBWixJQUFvQixJQUFJLElBQUksSUFBaEMsRUFBc0M7QUFDdEMsRUFBQSxLQUFLLGdJQUEwQixJQUFJLENBQUMsS0FBTCxDQUFXLFFBQVEsR0FBRyxJQUF0QixDQUExQixzQ0FBTDtBQUNDLENBRkQsTUFFTztBQUNOLEVBQUEsS0FBSyxDQUFDLGtCQUFELENBQUw7QUFDQSxDLENBRUQ7OztBQUVBLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxzQ0FBRCxFQUF5QyxFQUF6QyxDQUFwQjtBQUNBLElBQU0sSUFBSSxHQUFHLEdBQWI7QUFDQSxLQUFLLHlFQUFnQixJQUFJLENBQUMsS0FBTCxDQUFXLE9BQU8sR0FBRyxJQUFWLEdBQWlCLEdBQTVCLElBQW1DLEdBQW5ELCtCQUFMLEMsQ0FFQTs7QUFFQSxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsbUNBQUQsRUFBc0MsRUFBdEMsQ0FBeEI7QUFDQSxLQUFLLHdFQUFlLElBQUksQ0FBQyxLQUFMLENBQVcsV0FBVyxHQUFHLElBQWQsR0FBcUIsR0FBaEMsQ0FBZiwyQ0FBTCxDLENBRUE7O0FBRUEsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLDRCQUFELEVBQStCLEVBQS9CLENBQXJCO0FBQ0EsSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLHVCQUFELEVBQTBCLEVBQTFCLENBQTNCO0FBQ0EsS0FBSyxrR0FBcUIsSUFBSSxDQUFDLEtBQUwsQ0FBVyxRQUFRLEdBQUcsY0FBdEIsQ0FBckIsNkpBQTBGLElBQUksQ0FBQyxLQUFMLENBQVksUUFBUSxHQUFHLGNBQVosR0FBOEIsR0FBekMsSUFBZ0QsR0FBMUksMkNBQUwsQyxDQUVBOztBQUVBLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQywyQkFBRCxFQUE4QixFQUE5QixDQUFoQjtBQUNBLElBQUksTUFBTSxHQUFHLEVBQWI7O0FBRUEsT0FBTyxHQUFHLEdBQUcsQ0FBYixFQUFnQjtBQUNmLEVBQUEsTUFBTSxJQUFLLEdBQUcsR0FBRyxFQUFqQjtBQUNBLEVBQUEsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsRUFBUCxDQUFkO0FBQ0E7O0FBQ0QsS0FBSyxDQUFDLFlBQVksTUFBYixDQUFMLEMsQ0FHQTs7QUFFQSxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsc0JBQUQsRUFBeUIsRUFBekIsQ0FBcEI7QUFDQSxJQUFNLEtBQUssR0FBRyxDQUFkO0FBQ0EsSUFBTSxPQUFPLEdBQUcsSUFBaEI7QUFDQSxLQUFLLGtMQUFvQyxJQUFJLENBQUMsS0FBTCxDQUFZLE9BQU8sR0FBRyxLQUFWLEdBQWtCLEVBQW5CLEdBQXlCLE9BQXpCLEdBQW1DLEdBQTlDLElBQXFELEdBQXpGLEVBQUwiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vPT09PT09PT09PT09PT09PT0xPT09PT09PT09PT09PT1cclxubGV0IG5hbWUgPSBwcm9tcHQoJ9Ca0LDQuiDQstCw0YEg0LfQvtCy0YPRgj8nLCAnJyk7XHJcbmFsZXJ0KGDQn9GA0LjQstC10YIsICR7bmFtZX0hYCk7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09Mj09PT09PT09PT09PT09PVxyXG5cclxubGV0IGJpcnRoWWVhciA9IHBhcnNlSW50KHByb21wdCgn0JLQstC10LTQuNGC0LUg0LPQvtC0INCy0LDRiNC10LPQviDRgNC+0LbQtNC10L3QuNGPJywgJycpKTtcclxuY29uc3QgY3VycmVudFllYXIgPSAyMDE5O1xyXG5pZiAoaXNGaW5pdGUoYmlydGhZZWFyKSkge1xyXG5cdGFsZXJ0KGDQktCw0Ygg0LLQvtC30YDQsNGB0YI6ICR7Y3VycmVudFllYXIgLSBiaXJ0aFllYXJ9YCk7XHJcbn0gZWxzZSB7XHJcbmFsZXJ0KCfQktCy0LXQtNC40YLQtSDRh9C40YHQu9C+Jyk7XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT0zPT09PT09PT09PT09PT09PVxyXG5cclxubGV0IHNpZGVMZW5ndGggPSBwcm9tcHQoJ9Cj0LrQsNC20LjRgtC1INC00LvQuNC90L3RgyDRgdGC0L7RgNC+0L3RiyDQutCy0LDQtNGA0LDRgtCwOicsICcnKTtcclxuYWxlcnQoYNCf0LXRgNC40LzQtdGC0YAg0LrQstCw0LTRgNCw0YLQsDogJHtzaWRlTGVuZ3RoICogNH1gKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT00PT09PT09PT09PT09PT09PVxyXG5cclxubGV0IGNpcmNsZVJhZGl1cyA9IHByb21wdCgn0KPQutCw0LbQuNGC0LUg0YDQsNC00LjRg9GBINC+0LrRgNGD0LbQvdC+0YHRgtC4OicsICcnKTtcclxuYWxlcnQoYNCf0LvQvtGJ0LDQtNGMINC+0LrRgNGD0LbQvdC+0YHRgtC4OiAke01hdGgucm91bmQoKE1hdGgucG93KGNpcmNsZVJhZGl1cywgMikgKiBNYXRoLlBJKSAqIDEwMCkgLyAxMDB9YCk7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09NT09PT09PT09PT09PT09PT1cclxuXHJcbmxldCBkaXN0YW5jZSA9IHByb21wdCgn0KPQutCw0LbQuNGC0LUg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LIg0LrQuNC70L7QvNC10YLRgNCw0YUg0LzQtdC20LTRgyDQs9C+0YDQvtC00LDQvNC4OicsICcnKTtcclxubGV0IHRpbWUgPSBwcm9tcHQoJ9Cj0LrQsNC20LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INGH0LDRgdC+0LIg0L3QsCDQtNC+0YDQvtCz0YM6JywgJycpO1xyXG5pZiAoZGlzdGFuY2UgIT0gbnVsbCAmJiB0aW1lICE9IG51bGwpIHtcclxuYWxlcnQoYNCd0LXQvtCx0YXQvtC00LjQvNCw0Y8g0YHQutC+0YDQvtGB0YLRjDogJHtNYXRoLnJvdW5kKGRpc3RhbmNlIC8gdGltZSl9INC60Lwv0YfQsNGBYCk7XHJcbn0gZWxzZSB7XHJcblx0YWxlcnQoJ9CS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LUnKTtcclxufVxyXG5cclxuLy89PT09PT09PT09PT09PT09PTY9PT09PT09PT09PT09PT09XHJcblxyXG5sZXQgZG9sbGFycyA9IHByb21wdCgn0KHQutC+0LvRjNC60L4g0LTQvtC70LvQsNGA0L7QsiDQstGLINGF0L7RgtC40YLQtSDQvtCx0LzQtdC90Y/RgtGMPycsICcnKTtcclxuY29uc3QgcmF0ZSA9IDEuMTtcclxuYWxlcnQoYNCS0Ysg0L/QvtC70YPRh9C40YLQtSAke01hdGgucm91bmQoZG9sbGFycyAqIHJhdGUgKiAxMDApIC8gMTAwfSDQtdCy0YDQvmApO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PTc9PT09PT09PT09PT09PT09XHJcblxyXG5sZXQgZmxhc2hNZW1vcnkgPSBwcm9tcHQoJ9Cj0LrQsNC20LjRgtC1INC+0LHRjNC10Lwg0YTQu9C10YjQutC4INCyINCz0LjQs9Cw0LHQsNC50YLQsNGFJywgJycpO1xyXG5hbGVydChg0J/QvtC80LXRidCw0LXRgtGB0Y8gJHtNYXRoLmZsb29yKGZsYXNoTWVtb3J5ICogMTAyNCAvIDgyMCl9INGE0LDQudC70L7QsmApO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PTg9PT09PT09PT09PT09PT09XHJcblxyXG5sZXQgbW9uZXlTdW0gPSBwcm9tcHQoJ9Ch0LrQvtC70YzQutC+INCz0YDQuNCy0LXQvSDRgyDQstCw0YEg0LXRgdGC0Yw/JywgJycpO1xyXG5sZXQgY2hvY29sYXRlUHJpY2UgPSBwcm9tcHQoJ9Ca0LDQutCw0Y8g0YbQtdC90LAg0YjQvtC60L7Qu9Cw0LTQutC4PycsICcnKTtcclxuYWxlcnQoYNCS0Ysg0LzQvtC20LXRgtC1INC60YPQv9C40YLRjCAke01hdGguZmxvb3IobW9uZXlTdW0gLyBjaG9jb2xhdGVQcmljZSl9INGI0L7QutC+0LvQsNC00L7QuiDQuCDRgyDQstCw0YEg0L7RgdGC0LDQvdC10YLRgdGPICR7TWF0aC5yb3VuZCgobW9uZXlTdW0gJSBjaG9jb2xhdGVQcmljZSkgKiAxMDApIC8gMTAwfSDQs9GA0LjQstC10L1gKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT05PT09PT09PT09PT09PT09PVxyXG5cclxubGV0IG51bSA9IHByb21wdCgn0JLQstC10LTQuNGC0LUg0YLRgNC10YXQt9C90LDRh9C90L7QtSDRh9C40YHQu9C+JywgJycpO1xyXG5sZXQgcmVzdWx0ID0gJyc7XHJcblxyXG53aGlsZSAobnVtID4gMCkge1xyXG5cdHJlc3VsdCArPSAobnVtICUgMTApO1xyXG5cdG51bSA9IHBhcnNlSW50KG51bSAvIDEwKTtcclxufVxyXG5hbGVydCgn0KfQuNGB0LvQvjogJyArIHJlc3VsdCk7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PTEwPT09PT09PT09PT09PT09PVxyXG5cclxubGV0IGRlcG9zaXQgPSBwcm9tcHQoJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LLQutC70LDQtNCwJywgJycpO1xyXG5jb25zdCBtb250aCA9IDI7XHJcbmNvbnN0IHBlcmNlbnQgPSAwLjA1O1xyXG5hbGVydChg0KHRg9C80LzQsCDQvdCw0YfQuNGB0LvQtdC90L3QsNGPINC/0L4g0L/RgNC+0YbQtdC90YLQsNC8OiAke01hdGguZmxvb3IoKGRlcG9zaXQgKiBtb250aCAvIDEyKSAqIHBlcmNlbnQgKiAxMDApIC8gMTAwfWApO1xyXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSndjbTlxWldOMGN5OHlNbDlwYm5SeWIxOXFjeTl6Y21NdmFuTXZZWEJ3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3UVVOQlFUdEJRVU5CTEVsQlFVa3NTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhuUWtGQlJDeEZRVUZ0UWl4RlFVRnVRaXhEUVVGcVFqdEJRVU5CTEV0QlFVc3NhVVJCUVZrc1NVRkJXaXhQUVVGTUxFTXNRMEZGUVRzN1FVRkZRU3hKUVVGSkxGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRFpDUVVGRUxFVkJRV2RETEVWQlFXaERMRU5CUVZBc1EwRkJlRUk3UVVGRFFTeEpRVUZOTEZkQlFWY3NSMEZCUnl4SlFVRndRanM3UVVGRFFTeEpRVUZKTEZGQlFWRXNRMEZCUXl4VFFVRkVMRU5CUVZvc1JVRkJlVUk3UVVGRGVFSXNSVUZCUVN4TFFVRkxMREJGUVVGcFFpeFhRVUZYTEVkQlFVY3NVMEZCTDBJc1JVRkJURHRCUVVOQkxFTkJSa1FzVFVGRlR6dEJRVU5RTEVWQlFVRXNTMEZCU3l4RFFVRkRMR1ZCUVVRc1EwRkJURHRCUVVORExFTXNRMEZGUkRzN08wRkJSVUVzU1VGQlNTeFZRVUZWTEVkQlFVY3NUVUZCVFN4RFFVRkRMR3REUVVGRUxFVkJRWEZETEVWQlFYSkRMRU5CUVhaQ08wRkJRMEVzUzBGQlN5dzRSMEZCZFVJc1ZVRkJWU3hIUVVGSExFTkJRWEJETEVWQlFVd3NReXhEUVVWQk96dEJRVVZCTEVsQlFVa3NXVUZCV1N4SFFVRkhMRTFCUVUwc1EwRkJReXcwUWtGQlJDeEZRVUVyUWl4RlFVRXZRaXhEUVVGNlFqdEJRVU5CTEV0QlFVc3NiMGhCUVhkQ0xFbEJRVWtzUTBGQlF5eExRVUZNTEVOQlFWa3NTVUZCU1N4RFFVRkRMRWRCUVV3c1EwRkJVeXhaUVVGVUxFVkJRWFZDTEVOQlFYWkNMRWxCUVRSQ0xFbEJRVWtzUTBGQlF5eEZRVUZzUXl4SFFVRjNReXhIUVVGdVJDeEpRVUV3UkN4SFFVRnNSaXhGUVVGTUxFTXNRMEZGUVRzN1FVRkZRU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNhVVJCUVVRc1JVRkJiMFFzUlVGQmNFUXNRMEZCY2tJN1FVRkRRU3hKUVVGSkxFbEJRVWtzUjBGQlJ5eE5RVUZOTEVOQlFVTXNjVU5CUVVRc1JVRkJkME1zUlVGQmVFTXNRMEZCYWtJN08wRkJRMEVzU1VGQlNTeFJRVUZSTEVsQlFVa3NTVUZCV2l4SlFVRnZRaXhKUVVGSkxFbEJRVWtzU1VGQmFFTXNSVUZCYzBNN1FVRkRkRU1zUlVGQlFTeExRVUZMTEdkSlFVRXdRaXhKUVVGSkxFTkJRVU1zUzBGQlRDeERRVUZYTEZGQlFWRXNSMEZCUnl4SlFVRjBRaXhEUVVFeFFpeHpRMEZCVER0QlFVTkRMRU5CUmtRc1RVRkZUenRCUVVOT0xFVkJRVUVzUzBGQlN5eERRVUZETEd0Q1FVRkVMRU5CUVV3N1FVRkRRU3hETEVOQlJVUTdPenRCUVVWQkxFbEJRVWtzVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4elEwRkJSQ3hGUVVGNVF5eEZRVUY2UXl4RFFVRndRanRCUVVOQkxFbEJRVTBzU1VGQlNTeEhRVUZITEVkQlFXSTdRVUZEUVN4TFFVRkxMSGxGUVVGblFpeEpRVUZKTEVOQlFVTXNTMEZCVEN4RFFVRlhMRTlCUVU4c1IwRkJSeXhKUVVGV0xFZEJRV2xDTEVkQlFUVkNMRWxCUVcxRExFZEJRVzVFTEN0Q1FVRk1MRU1zUTBGRlFUczdRVUZGUVN4SlFVRkpMRmRCUVZjc1IwRkJSeXhOUVVGTkxFTkJRVU1zYlVOQlFVUXNSVUZCYzBNc1JVRkJkRU1zUTBGQmVFSTdRVUZEUVN4TFFVRkxMSGRGUVVGbExFbEJRVWtzUTBGQlF5eExRVUZNTEVOQlFWY3NWMEZCVnl4SFFVRkhMRWxCUVdRc1IwRkJjVUlzUjBGQmFFTXNRMEZCWml3eVEwRkJUQ3hETEVOQlJVRTdPMEZCUlVFc1NVRkJTU3hSUVVGUkxFZEJRVWNzVFVGQlRTeERRVUZETERSQ1FVRkVMRVZCUVN0Q0xFVkJRUzlDTEVOQlFYSkNPMEZCUTBFc1NVRkJTU3hqUVVGakxFZEJRVWNzVFVGQlRTeERRVUZETEhWQ1FVRkVMRVZCUVRCQ0xFVkJRVEZDTEVOQlFUTkNPMEZCUTBFc1MwRkJTeXhyUjBGQmNVSXNTVUZCU1N4RFFVRkRMRXRCUVV3c1EwRkJWeXhSUVVGUkxFZEJRVWNzWTBGQmRFSXNRMEZCY2tJc05rcEJRVEJHTEVsQlFVa3NRMEZCUXl4TFFVRk1MRU5CUVZrc1VVRkJVU3hIUVVGSExHTkJRVm9zUjBGQk9FSXNSMEZCZWtNc1NVRkJaMFFzUjBGQk1Va3NNa05CUVV3c1F5eERRVVZCT3p0QlFVVkJMRWxCUVVrc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5d3lRa0ZCUkN4RlFVRTRRaXhGUVVFNVFpeERRVUZvUWp0QlFVTkJMRWxCUVVrc1RVRkJUU3hIUVVGSExFVkJRV0k3TzBGQlJVRXNUMEZCVHl4SFFVRkhMRWRCUVVjc1EwRkJZaXhGUVVGblFqdEJRVU5tTEVWQlFVRXNUVUZCVFN4SlFVRkxMRWRCUVVjc1IwRkJSeXhGUVVGcVFqdEJRVU5CTEVWQlFVRXNSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlVDeERRVUZrTzBGQlEwRTdPMEZCUTBRc1MwRkJTeXhEUVVGRExGbEJRVmtzVFVGQllpeERRVUZNTEVNc1EwRkhRVHM3UVVGRlFTeEpRVUZKTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc2MwSkJRVVFzUlVGQmVVSXNSVUZCZWtJc1EwRkJjRUk3UVVGRFFTeEpRVUZOTEV0QlFVc3NSMEZCUnl4RFFVRmtPMEZCUTBFc1NVRkJUU3hQUVVGUExFZEJRVWNzU1VGQmFFSTdRVUZEUVN4TFFVRkxMR3RNUVVGdlF5eEpRVUZKTEVOQlFVTXNTMEZCVEN4RFFVRlpMRTlCUVU4c1IwRkJSeXhMUVVGV0xFZEJRV3RDTEVWQlFXNUNMRWRCUVhsQ0xFOUJRWHBDTEVkQlFXMURMRWRCUVRsRExFbEJRWEZFTEVkQlFYcEdMRVZCUVV3aUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaWdwZTJaMWJtTjBhVzl1SUhJb1pTeHVMSFFwZTJaMWJtTjBhVzl1SUc4b2FTeG1LWHRwWmlnaGJsdHBYU2w3YVdZb0lXVmJhVjBwZTNaaGNpQmpQVndpWm5WdVkzUnBiMjVjSWowOWRIbHdaVzltSUhKbGNYVnBjbVVtSm5KbGNYVnBjbVU3YVdZb0lXWW1KbU1wY21WMGRYSnVJR01vYVN3aE1DazdhV1lvZFNseVpYUjFjbTRnZFNocExDRXdLVHQyWVhJZ1lUMXVaWGNnUlhKeWIzSW9YQ0pEWVc1dWIzUWdabWx1WkNCdGIyUjFiR1VnSjF3aUsya3JYQ0luWENJcE8zUm9jbTkzSUdFdVkyOWtaVDFjSWsxUFJGVk1SVjlPVDFSZlJrOVZUa1JjSWl4aGZYWmhjaUJ3UFc1YmFWMDllMlY0Y0c5eWRITTZlMzE5TzJWYmFWMWJNRjB1WTJGc2JDaHdMbVY0Y0c5eWRITXNablZ1WTNScGIyNG9jaWw3ZG1GeUlHNDlaVnRwWFZzeFhWdHlYVHR5WlhSMWNtNGdieWh1Zkh4eUtYMHNjQ3h3TG1WNGNHOXlkSE1zY2l4bExHNHNkQ2w5Y21WMGRYSnVJRzViYVYwdVpYaHdiM0owYzMxbWIzSW9kbUZ5SUhVOVhDSm1kVzVqZEdsdmJsd2lQVDEwZVhCbGIyWWdjbVZ4ZFdseVpTWW1jbVZ4ZFdseVpTeHBQVEE3YVR4MExteGxibWQwYUR0cEt5c3BieWgwVzJsZEtUdHlaWFIxY200Z2IzMXlaWFIxY200Z2NuMHBLQ2tpTENJdkx6MDlQVDA5UFQwOVBUMDlQVDA5UFQwOU1UMDlQVDA5UFQwOVBUMDlQVDA5WEhKY2JteGxkQ0J1WVcxbElEMGdjSEp2YlhCMEtDZlFtdEN3MExvZzBMTFFzTkdCSU5DMzBMN1FzdEdEMFlJL0p5d2dKeWNwTzF4eVhHNWhiR1Z5ZENoZzBKL1JnTkM0MExMUXRkR0NMQ0FrZTI1aGJXVjlJV0FwTzF4eVhHNWNjbHh1THk4OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFRJOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVhISmNibXhsZENCaWFYSjBhRmxsWVhJZ1BTQndZWEp6WlVsdWRDaHdjbTl0Y0hRb0o5Q1MwTExRdGRDMDBMalJndEMxSU5DejBMN1F0Q0RRc3RDdzBZalF0ZEN6MEw0ZzBZRFF2dEMyMExUUXRkQzkwTGpSanljc0lDY25LU2s3WEhKY2JtTnZibk4wSUdOMWNuSmxiblJaWldGeUlEMGdNakF4T1R0Y2NseHVhV1lnS0dselJtbHVhWFJsS0dKcGNuUm9XV1ZoY2lrcElIdGNjbHh1WEhSaGJHVnlkQ2hnMEpMUXNOR0lJTkN5MEw3UXQ5R0EwTERSZ2RHQ09pQWtlMk4xY25KbGJuUlpaV0Z5SUMwZ1ltbHlkR2haWldGeWZXQXBPMXh5WEc1OUlHVnNjMlVnZTF4eVhHNWhiR1Z5ZENnbjBKTFFzdEMxMExUUXVOR0MwTFVnMFlmUXVOR0IwTHZRdmljcE8xeHlYRzU5WEhKY2JseHlYRzR2THowOVBUMDlQVDA5UFQwOVBUMDlQVDA5TXowOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVhISmNibXhsZENCemFXUmxUR1Z1WjNSb0lEMGdjSEp2YlhCMEtDZlFvOUM2MExEUXR0QzQwWUxRdFNEUXROQzcwTGpRdmRDOTBZTWcwWUhSZ3RDKzBZRFF2dEM5MFlzZzBMclFzdEN3MExUUmdOQ3cwWUxRc0RvbkxDQW5KeWs3WEhKY2JtRnNaWEowS0dEUW45QzEwWURRdU5DODBMWFJndEdBSU5DNjBMTFFzTkMwMFlEUXNOR0MwTEE2SUNSN2MybGtaVXhsYm1kMGFDQXFJRFI5WUNrN1hISmNibHh5WEc0dkx6MDlQVDA5UFQwOVBUMDlQVDA5UFQwOU5EMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVYSEpjYm14bGRDQmphWEpqYkdWU1lXUnBkWE1nUFNCd2NtOXRjSFFvSjlDajBMclFzTkMyMExqUmd0QzFJTkdBMExEUXROQzQwWVBSZ1NEUXZ0QzYwWURSZzlDMjBMM1F2dEdCMFlMUXVEb25MQ0FuSnlrN1hISmNibUZzWlhKMEtHRFFuOUM3MEw3UmlkQ3cwTFRSakNEUXZ0QzYwWURSZzlDMjBMM1F2dEdCMFlMUXVEb2dKSHROWVhSb0xuSnZkVzVrS0NoTllYUm9MbkJ2ZHloamFYSmpiR1ZTWVdScGRYTXNJRElwSUNvZ1RXRjBhQzVRU1NrZ0tpQXhNREFwSUM4Z01UQXdmV0FwTzF4eVhHNWNjbHh1THk4OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFRVOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEhKY2JseHlYRzVzWlhRZ1pHbHpkR0Z1WTJVZ1BTQndjbTl0Y0hRb0o5Q2owTHJRc05DMjBMalJndEMxSU5HQTBMRFJnZEdCMFlMUXZ0R1AwTDNRdU5DMUlOQ3lJTkM2MExqUXU5QyswTHpRdGRHQzBZRFFzTkdGSU5DODBMWFF0dEMwMFlNZzBMUFF2dEdBMEw3UXROQ3cwTHpRdURvbkxDQW5KeWs3WEhKY2JteGxkQ0IwYVcxbElEMGdjSEp2YlhCMEtDZlFvOUM2MExEUXR0QzQwWUxRdFNEUXV0QyswTHZRdU5HSDBMWFJnZEdDMExMUXZpRFJoOUN3MFlIUXZ0Q3lJTkM5MExBZzBMVFF2dEdBMEw3UXM5R0RPaWNzSUNjbktUdGNjbHh1YVdZZ0tHUnBjM1JoYm1ObElDRTlJRzUxYkd3Z0ppWWdkR2x0WlNBaFBTQnVkV3hzS1NCN1hISmNibUZzWlhKMEtHRFFuZEMxMEw3UXNkR0YwTDdRdE5DNDBMelFzTkdQSU5HQjBMclF2dEdBMEw3UmdkR0MwWXc2SUNSN1RXRjBhQzV5YjNWdVpDaGthWE4wWVc1alpTQXZJSFJwYldVcGZTRFF1dEM4TDlHSDBMRFJnV0FwTzF4eVhHNTlJR1ZzYzJVZ2UxeHlYRzVjZEdGc1pYSjBLQ2ZRa3RDeTBMWFF0TkM0MFlMUXRTRFF0OUM5MExEUmg5QzEwTDNRdU5DMUp5azdYSEpjYm4xY2NseHVYSEpjYmk4dlBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwMlBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNWNjbHh1YkdWMElHUnZiR3hoY25NZ1BTQndjbTl0Y0hRb0o5Q2gwTHJRdnRDNzBZelF1dEMrSU5DMDBMN1F1OUM3MExEUmdOQyswTElnMExMUml5RFJoZEMrMFlMUXVOR0MwTFVnMEw3UXNkQzgwTFhRdmRHUDBZTFJqRDhuTENBbkp5azdYSEpjYm1OdmJuTjBJSEpoZEdVZ1BTQXhMakU3WEhKY2JtRnNaWEowS0dEUWt0R0xJTkMvMEw3UXU5R0QwWWZRdU5HQzBMVWdKSHROWVhSb0xuSnZkVzVrS0dSdmJHeGhjbk1nS2lCeVlYUmxJQ29nTVRBd0tTQXZJREV3TUgwZzBMWFFzdEdBMEw1Z0tUdGNjbHh1WEhKY2JpOHZQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDNQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzVjY2x4dWJHVjBJR1pzWVhOb1RXVnRiM0o1SUQwZ2NISnZiWEIwS0NmUW85QzYwTERRdHRDNDBZTFF0U0RRdnRDeDBZelF0ZEM4SU5HRTBMdlF0ZEdJMExyUXVDRFFzaURRczlDNDBMUFFzTkN4MExEUXVkR0MwTERSaFNjc0lDY25LVHRjY2x4dVlXeGxjblFvWU5DZjBMN1F2TkMxMFluUXNOQzEwWUxSZ2RHUElDUjdUV0YwYUM1bWJHOXZjaWhtYkdGemFFMWxiVzl5ZVNBcUlERXdNalFnTHlBNE1qQXBmU0RSaE5DdzBMblF1OUMrMExKZ0tUdGNjbHh1WEhKY2JpOHZQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDRQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzVjY2x4dWJHVjBJRzF2Ym1WNVUzVnRJRDBnY0hKdmJYQjBLQ2ZRb2RDNjBMN1F1OUdNMExyUXZpRFFzOUdBMExqUXN0QzEwTDBnMFlNZzBMTFFzTkdCSU5DMTBZSFJndEdNUHljc0lDY25LVHRjY2x4dWJHVjBJR05vYjJOdmJHRjBaVkJ5YVdObElEMGdjSEp2YlhCMEtDZlFtdEN3MExyUXNOR1BJTkdHMExYUXZkQ3dJTkdJMEw3UXV0QyswTHZRc05DMDBMclF1RDhuTENBbkp5azdYSEpjYm1Gc1pYSjBLR0RRa3RHTElOQzgwTDdRdHRDMTBZTFF0U0RRdXRHRDBML1F1TkdDMFl3Z0pIdE5ZWFJvTG1ac2IyOXlLRzF2Ym1WNVUzVnRJQzhnWTJodlkyOXNZWFJsVUhKcFkyVXBmU0RSaU5DKzBMclF2dEM3MExEUXROQyswTG9nMExnZzBZTWcwTExRc05HQklOQyswWUhSZ3RDdzBMM1F0ZEdDMFlIUmp5QWtlMDFoZEdndWNtOTFibVFvS0cxdmJtVjVVM1Z0SUNVZ1kyaHZZMjlzWVhSbFVISnBZMlVwSUNvZ01UQXdLU0F2SURFd01IMGcwTFBSZ05DNDBMTFF0ZEM5WUNrN1hISmNibHh5WEc0dkx6MDlQVDA5UFQwOVBUMDlQVDA5UFQwOU9UMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVYSEpjYm14bGRDQnVkVzBnUFNCd2NtOXRjSFFvSjlDUzBMTFF0ZEMwMExqUmd0QzFJTkdDMFlEUXRkR0YwTGZRdmRDdzBZZlF2ZEMrMExVZzBZZlF1TkdCMEx2UXZpY3NJQ2NuS1R0Y2NseHViR1YwSUhKbGMzVnNkQ0E5SUNjbk8xeHlYRzVjY2x4dWQyaHBiR1VnS0c1MWJTQStJREFwSUh0Y2NseHVYSFJ5WlhOMWJIUWdLejBnS0c1MWJTQWxJREV3S1R0Y2NseHVYSFJ1ZFcwZ1BTQndZWEp6WlVsdWRDaHVkVzBnTHlBeE1DazdYSEpjYm4xY2NseHVZV3hsY25Rb0o5Q24wTGpSZ2RDNzBMNDZJQ2NnS3lCeVpYTjFiSFFwTzF4eVhHNWNjbHh1WEhKY2JpOHZQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHhNRDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1WEhKY2JteGxkQ0JrWlhCdmMybDBJRDBnY0hKdmJYQjBLQ2ZRa3RDeTBMWFF0TkM0MFlMUXRTRFJnZEdEMEx6UXZOR0RJTkN5MExyUXU5Q3cwTFRRc0Njc0lDY25LVHRjY2x4dVkyOXVjM1FnYlc5dWRHZ2dQU0F5TzF4eVhHNWpiMjV6ZENCd1pYSmpaVzUwSUQwZ01DNHdOVHRjY2x4dVlXeGxjblFvWU5DaDBZUFF2TkM4MExBZzBMM1FzTkdIMExqUmdkQzcwTFhRdmRDOTBMRFJqeURRdjlDK0lOQy8wWURRdnRHRzBMWFF2ZEdDMExEUXZEb2dKSHROWVhSb0xtWnNiMjl5S0Noa1pYQnZjMmwwSUNvZ2JXOXVkR2dnTHlBeE1pa2dLaUJ3WlhKalpXNTBJQ29nTVRBd0tTQXZJREV3TUgxZ0tUdGNjbHh1SWwxOSJ9
