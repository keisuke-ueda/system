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
