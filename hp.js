//�X���C�h�V���[
$(function(){
	$('.slideshow').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true
	});
});

//-----------------------------------------------------
//�}�E�X�u������摜�؂�ւ��i�g�b�v�y�[�W�ȊO�j
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
//�}�E�X�u������摜�؂�ւ��i�g�b�v�y�[�W�j
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