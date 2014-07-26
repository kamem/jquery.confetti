jquery.confetti
===============

jQuery plugin to reproduce the confetti

Specification
---
1. sow the confetti
2. Reproduce the confetti in html and css animation
3. there is a need to limit the number for a little heavy so dom
4. Generate tag to the bottom of the body
5. Remove tag when it disappeared from the screen outside
6. Run complate if all tags have disappeared off the screen

[DEMO]
[DEMO]: http://github.develo.org/jquery.confetti/


Usage
---
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jquery.confetti.js"></script>
	<script type="text/javascript">
	$(function(){
		$('html').confetti();
	});
	</script>

Options
------

### Dfault ###
	x: $content.offset().left + $content.width() / 2,
	y: $content.offset().top + $content.height() / 2,
	num: 20,
	speedRange: 10,
	airResistanceNum:  0.95,
	gravityNum: 0.45,
	intervalSpeed: 30,
	complate: false

※ [x,y] position of half of the position + tag of the specified tag in default

 * x: {Number} offset().left + width() / 2
 * y: {Number} offset().top + height() / 2
 * num: {Number} Number of confetti you want to generate
 * speedRange: {Number} range of initial velocity
 * airResistanceNum:  {Number} airResistanceNum air resistance
 * gravityNum: {Number} gravityNum gravity
 * intervalSpeed: {Number} intervalSpeed interval speed
 * complate: {Function} complate complate function

Example
------
Sprinkle the confetti from the click position when you click anywhere in the html

	$(function(){
		$('html').click(function(e){
			$('[class*=confetti]').remove();
			$('html').confetti({
				x: e.pageX,
				y: e.pageY,
				complate:function(){
					alert('complate');
				}
			});
		});
	});
