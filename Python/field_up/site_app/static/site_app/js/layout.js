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

// 表示フェード
$(function(){
	$(window).scroll(function (){
		$('.fade').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});



// // デジタル文字

// scroll
var once01 = false;
window.addEventListener("load", function() {
  taeget_position = document.querySelector('#digital-font01').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once01 !== true) {
    once01 = true;

    var txt = document.getElementById('digital-font01');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "デジタルの魅力");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

// scroll
var once02 = false;
window.addEventListener("load", function() {
  taeget_position = document.querySelector('#digital-font02').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once02 !== true) {
    once02 = true;

    var txt = document.getElementById('digital-font02');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "人の夢を目標に変えてくれる");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

  // scroll
var once03 = false;
window.addEventListener("scroll", function() {
  taeget_position = document.querySelector('#digital-font03').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once03!== true) {
    once03 = true;

    var txt = document.getElementById('digital-font03');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "リアルでダメでもデジタル(バーチャル)なら");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

// scroll
var once04 = false;
window.addEventListener("scroll", function() {
  taeget_position = document.querySelector('#digital-font04').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once04 !== true) {
    once04 = true;

    var txt = document.getElementById('digital-font04');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "多くの人がクリエーターになれる可能性が増えた");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

// scroll
var once05 = false;
window.addEventListener("load", function() {
  taeget_position = document.querySelector('#digital-font05').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once05 !== true) {
    once05 = true;

    var txt = document.getElementById('digital-font05');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "システム開発");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

// scroll
var once06 = false;
window.addEventListener("load", function() {
  taeget_position = document.querySelector('#digital-font06').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once06 !== true) {
    once06 = true;

    var txt = document.getElementById('digital-font06');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "開発ってどう進むの？");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

// scroll
var once07 = false;
window.addEventListener("scroll", function() {
  taeget_position = document.querySelector('#digital-font07').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once07 !== true) {
    once07 = true;

    var txt = document.getElementById('digital-font07');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "Dev-Opsってなに？");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

// scroll
var once08 = false;
window.addEventListener("scroll", function() {
  taeget_position = document.querySelector('#digital-font08').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once08 !== true) {
    once08 = true;

    var txt = document.getElementById('digital-font08');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "どのぐらいの費用でできるの？");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

// scroll
var once09 = false;
window.addEventListener("scroll", function() {
  taeget_position = document.querySelector('#digital-font09').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once09 !== true) {
    once09 = true;

    var txt = document.getElementById('digital-font09');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "こんなことができる!!");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

// scroll
var once10 = false;
window.addEventListener("load", function() {
  taeget_position = document.querySelector('#digital-font10').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once10 !== true) {
    once10 = true;

    var txt = document.getElementById('digital-font10');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "プログラミング");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

// scroll
var once11 = false;
window.addEventListener("load", function() {
  taeget_position = document.querySelector('#digital-font11').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once11 !== true) {
    once11 = true;

    var txt = document.getElementById('digital-font11');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "プログラミング言語って何？");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

// scroll
var once12 = false;
window.addEventListener("scroll", function() {
  taeget_position = document.querySelector('#digital-font12').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once12 !== true) {
    once12 = true;

    var txt = document.getElementById('digital-font12');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "適正はあるが誰でもできる");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

  // scroll
var once13 = false;
window.addEventListener("scroll", function() {
  taeget_position = document.querySelector('#digital-font13').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once13 !== true) {
    once13 = true;

    var txt = document.getElementById('digital-font13');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "アルゴリズム");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

// scroll
var once14 = false;
window.addEventListener("load", function() {
  taeget_position = document.querySelector('#digital-font14').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once14 !== true) {
    once14 = true;

    var txt = document.getElementById('digital-font14');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "Company");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

// scroll
var once15 = false;
window.addEventListener("load", function() {
  taeget_position = document.querySelector('#digital-font15').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once15 !== true) {
    once15 = true;

    var txt = document.getElementById('digital-font15');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "やりたいこと夢を目標、現実へ落とし込んでいくためのプロフェッショナル");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

  // scroll
var once16 = false;
window.addEventListener("scroll", function() {
  taeget_position = document.querySelector('#digital-font16').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once16 !== true) {
    once16 = true;

    var txt = document.getElementById('digital-font16');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "Kind");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

  // scroll
  var once17 = false;
  window.addEventListener("scroll", function() {
    taeget_position = document.querySelector('#digital-font17').getBoundingClientRect().top;
    if (taeget_position <= window.innerHeight && once17 !== true) {
      once17 = true;
  
      var txt = document.getElementById('digital-font17');
      //文字を表示、ランダムな文字の後表示される
      setText(txt, "News");
      
      //一文字一文字、ランダムな文字を表示した後に表示する
      function setText(targetText,viewText){
        var counter = 0;
        var ary = divText(viewText);
        var resultText="";
        
        var timerId = setInterval(function(){
            resultText += randomText(targetText, ary[counter],resultText);
            counter++;
            if(counter == ary.length){
              clearInterval(timerId);
            }
        }, 300);
      }
      
      //ランダムな一文字を指定回数表示し、指定した一文字を表示する
      function randomText(text, result, resultText){
        var counter = 0;
        var timerId = setInterval(function(){
            rand = Math.floor(Math.random()*93)+33;
            text.innerText = resultText +String.fromCharCode(rand);
            counter++;
            if(counter==8){
              clearInterval(timerId);
              text.innerText = resultText + result;
            }
        },20);
        return result;
      }
   
      //文字列を分割して配列に格納する
      function divText(text){
        var ary = [];
        ary=text.split('');
              return ary;
        }
    }
    });

// scroll
var once18 = false;
window.addEventListener("load", function() {
  taeget_position = document.querySelector('#digital-font18').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once18 !== true) {
    once18 = true;

    var txt = document.getElementById('digital-font18');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "Company");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

  // scroll
var once19 = false;
window.addEventListener("load", function() {
  taeget_position = document.querySelector('#digital-font19').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once19 !== true) {
    once19 = true;

    var txt = document.getElementById('digital-font19');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "Content");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });

  // scroll
var once20 = false;
window.addEventListener("load", function() {
  taeget_position = document.querySelector('#digital-font20').getBoundingClientRect().top;
  if (taeget_position <= window.innerHeight && once20 !== true) {
    once20 = true;

    var txt = document.getElementById('digital-font20');
    //文字を表示、ランダムな文字の後表示される
    setText(txt, "Contacts & FAQ");
    
    //一文字一文字、ランダムな文字を表示した後に表示する
    function setText(targetText,viewText){
      var counter = 0;
      var ary = divText(viewText);
      var resultText="";
      
      var timerId = setInterval(function(){
          resultText += randomText(targetText, ary[counter],resultText);
          counter++;
          if(counter == ary.length){
            clearInterval(timerId);
          }
      }, 300);
    }
    
    //ランダムな一文字を指定回数表示し、指定した一文字を表示する
    function randomText(text, result, resultText){
      var counter = 0;
      var timerId = setInterval(function(){
          rand = Math.floor(Math.random()*93)+33;
          text.innerText = resultText +String.fromCharCode(rand);
          counter++;
          if(counter==8){
            clearInterval(timerId);
            text.innerText = resultText + result;
          }
      },20);
      return result;
    }
 
    //文字列を分割して配列に格納する
    function divText(text){
      var ary = [];
      ary=text.split('');
            return ary;
      }
  }
  });