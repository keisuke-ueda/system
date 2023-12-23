$(function(){

  // キービジュアル制御
  $('.movie-1').on('ended', function(){
      $('.movie-1').addClass('d-none');
      $('.movie-2').removeClass('d-none');
      $('.movie-2').get(0).play();
  })

  // ハンバーガーメニュー
  $(".openbtn4").on('click', function () {
    $(this).toggleClass('active');
    $('.hidden-menu').toggleClass('d-none');
  });

  //ナビゲーションをクリックした際のスムーススクロール
  $('#g-navi a').on('click', function () {
    var elmHash = $(this).attr('href'); //hrefの内容を取得
    var pos = Math.round($(elmHash).offset().top-120);  //headerの高さを引く
    $('body,html').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
    return false;//リンクの無効化
  });


  $('.dots').on('click', function () {
    // ページ番号取得
    var num = $(this).data('num');
    //パックマン移動
    $('.pacman').animate({'left':3+30*num-30}, 250)
    console.log(num)
    // ページ遷移
    setTimeout(function(){
      window.location.href = "./?page=" + String(num);
    },250);
  })
});

// ページ遷移後のパックマン位置設定
$(window).on('load', function () {
  if($('input').hasClass('dots')) {
    var url = location.href;
    num = url.slice(-1)
    $('.pacman').css('left',3+30*num-30)
  }
});


//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){//headerの高さ以上になったら
      $('#header').addClass('fixed');//fixedというクラス名を付与
    }else{//それ以外は
      $('#header').removeClass('fixed');//fixedというクラス名を除去
    }
}  
  
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});
  
// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});


// 表示フェードトリガー
$(function(){
	$(window).scroll(function (){
		$('.fadeup').each(function(){
			var elemPos = $(this).offset().top+200;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
      console.log(scroll);
      console.log(windowHeight);
			if (scroll > elemPos - windowHeight){
				$(this).addClass('up');
			}else{
        $(this).removeClass('up');
      }
		});

    $('.faderight').each(function(){
			var elemPos = $(this).offset().top+200;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight){
				$(this).addClass('right');
			}else{
        $(this).removeClass('right');
      }
		});

    $('.fadeleft').each(function(){
			var elemPos = $(this).offset().top+200;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight){
				$(this).addClass('left');
			}else{
        $(this).removeClass('left');
      }
		});

    $('.ro-X').each(function(){
			var elemPos = $(this).offset().top+200;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight){
				$(this).addClass('rotateX');
			}else{
        $(this).removeClass('rotateX');
      }
		});

    $('.ro-Y').each(function(){
			var elemPos = $(this).offset().top+200;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight){
				$(this).addClass('rotateY');
			}else{
        $(this).removeClass('rotateY');
      }
		});










	});
});











//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 1500,//時間指定(1000＝1秒)
  strokeWidth: 0.3,//進捗ゲージの太さ
  color: '#999',//進捗ゲージのカラー
  trailWidth: 0.2,//ゲージベースの線の太さ
  trailColor: '#333',//ゲージベースの線のカラー
  text: {//テキストの形状を直接指定       
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%,-50%)',
      'font-size':'1rem',
      color: '#fff',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});
//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash_text").fadeOut(10);//フェイドアウトでローディングテキストを削除
  $(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
  $(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加
  $("#splash").fadeOut();//#splashエリアをフェードアウト
});







// 背景アニメーション




