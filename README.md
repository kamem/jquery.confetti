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
	
License
-------

MIT licensed

Copyright (c) 2014 kamem
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

