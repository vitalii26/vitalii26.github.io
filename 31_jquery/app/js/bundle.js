(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(".tabs__item").not(":first").hide();
$(".tabs__btn").click(function () {
  $(".tabs__btn").removeClass("active").eq($(this).index()).addClass("active");
  $(".tabs__item").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("active");
$('.tabs__icons-star:lt(4)').addClass("active"); //////////////Rating bar set///

var circle = document.querySelector('.progress-ring__circle-border');
var radius = circle.r.baseVal.value;
var circleLength = 2 * Math.PI * radius;
circle.style.strokeDasharray = "".concat(circleLength, " ").concat(circleLength);
circle.style.strokeDasharray = circleLength;

function setRating(rating) {
  var offset = circleLength - +rating / 10 * circleLength;
  circle.style.strokeDashoffset = offset;
}

var ratingVal = document.querySelector('.rating-value').innerHTML;
setRating(ratingVal); /////////////calculator///////

var calc = $('.calculator');
var calcDisplay = $('.calculator__display');
var calcKeys = $('.calculator__key');
var calcButton = $('.calculator__button');
var calcClear = $('.calculator__clear');
var calcEqual = $('.calculator__key-equal');
var calcPower = $('.calculator__power');
var calcSpace = $('.calculator__backspace');
calcKeys.each(function () {
  var current = $(this).attr('value');
  $(this).text(current);
});
calcButton.on('click', function () {
  calcDisplay.val(calcDisplay.val() + $(this).attr('value'));
});
calcClear.on('click', function () {
  calcDisplay.val('');
});
calcEqual.on('click', function () {
  calcDisplay.val(eval(calcDisplay.val()));
});
calcPower.on('click', function () {
  calcDisplay.val(Math.pow(calcDisplay.val(), 3));
});
calcSpace.on('click', function () {
  calcDisplay.val(calcDisplay.val().substring(0, calcDisplay.val().length - 1));
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy8zMV9qcXVlcnkvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixHQUFqQixDQUFxQixRQUFyQixFQUErQixJQUEvQjtBQUNBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsS0FBaEIsQ0FBc0IsWUFBVztBQUNoQyxFQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsV0FBaEIsQ0FBNEIsUUFBNUIsRUFBc0MsRUFBdEMsQ0FBeUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLEtBQVIsRUFBekMsRUFBMEQsUUFBMUQsQ0FBbUUsUUFBbkU7QUFDQSxFQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsSUFBakIsR0FBd0IsRUFBeEIsQ0FBMkIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLEtBQVIsRUFBM0IsRUFBNEMsTUFBNUM7QUFDQSxDQUhELEVBR0csRUFISCxDQUdNLENBSE4sRUFHUyxRQUhULENBR2tCLFFBSGxCO0FBS0EsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIsUUFBN0IsQ0FBc0MsUUFBdEMsRSxDQUNBOztBQUNBLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLCtCQUF2QixDQUFmO0FBQ0EsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQVAsQ0FBUyxPQUFULENBQWlCLEtBQWhDO0FBQ0EsSUFBTSxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBVCxHQUFjLE1BQW5DO0FBRUEsTUFBTSxDQUFDLEtBQVAsQ0FBYSxlQUFiLGFBQWtDLFlBQWxDLGNBQWtELFlBQWxEO0FBQ0EsTUFBTSxDQUFDLEtBQVAsQ0FBYSxlQUFiLEdBQStCLFlBQS9COztBQUdBLFNBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQjtBQUMxQixNQUFNLE1BQU0sR0FBRyxZQUFZLEdBQUksQ0FBQyxNQUFELEdBQVUsRUFBVixHQUFlLFlBQTlDO0FBQ0EsRUFBQSxNQUFNLENBQUMsS0FBUCxDQUFhLGdCQUFiLEdBQWdDLE1BQWhDO0FBQ0E7O0FBRUQsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0MsU0FBMUQ7QUFDQSxTQUFTLENBQUMsU0FBRCxDQUFULEMsQ0FDQTs7QUFDSSxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFkO0FBQ0EsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLHNCQUFELENBQXJCO0FBQ0EsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLGtCQUFELENBQWxCO0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLHFCQUFELENBQXBCO0FBQ0EsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLG9CQUFELENBQW5CO0FBQ0EsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLHdCQUFELENBQW5CO0FBQ0EsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLG9CQUFELENBQW5CO0FBQ0EsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLHdCQUFELENBQW5CO0FBRUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxZQUFZO0FBQ3RCLE1BQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsT0FBYixDQUFkO0FBQ0EsRUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLE9BQWI7QUFDSCxDQUhEO0FBS0EsVUFBVSxDQUFDLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFlBQVk7QUFDL0IsRUFBQSxXQUFXLENBQUMsR0FBWixDQUFnQixXQUFXLENBQUMsR0FBWixLQUFvQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLE9BQWIsQ0FBcEM7QUFDSCxDQUZEO0FBSUEsU0FBUyxDQUFDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFlBQVk7QUFDOUIsRUFBQSxXQUFXLENBQUMsR0FBWixDQUFnQixFQUFoQjtBQUNILENBRkQ7QUFJQSxTQUFTLENBQUMsRUFBVixDQUFhLE9BQWIsRUFBc0IsWUFBWTtBQUM5QixFQUFBLFdBQVcsQ0FBQyxHQUFaLENBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBWixFQUFELENBQXBCO0FBQ0gsQ0FGRDtBQUlBLFNBQVMsQ0FBQyxFQUFWLENBQWEsT0FBYixFQUFzQixZQUFZO0FBQzlCLEVBQUEsV0FBVyxDQUFDLEdBQVosQ0FBZ0IsSUFBSSxDQUFDLEdBQUwsQ0FBUyxXQUFXLENBQUMsR0FBWixFQUFULEVBQTRCLENBQTVCLENBQWhCO0FBQ0gsQ0FGRDtBQUlBLFNBQVMsQ0FBQyxFQUFWLENBQWEsT0FBYixFQUFzQixZQUFZO0FBQzlCLEVBQUEsV0FBVyxDQUFDLEdBQVosQ0FBZ0IsV0FBVyxDQUFDLEdBQVosR0FBa0IsU0FBbEIsQ0FBNEIsQ0FBNUIsRUFBK0IsV0FBVyxDQUFDLEdBQVosR0FBa0IsTUFBbEIsR0FBeUIsQ0FBeEQsQ0FBaEI7QUFDSCxDQUZEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKFwiLnRhYnNfX2l0ZW1cIikubm90KFwiOmZpcnN0XCIpLmhpZGUoKTtcclxuJChcIi50YWJzX19idG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0JChcIi50YWJzX19idG5cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuZXEoJCh0aGlzKS5pbmRleCgpKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHQkKFwiLnRhYnNfX2l0ZW1cIikuaGlkZSgpLmVxKCQodGhpcykuaW5kZXgoKSkuZmFkZUluKClcclxufSkuZXEoMCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4kKCcudGFic19faWNvbnMtc3RhcjpsdCg0KScpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4vLy8vLy8vLy8vLy8vL1JhdGluZyBiYXIgc2V0Ly8vXHJcbmNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1yaW5nX19jaXJjbGUtYm9yZGVyJyk7XHJcbmNvbnN0IHJhZGl1cyA9IGNpcmNsZS5yLmJhc2VWYWwudmFsdWU7XHJcbmNvbnN0IGNpcmNsZUxlbmd0aCA9IDIgKiBNYXRoLlBJICogcmFkaXVzO1xyXG5cclxuY2lyY2xlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGAke2NpcmNsZUxlbmd0aH0gJHtjaXJjbGVMZW5ndGh9YDtcclxuY2lyY2xlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGNpcmNsZUxlbmd0aDtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRSYXRpbmcocmF0aW5nKSB7XHJcblx0Y29uc3Qgb2Zmc2V0ID0gY2lyY2xlTGVuZ3RoIC0gKCtyYXRpbmcgLyAxMCAqIGNpcmNsZUxlbmd0aCk7XHJcblx0Y2lyY2xlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBvZmZzZXQ7XHJcbn1cclxuXHJcbmNvbnN0IHJhdGluZ1ZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYXRpbmctdmFsdWUnKS5pbm5lckhUTUw7XHJcbnNldFJhdGluZyhyYXRpbmdWYWwpO1xyXG4vLy8vLy8vLy8vLy8vY2FsY3VsYXRvci8vLy8vLy9cclxuICAgIGNvbnN0IGNhbGMgPSAkKCcuY2FsY3VsYXRvcicpO1xyXG4gICAgY29uc3QgY2FsY0Rpc3BsYXkgPSAkKCcuY2FsY3VsYXRvcl9fZGlzcGxheScpO1xyXG4gICAgY29uc3QgY2FsY0tleXMgPSAkKCcuY2FsY3VsYXRvcl9fa2V5Jyk7XHJcbiAgICBjb25zdCBjYWxjQnV0dG9uID0gJCgnLmNhbGN1bGF0b3JfX2J1dHRvbicpO1xyXG4gICAgY29uc3QgY2FsY0NsZWFyID0gJCgnLmNhbGN1bGF0b3JfX2NsZWFyJyk7XHJcbiAgICBjb25zdCBjYWxjRXF1YWwgPSAkKCcuY2FsY3VsYXRvcl9fa2V5LWVxdWFsJyk7XHJcbiAgICBjb25zdCBjYWxjUG93ZXIgPSAkKCcuY2FsY3VsYXRvcl9fcG93ZXInKTtcclxuICAgIGNvbnN0IGNhbGNTcGFjZSA9ICQoJy5jYWxjdWxhdG9yX19iYWNrc3BhY2UnKTtcclxuXHJcbiAgICBjYWxjS2V5cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9ICQodGhpcykuYXR0cigndmFsdWUnKTtcclxuICAgICAgICAkKHRoaXMpLnRleHQoY3VycmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYWxjQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYWxjRGlzcGxheS52YWwoY2FsY0Rpc3BsYXkudmFsKCkgKyAkKHRoaXMpLmF0dHIoJ3ZhbHVlJykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2FsY0NsZWFyLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYWxjRGlzcGxheS52YWwoJycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2FsY0VxdWFsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYWxjRGlzcGxheS52YWwoZXZhbChjYWxjRGlzcGxheS52YWwoKSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2FsY1Bvd2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYWxjRGlzcGxheS52YWwoTWF0aC5wb3coY2FsY0Rpc3BsYXkudmFsKCksIDMpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNhbGNTcGFjZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FsY0Rpc3BsYXkudmFsKGNhbGNEaXNwbGF5LnZhbCgpLnN1YnN0cmluZygwLCBjYWxjRGlzcGxheS52YWwoKS5sZW5ndGgtMSkpO1xyXG4gICAgfSk7Il0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTh6TVY5cWNYVmxjbmt2YzNKakwycHpMMkZ3Y0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3TzBGRFFVRXNRMEZCUXl4RFFVRkRMR0ZCUVVRc1EwRkJSQ3hEUVVGcFFpeEhRVUZxUWl4RFFVRnhRaXhSUVVGeVFpeEZRVUVyUWl4SlFVRXZRanRCUVVOQkxFTkJRVU1zUTBGQlF5eFpRVUZFTEVOQlFVUXNRMEZCWjBJc1MwRkJhRUlzUTBGQmMwSXNXVUZCVnp0QlFVTm9ReXhGUVVGQkxFTkJRVU1zUTBGQlF5eFpRVUZFTEVOQlFVUXNRMEZCWjBJc1YwRkJhRUlzUTBGQk5FSXNVVUZCTlVJc1JVRkJjME1zUlVGQmRFTXNRMEZCZVVNc1EwRkJReXhEUVVGRExFbEJRVVFzUTBGQlJDeERRVUZSTEV0QlFWSXNSVUZCZWtNc1JVRkJNRVFzVVVGQk1VUXNRMEZCYlVVc1VVRkJia1U3UVVGRFFTeEZRVUZCTEVOQlFVTXNRMEZCUXl4aFFVRkVMRU5CUVVRc1EwRkJhVUlzU1VGQmFrSXNSMEZCZDBJc1JVRkJlRUlzUTBGQk1rSXNRMEZCUXl4RFFVRkRMRWxCUVVRc1EwRkJSQ3hEUVVGUkxFdEJRVklzUlVGQk0wSXNSVUZCTkVNc1RVRkJOVU03UVVGRFFTeERRVWhFTEVWQlIwY3NSVUZJU0N4RFFVZE5MRU5CU0U0c1JVRkhVeXhSUVVoVUxFTkJSMnRDTEZGQlNHeENPMEZCUzBFc1EwRkJReXhEUVVGRExIbENRVUZFTEVOQlFVUXNRMEZCTmtJc1VVRkJOMElzUTBGQmMwTXNVVUZCZEVNc1JTeERRVU5CT3p0QlFVTkJMRWxCUVUwc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMQ3RDUVVGMlFpeERRVUZtTzBGQlEwRXNTVUZCVFN4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVkFzUTBGQlV5eFBRVUZVTEVOQlFXbENMRXRCUVdoRE8wRkJRMEVzU1VGQlRTeFpRVUZaTEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1JVRkJWQ3hIUVVGakxFMUJRVzVETzBGQlJVRXNUVUZCVFN4RFFVRkRMRXRCUVZBc1EwRkJZU3hsUVVGaUxHRkJRV3RETEZsQlFXeERMR05CUVd0RUxGbEJRV3hFTzBGQlEwRXNUVUZCVFN4RFFVRkRMRXRCUVZBc1EwRkJZU3hsUVVGaUxFZEJRU3RDTEZsQlFTOUNPenRCUVVkQkxGTkJRVk1zVTBGQlZDeERRVUZ0UWl4TlFVRnVRaXhGUVVFeVFqdEJRVU14UWl4TlFVRk5MRTFCUVUwc1IwRkJSeXhaUVVGWkxFZEJRVWtzUTBGQlF5eE5RVUZFTEVkQlFWVXNSVUZCVml4SFFVRmxMRmxCUVRsRE8wRkJRMEVzUlVGQlFTeE5RVUZOTEVOQlFVTXNTMEZCVUN4RFFVRmhMR2RDUVVGaUxFZEJRV2RETEUxQlFXaERPMEZCUTBFN08wRkJSVVFzU1VGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVZRc1EwRkJkVUlzWlVGQmRrSXNSVUZCZDBNc1UwRkJNVVE3UVVGRFFTeFRRVUZUTEVOQlFVTXNVMEZCUkN4RFFVRlVMRU1zUTBGRFFUczdRVUZEU1N4SlFVRk5MRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zWVVGQlJDeERRVUZrTzBGQlEwRXNTVUZCVFN4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRExITkNRVUZFTEVOQlFYSkNPMEZCUTBFc1NVRkJUU3hSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETEd0Q1FVRkVMRU5CUVd4Q08wRkJRMEVzU1VGQlRTeFZRVUZWTEVkQlFVY3NRMEZCUXl4RFFVRkRMSEZDUVVGRUxFTkJRWEJDTzBGQlEwRXNTVUZCVFN4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRExHOUNRVUZFTEVOQlFXNUNPMEZCUTBFc1NVRkJUU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETEhkQ1FVRkVMRU5CUVc1Q08wRkJRMEVzU1VGQlRTeFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRMRzlDUVVGRUxFTkJRVzVDTzBGQlEwRXNTVUZCVFN4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRExIZENRVUZFTEVOQlFXNUNPMEZCUlVFc1VVRkJVU3hEUVVGRExFbEJRVlFzUTBGQll5eFpRVUZaTzBGQlEzUkNMRTFCUVVrc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZFTEVOQlFVUXNRMEZCVVN4SlFVRlNMRU5CUVdFc1QwRkJZaXhEUVVGa08wRkJRMEVzUlVGQlFTeERRVUZETEVOQlFVTXNTVUZCUkN4RFFVRkVMRU5CUVZFc1NVRkJVaXhEUVVGaExFOUJRV0k3UVVGRFNDeERRVWhFTzBGQlMwRXNWVUZCVlN4RFFVRkRMRVZCUVZnc1EwRkJZeXhQUVVGa0xFVkJRWFZDTEZsQlFWazdRVUZETDBJc1JVRkJRU3hYUVVGWExFTkJRVU1zUjBGQldpeERRVUZuUWl4WFFVRlhMRU5CUVVNc1IwRkJXaXhMUVVGdlFpeERRVUZETEVOQlFVTXNTVUZCUkN4RFFVRkVMRU5CUVZFc1NVRkJVaXhEUVVGaExFOUJRV0lzUTBGQmNFTTdRVUZEU0N4RFFVWkVPMEZCU1VFc1UwRkJVeXhEUVVGRExFVkJRVllzUTBGQllTeFBRVUZpTEVWQlFYTkNMRmxCUVZrN1FVRkRPVUlzUlVGQlFTeFhRVUZYTEVOQlFVTXNSMEZCV2l4RFFVRm5RaXhGUVVGb1FqdEJRVU5JTEVOQlJrUTdRVUZKUVN4VFFVRlRMRU5CUVVNc1JVRkJWaXhEUVVGaExFOUJRV0lzUlVGQmMwSXNXVUZCV1R0QlFVTTVRaXhGUVVGQkxGZEJRVmNzUTBGQlF5eEhRVUZhTEVOQlFXZENMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQldpeEZRVUZFTEVOQlFYQkNPMEZCUTBnc1EwRkdSRHRCUVVsQkxGTkJRVk1zUTBGQlF5eEZRVUZXTEVOQlFXRXNUMEZCWWl4RlFVRnpRaXhaUVVGWk8wRkJRemxDTEVWQlFVRXNWMEZCVnl4RFFVRkRMRWRCUVZvc1EwRkJaMElzU1VGQlNTeERRVUZETEVkQlFVd3NRMEZCVXl4WFFVRlhMRU5CUVVNc1IwRkJXaXhGUVVGVUxFVkJRVFJDTEVOQlFUVkNMRU5CUVdoQ08wRkJRMGdzUTBGR1JEdEJRVWxCTEZOQlFWTXNRMEZCUXl4RlFVRldMRU5CUVdFc1QwRkJZaXhGUVVGelFpeFpRVUZaTzBGQlF6bENMRVZCUVVFc1YwRkJWeXhEUVVGRExFZEJRVm9zUTBGQlowSXNWMEZCVnl4RFFVRkRMRWRCUVZvc1IwRkJhMElzVTBGQmJFSXNRMEZCTkVJc1EwRkJOVUlzUlVGQkswSXNWMEZCVnl4RFFVRkRMRWRCUVZvc1IwRkJhMElzVFVGQmJFSXNSMEZCZVVJc1EwRkJlRVFzUTBGQmFFSTdRVUZEU0N4RFFVWkVJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0b0tYdG1kVzVqZEdsdmJpQnlLR1VzYml4MEtYdG1kVzVqZEdsdmJpQnZLR2tzWmlsN2FXWW9JVzViYVYwcGUybG1LQ0ZsVzJsZEtYdDJZWElnWXoxY0ltWjFibU4wYVc5dVhDSTlQWFI1Y0dWdlppQnlaWEYxYVhKbEppWnlaWEYxYVhKbE8ybG1LQ0ZtSmlaaktYSmxkSFZ5YmlCaktHa3NJVEFwTzJsbUtIVXBjbVYwZFhKdUlIVW9hU3doTUNrN2RtRnlJR0U5Ym1WM0lFVnljbTl5S0Z3aVEyRnVibTkwSUdacGJtUWdiVzlrZFd4bElDZGNJaXRwSzF3aUoxd2lLVHQwYUhKdmR5QmhMbU52WkdVOVhDSk5UMFJWVEVWZlRrOVVYMFpQVlU1RVhDSXNZWDEyWVhJZ2NEMXVXMmxkUFh0bGVIQnZjblJ6T250OWZUdGxXMmxkV3pCZExtTmhiR3dvY0M1bGVIQnZjblJ6TEdaMWJtTjBhVzl1S0hJcGUzWmhjaUJ1UFdWYmFWMWJNVjFiY2wwN2NtVjBkWEp1SUc4b2JueDhjaWw5TEhBc2NDNWxlSEJ2Y25SekxISXNaU3h1TEhRcGZYSmxkSFZ5YmlCdVcybGRMbVY0Y0c5eWRITjlabTl5S0haaGNpQjFQVndpWm5WdVkzUnBiMjVjSWowOWRIbHdaVzltSUhKbGNYVnBjbVVtSm5KbGNYVnBjbVVzYVQwd08yazhkQzVzWlc1bmRHZzdhU3NyS1c4b2RGdHBYU2s3Y21WMGRYSnVJRzk5Y21WMGRYSnVJSEo5S1NncElpd2lKQ2hjSWk1MFlXSnpYMTlwZEdWdFhDSXBMbTV2ZENoY0lqcG1hWEp6ZEZ3aUtTNW9hV1JsS0NrN1hISmNiaVFvWENJdWRHRmljMTlmWW5SdVhDSXBMbU5zYVdOcktHWjFibU4wYVc5dUtDa2dlMXh5WEc1Y2RDUW9YQ0l1ZEdGaWMxOWZZblJ1WENJcExuSmxiVzkyWlVOc1lYTnpLRndpWVdOMGFYWmxYQ0lwTG1WeEtDUW9kR2hwY3lrdWFXNWtaWGdvS1NrdVlXUmtRMnhoYzNNb1hDSmhZM1JwZG1WY0lpazdYSEpjYmx4MEpDaGNJaTUwWVdKelgxOXBkR1Z0WENJcExtaHBaR1VvS1M1bGNTZ2tLSFJvYVhNcExtbHVaR1Y0S0NrcExtWmhaR1ZKYmlncFhISmNibjBwTG1WeEtEQXBMbUZrWkVOc1lYTnpLRndpWVdOMGFYWmxYQ0lwTzF4eVhHNWNjbHh1SkNnbkxuUmhZbk5mWDJsamIyNXpMWE4wWVhJNmJIUW9OQ2tuS1M1aFpHUkRiR0Z6Y3loY0ltRmpkR2wyWlZ3aUtUdGNjbHh1THk4dkx5OHZMeTh2THk4dkx5OVNZWFJwYm1jZ1ltRnlJSE5sZEM4dkwxeHlYRzVqYjI1emRDQmphWEpqYkdVZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWNISnZaM0psYzNNdGNtbHVaMTlmWTJseVkyeGxMV0p2Y21SbGNpY3BPMXh5WEc1amIyNXpkQ0J5WVdScGRYTWdQU0JqYVhKamJHVXVjaTVpWVhObFZtRnNMblpoYkhWbE8xeHlYRzVqYjI1emRDQmphWEpqYkdWTVpXNW5kR2dnUFNBeUlDb2dUV0YwYUM1UVNTQXFJSEpoWkdsMWN6dGNjbHh1WEhKY2JtTnBjbU5zWlM1emRIbHNaUzV6ZEhKdmEyVkVZWE5vWVhKeVlYa2dQU0JnSkh0amFYSmpiR1ZNWlc1bmRHaDlJQ1I3WTJseVkyeGxUR1Z1WjNSb2ZXQTdYSEpjYm1OcGNtTnNaUzV6ZEhsc1pTNXpkSEp2YTJWRVlYTm9ZWEp5WVhrZ1BTQmphWEpqYkdWTVpXNW5kR2c3WEhKY2JseHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2MyVjBVbUYwYVc1bktISmhkR2x1WnlrZ2UxeHlYRzVjZEdOdmJuTjBJRzltWm5ObGRDQTlJR05wY21Oc1pVeGxibWQwYUNBdElDZ3JjbUYwYVc1bklDOGdNVEFnS2lCamFYSmpiR1ZNWlc1bmRHZ3BPMXh5WEc1Y2RHTnBjbU5zWlM1emRIbHNaUzV6ZEhKdmEyVkVZWE5vYjJabWMyVjBJRDBnYjJabWMyVjBPMXh5WEc1OVhISmNibHh5WEc1amIyNXpkQ0J5WVhScGJtZFdZV3dnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Y21GMGFXNW5MWFpoYkhWbEp5a3VhVzV1WlhKSVZFMU1PMXh5WEc1elpYUlNZWFJwYm1jb2NtRjBhVzVuVm1Gc0tUdGNjbHh1THk4dkx5OHZMeTh2THk4dkwyTmhiR04xYkdGMGIzSXZMeTh2THk4dlhISmNiaUFnSUNCamIyNXpkQ0JqWVd4aklEMGdKQ2duTG1OaGJHTjFiR0YwYjNJbktUdGNjbHh1SUNBZ0lHTnZibk4wSUdOaGJHTkVhWE53YkdGNUlEMGdKQ2duTG1OaGJHTjFiR0YwYjNKZlgyUnBjM0JzWVhrbktUdGNjbHh1SUNBZ0lHTnZibk4wSUdOaGJHTkxaWGx6SUQwZ0pDZ25MbU5oYkdOMWJHRjBiM0pmWDJ0bGVTY3BPMXh5WEc0Z0lDQWdZMjl1YzNRZ1kyRnNZMEoxZEhSdmJpQTlJQ1FvSnk1allXeGpkV3hoZEc5eVgxOWlkWFIwYjI0bktUdGNjbHh1SUNBZ0lHTnZibk4wSUdOaGJHTkRiR1ZoY2lBOUlDUW9KeTVqWVd4amRXeGhkRzl5WDE5amJHVmhjaWNwTzF4eVhHNGdJQ0FnWTI5dWMzUWdZMkZzWTBWeGRXRnNJRDBnSkNnbkxtTmhiR04xYkdGMGIzSmZYMnRsZVMxbGNYVmhiQ2NwTzF4eVhHNGdJQ0FnWTI5dWMzUWdZMkZzWTFCdmQyVnlJRDBnSkNnbkxtTmhiR04xYkdGMGIzSmZYM0J2ZDJWeUp5azdYSEpjYmlBZ0lDQmpiMjV6ZENCallXeGpVM0JoWTJVZ1BTQWtLQ2N1WTJGc1kzVnNZWFJ2Y2w5ZlltRmphM053WVdObEp5azdYSEpjYmx4eVhHNGdJQ0FnWTJGc1kwdGxlWE11WldGamFDaG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUWdQU0FrS0hSb2FYTXBMbUYwZEhJb0ozWmhiSFZsSnlrN1hISmNiaUFnSUNBZ0lDQWdKQ2gwYUdsektTNTBaWGgwS0dOMWNuSmxiblFwTzF4eVhHNGdJQ0FnZlNrN1hISmNibHh5WEc0Z0lDQWdZMkZzWTBKMWRIUnZiaTV2YmlnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnWTJGc1kwUnBjM0JzWVhrdWRtRnNLR05oYkdORWFYTndiR0Y1TG5aaGJDZ3BJQ3NnSkNoMGFHbHpLUzVoZEhSeUtDZDJZV3gxWlNjcEtUdGNjbHh1SUNBZ0lIMHBPMXh5WEc1Y2NseHVJQ0FnSUdOaGJHTkRiR1ZoY2k1dmJpZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ1kyRnNZMFJwYzNCc1lYa3VkbUZzS0NjbktUdGNjbHh1SUNBZ0lIMHBPMXh5WEc1Y2NseHVJQ0FnSUdOaGJHTkZjWFZoYkM1dmJpZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ1kyRnNZMFJwYzNCc1lYa3VkbUZzS0dWMllXd29ZMkZzWTBScGMzQnNZWGt1ZG1Gc0tDa3BLVHRjY2x4dUlDQWdJSDBwTzF4eVhHNWNjbHh1SUNBZ0lHTmhiR05RYjNkbGNpNXZiaWduWTJ4cFkyc25MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdZMkZzWTBScGMzQnNZWGt1ZG1Gc0tFMWhkR2d1Y0c5M0tHTmhiR05FYVhOd2JHRjVMblpoYkNncExDQXpLU2s3WEhKY2JpQWdJQ0I5S1R0Y2NseHVYSEpjYmlBZ0lDQmpZV3hqVTNCaFkyVXViMjRvSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJR05oYkdORWFYTndiR0Y1TG5aaGJDaGpZV3hqUkdsemNHeGhlUzUyWVd3b0tTNXpkV0p6ZEhKcGJtY29NQ3dnWTJGc1kwUnBjM0JzWVhrdWRtRnNLQ2t1YkdWdVozUm9MVEVwS1R0Y2NseHVJQ0FnSUgwcE95SmRmUT09In0=
