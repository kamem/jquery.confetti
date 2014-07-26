/**
 *	jQuery confetti.
 *	jQuery required.
 *
 *	* Copyright 2014 (c) kamem
 *	* http://develo.org/
 *	* Licensed Under the MIT.
 *
 *	Date: 2014.06.28
 *
 * jQuery plugin to reproduce the confetti
 *
 * x: {Number} offset().left + width() / 2
 * y: {Number} offset().top + height() / 2
 * num: {Number} Number of confetti you want to generate
 * speedRange: {Number} range of initial velocity
 * airResistanceNum:  {Number} airResistanceNum air resistance
 * gravityNum: {Number} gravityNum gravity
 * intervalSpeed: {Number} intervalSpeed interval speed
 * complate: {Function} complate complate function
 *
 *	@class confetti
 */

(function($,global){
$.fn.confetti = function (options) {
	var $content = this,
		c = $.extend({
			x: $content.offset().left + $content.width() / 2,
			y: $content.offset().top + $content.height() / 2,
			num: 20,
			speedRange: 10,
			airResistanceNum:  0.95,
			gravityNum: 0.45,
			intervalSpeed: 30,
			complate: false
		},options),

		random = [],
		removeNum = 0,
		isComplate = false;

		className = 'confetti';

	set(c.x,c.y,c.num,c.speedRange);
	exception(c.airResistanceNum,c.gravityNum,c.intervalSpeed,c.complate);

	/**
	 * Number of confetti you want to generate
	 * @method set
	 * @param {Number} x position to generate a tag in the x-direction
	 * @param {Number} y position to generate a tag in the y-direction
	 * @param {Number} num Number of confetti you want to generate
	 * @param {Number} speedRange range of initial velocity
	 */
	function set(x,y,num,speedRange) {
		for (var i = 0; i < num; i++) {
			$('body').append('<div class="' + className + i + '"></div>');
			random[i] = {};
			random[i].left = Math.random() * (speedRange * 2) - speedRange;
			random[i].top = Math.random() * (speedRange * 2) - speedRange;
			random[i].bgColor = '#'+ Math.floor(Math.random() * 0xFFFFFF).toString(16)
		};

		$('[class*=' + className + ']').css({
			left: x + 'px',
			top: y + 'px'
		});
	}

	/**
	 * Number processing execution of confetti
	 * @method exception
	 * @param  {Number} airResistanceNum air resistance
	 * @param  {Number} gravityNum gravity
	 * @param  {Number} intervalSpeed interval speed
	 * @param  {Function} complate complate function
	 */
	function exception(airResistanceNum,gravityNum,intervalSpeed,complate){
		$('[class*=' + className + ']').each(function(index) {
			$(this).css({
				background: random[index].bgColor
			});
			gravity(
				$(this),
				random[index].left,
				random[index].top,
				airResistanceNum,
				gravityNum,
				intervalSpeed,
				complate
			);
		});
	}

	/**
	 * The slowing down the speed by gravity and air resistance on the basis of the value of the x direction y direction
	 * @method gravity
	 * @param  {Object} $content jQuery Object
	 * @param  {Number} speedX initial velocity in the x-direction
	 * @param  {Number} speedY initial velocity in the y-direction
	 * @param  {Number} airResistanceNum air resistance
	 * @param  {Number} gravityNum gravity
	 * @param  {Number} intervalSpeed interval speed
	 * @param  {Function} complate complate function
	 */
	function gravity($confetti,speedX,speedY,airResistanceNum,gravityNum,intervalSpeed,complate){
		var timer = setInterval(function() {
			var leftPosition = $confetti.position().left,
				topPosition = $confetti.position().top;

    	speedX *= airResistanceNum;
    	speedY = speedY * airResistanceNum + gravityNum;

			$confetti.css({
				left: leftPosition + speedX + 'px',
				top: topPosition + speedY + 'px'
			});

			if($('body').height() < topPosition + speedY) {
				removeNum++;
				$confetti.remove();
			};

			if(removeNum === c.num) {
				clearTimeout(timer);
				if(complate && !isComplate){
					complate();
					isComplate = true;
				}
			}
		},intervalSpeed);
	}
};
}(jQuery,this));