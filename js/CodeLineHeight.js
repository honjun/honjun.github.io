$(function(){
	var codeline = $('.code .line');
	var gutter = $('.gutter .line');
	var codeLength = codeline.length;
	for (var i = 0; i < codeLength; i++) {
    // console.log(codeline.get(i).offsetHeight);
		gutter.get(i).style.height = codeline.get(i).offsetHeight + 'px';
	}
});