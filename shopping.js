
	<!--
function kei1(){
document.form1.kingaku1.value=1500*document.form1.aburi.selectedIndex;
document.form1.goukei.value=parseInt(document.form1.kingaku1.value)+parseInt(document.form1.kingaku2.value)+parseInt(document.form1.kingaku3.value)+parseInt(document.form1.kingaku4.value)+parseInt(document.form1.kingaku5.value);
document.form1.zei.value=parseInt((document.form1.goukei.value)*0.08);
document.form1.total.value=parseInt(document.form1.goukei.value)+parseInt(document.form1.zei.value)+parseInt(document.form1.haisou.value);
}

function kei2(){
document.form1.kingaku2.value=540*document.form1.dashimaki.selectedIndex;
document.form1.goukei.value=parseInt(document.form1.kingaku1.value)+parseInt(document.form1.kingaku2.value)+parseInt(document.form1.kingaku3.value)+parseInt(document.form1.kingaku4.value)+parseInt(document.form1.kingaku5.value);
document.form1.zei.value=parseInt((document.form1.goukei.value)*0.08);
document.form1.total.value=parseInt(document.form1.goukei.value)+parseInt(document.form1.zei.value)+parseInt(document.form1.haisou.value);
}

function kei3(){
document.form1.kingaku3.value=10000*document.form1.hamo.selectedIndex;
document.form1.goukei.value=parseInt(document.form1.kingaku1.value)+parseInt(document.form1.kingaku2.value)+parseInt(document.form1.kingaku3.value)+parseInt(document.form1.kingaku4.value)+parseInt(document.form1.kingaku5.value);
document.form1.zei.value=parseInt((document.form1.goukei.value)*0.08);
document.form1.total.value=parseInt(document.form1.goukei.value)+parseInt(document.form1.zei.value)+parseInt(document.form1.haisou.value);
}

function kei4(){
document.form1.kingaku4.value=432*document.form1.shippoku.selectedIndex;
document.form1.goukei.value=parseInt(document.form1.kingaku1.value)+parseInt(document.form1.kingaku2.value)+parseInt(document.form1.kingaku3.value)+parseInt(document.form1.kingaku4.value)+parseInt(document.form1.kingaku5.value);
document.form1.zei.value=parseInt((document.form1.goukei.value)*0.08);
document.form1.total.value=parseInt(document.form1.goukei.value)+parseInt(document.form1.zei.value)+parseInt(document.form1.haisou.value);
}

function kei5(){
document.form1.kingaku5.value=594*document.form1.yatuhashi.selectedIndex;
document.form1.goukei.value=parseInt(document.form1.kingaku1.value)+parseInt(document.form1.kingaku2.value)+parseInt(document.form1.kingaku3.value)+parseInt(document.form1.kingaku4.value)+parseInt(document.form1.kingaku5.value);
document.form1.zei.value=parseInt((document.form1.goukei.value)*0.08);
document.form1.total.value=parseInt(document.form1.goukei.value)+parseInt(document.form1.zei.value)+parseInt(document.form1.haisou.value);
}

function kei6(){
	switch(document.form1.otodoke.selectedIndex){
		case 0:document.form1.haisou.value=0;break;
		case 1:document.form1.haisou.value=700;break;
		case 2:document.form1.haisou.value=600;break;
		case 3:document.form1.haisou.value=500;break;
		case 4:document.form1.haisou.value=500;break;
		case 5:document.form1.haisou.value=450;break;
		case 6:document.form1.haisou.value=500;break;
		case 7:document.form1.haisou.value=600;break;
		case 8:document.form1.haisou.value=700;break;
	}

document.form1.total.value=parseInt(document.form1.goukei.value)+parseInt(document.form1.zei.value)+parseInt(document.form1.haisou.value);
}

function check(){

if(document.form1.shiharai[0].checked==false&&document.form1.shiharai[1].checked==false){
	alert("支払方法を選択してください。");
	return false;
}
	else if(document.form1.namae.value==""){
	alert("お名前を入力してください。");
	document.form1.namae.focus();
	return false;
}
	else if(document.form1.yuubin.value==""){
	alert("郵便番号を入力してください。");
	document.form1.yuubin.focus();
	return false;
}
	else if(document.form1.jusyo.value==""){
	alert("ご住所を入力してください。");
	document.form1.jusyo.focus();
	return false;
}
	else if(document.form1.denwa.value==""){
	alert("電話番号を入力してください。");
	document.form1.denwa.focus();
	return false;
}
	else if(document.form1.mail.value==""){
	alert("メールアドレスを入力してください。");
	document.form1.mail.focus();
	return false;
}
	else{
	return true;
	}
}

function kakunin(){
	if(confirm("入力した内容をクリアしますか？")==true){
	return true;
}
	else{
	return false;
}
	}
	
-->