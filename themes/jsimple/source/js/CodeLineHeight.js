$(function(){
	var codeline = $('.code .line');
	var gutter = $('.gutter .line');
	var codeLength = codeline.length;
	for (var i = 0; i < codeLength; i++) {
		gutter.get(i).style.height = codeline.get(i).offsetHeight + 'px';
	}
});