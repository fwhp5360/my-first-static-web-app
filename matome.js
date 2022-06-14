//あらかじめjQueryを読み込む
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>

//以下のコードを記述する
<script type="text/javascript">
$(function(){
	var setImg = '#viewer';
	var fadeSpeed = 1000;
	var switchDelay = 3000;
	
	$(setImg).children('img').css({opacity:'0'});
	$(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);
	
	setInterval(function(){
		$(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
		},switchDelay);
	});
</script>