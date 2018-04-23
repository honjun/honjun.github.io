$(function(){
	var codeline = $('.code .line');
	var gutter = $('.gutter .line');
	var codeLength = codeline.length;
	for (var i = 0; i < codeLength; i++) {
    console.log(codeline.get(i).offsetHeight);
		gutter.get(i).style.height = codeline.get(i).offsetHeight + 'px';
	}
});

var match = text.match(/@\((\S*?)\)/g)[0];
  var emoji = match.substring(2);
  emoji = emoji.substring(0, emoji.length-1);
  text = text.replace(/@\((\S*?)\)/g, emoji)