$(".tabs__item").not(":first").hide();
$(".tabs__btn").click(function() {
	$(".tabs__btn").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.tabs__icons-star:lt(4)').addClass("active");
//////////////Rating bar set///
const circle = document.querySelector('.progress-ring__circle-border');
const radius = circle.r.baseVal.value;
const circleLength = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circleLength} ${circleLength}`;
circle.style.strokeDasharray = circleLength;


function setRating(rating) {
	const offset = circleLength - (+rating / 10 * circleLength);
	circle.style.strokeDashoffset = offset;
}

const ratingVal = document.querySelector('.rating-value').innerHTML;
setRating(ratingVal);
/////////////calculator///////
    const calc = $('.calculator');
    const calcDisplay = $('.calculator__display');
    const calcKeys = $('.calculator__key');
    const calcButton = $('.calculator__button');
    const calcClear = $('.calculator__clear');
    const calcEqual = $('.calculator__key-equal');
    const calcPower = $('.calculator__power');
    const calcSpace = $('.calculator__backspace');

    calcKeys.each(function () {
        let current = $(this).attr('value');
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
        calcDisplay.val(calcDisplay.val().substring(0, calcDisplay.val().length-1));
    });