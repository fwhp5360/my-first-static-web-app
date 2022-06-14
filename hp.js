//スライドショー
$(function(){
	$('.slideshow').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true
	});
});

//-----------------------------------------------------
//マウス置いたら画像切り替え（トップページ以外）
$('.Item').each(function() {

  let img_off = $(this).attr('src');
  let img_on = $(this).attr('src').replace('_b', '2');

  $(this).hover(
    function () {
      $(this).attr('src', img_on);
    },
    function () {
      $(this).attr('src', img_off);
    }
  );
});

//------------------------------------------------
//マウス置いたら画像切り替え（トップページ）
$('.Item2').each(function() {

  let img_off = $(this).attr('src');
  let img_on = $(this).attr('src').replace('top', 'top2');

  $(this).hover(
    function () {
      $(this).attr('src', img_on);
    },
    function () {
      $(this).attr('src', img_off);
    }
  );

});