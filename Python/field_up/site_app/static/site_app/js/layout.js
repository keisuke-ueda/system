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

// ローディングアニメーション
$(function(){
	var loader = $('.loader-wrap');

	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.fadeOut();
	});

	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut();
	},3000);
});


// デジタル文字
$(function(){
  $('.digital-font01').hover(function(){
    setTimeout(() => {
      $(this).text('mp@]gm@wpnm]gep');
      setTimeout(() => {
        $(this).text('デpg@awolpp;gwe');
        setTimeout(() => {
          $(this).text('デジ[we@rpvwlgerw');
          setTimeout(() => {
            $(this).text('デジタk[gww[eew');
            setTimeout(() => {
              $(this).text('デジタル;l:grwgfm,we');
              setTimeout(() => {
                $(this).text('デジタルの,gw,:we]');
                setTimeout(() => {
                  $(this).text('デジタルの魅[lg');
                  setTimeout(() => {
                    $(this).text('デジタルの魅力');
                  }, 040);
                }, 040);
              }, 040);
            }, 040); 
          }, 040);  
        }, 040); 
      }, 040); 
    }, 040);   
  },function(){
    $(this).text('デジタルの魅力');
  });

  $(function(){
    $('.digital-font02').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('人pgwolpp;gwe');
          setTimeout(() => {
            $(this).text('人のknmpwgjpwe');
            setTimeout(() => {
              $(this).text('人の夢kgwweew');
              setTimeout(() => {
                $(this).text('人の夢を;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('人の夢を目,gw,:we]');
                  setTimeout(() => {
                    $(this).text('人の夢を目標.[lgew[lg[we');
                    setTimeout(() => {
                      $(this).text('人の夢を目標にbweobfoqwe');
                      setTimeout(() => {
                        $(this).text('人の夢を目標に変g,wr[kger[p;w');
                        setTimeout(() => {
                          $(this).text('人の夢を目標に変え@kr@[pk@krwe,w');
                          setTimeout(() => {
                            $(this).text('人の夢を目標に変えてf.her[;:h[er.h');
                            setTimeout(() => {
                              $(this).text('人の夢を目標に変えてくg.wer[].h[]:e.');
                              setTimeout(() => {
                                $(this).text('人の夢を目標に変えてくれge;rwhg');
                                setTimeout(() => {
                                  $(this).text('人の夢を目標に変えてくれる');
                                }, 040);
                              }, 040);
                            }, 040);
                          }, 040);
                        }, 040);
                      }, 040);
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('人の夢を目標に変えてくれる');
    });
  });
 
  $(function(){
    $('.digital-font03').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('リpgwolpp;gwe');
          setTimeout(() => {
            $(this).text('リアknmpwgjpwe');
            setTimeout(() => {
              $(this).text('リアルkgwweew');
              setTimeout(() => {
                $(this).text('リアルで;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('リアルでで,gw,:we]');
                  setTimeout(() => {
                    $(this).text('リアルででき.[lgew[lg[we');
                    setTimeout(() => {
                      $(this).text('リアルでできなbweobfoqwe');
                      setTimeout(() => {
                        $(this).text('リアルでできないg,wr[kger[p;w');
                        setTimeout(() => {
                          $(this).text('リアルでできないこ@kr@[pk@krwe,w');
                          setTimeout(() => {
                            $(this).text('リアルでできないことf.her[;:h[er.h');
                            setTimeout(() => {
                              $(this).text('リアルでできないことでg.wer[].h[]:e.');
                              setTimeout(() => {
                                $(this).text('リアルでできないことでもge;rwhg');
                                setTimeout(() => {
                                  $(this).text('リアルでできないことでもデrjpoer@qwrqw');
                                  setTimeout(() => {
                                    $(this).text('リアルでできないことでもデジmnpgwfwf');
                                    setTimeout(() => {
                                      $(this).text('リアルでできないことでもデジタhrrerjerer');
                                      setTimeout(() => {
                                        $(this).text('リアルでできないことでもデジタルnlwebobewgp');
                                        setTimeout(() => {
                                          $(this).text('リアルでできないことでもデジタル(nfoewonwege');
                                          setTimeout(() => {
                                            $(this).text('リアルでできないことでもデジタル(バknmfpenwpnwe');
                                            setTimeout(() => {
                                              $(this).text('リアルでできないことでもデジタル(バーfhfowefwe');
                                              setTimeout(() => {
                                                $(this).text('リアルでできないことでもデジタル(バーチjfepjpefkvs');
                                                setTimeout(() => {
                                                  $(this).text('リアルでできないことでもデジタル(バーチャ@l.[elg[wegwq');
                                                  setTimeout(() => {
                                                    $(this).text('リアルでできないことでもデジタル(バーチャル)rgwgw0wjwh');
                                                    setTimeout(() => {
                                                      $(this).text('リアルでできないことでもデジタル(バーチャル)mwmognweop');
                                                      setTimeout(() => {
                                                        $(this).text('リアルでできないことでもデジタル(バーチャル)なngewnpwen');
                                                        setTimeout(() => {
                                                          $(this).text('リアルでできないことでもデジタル(バーチャル)ならm@f@qwe@fgeqw');
                                                          setTimeout(() => {
                                                            $(this).text('リアルでできないことでもデジタル(バーチャル)なら実mpfmqwmfqwe@');
                                                            setTimeout(() => {
                                                              $(this).text('リアルでできないことでもデジタル(バーチャル)なら実現wejjwg@e@');
                                                              setTimeout(() => {
                                                                $(this).text('リアルでできないことでもデジタル(バーチャル)なら実現でwfhnqhjpfwqjhp');
                                                                setTimeout(() => {
                                                                  $(this).text('リアルでできないことでもデジタル(バーチャル)なら実現できl,g[we[kg[we,[fweve');
                                                                  setTimeout(() => {
                                                                    $(this).text('リアルでできないことでもデジタル(バーチャル)なら実現できる');
                                                                  }, 040);
                                                                }, 040);
                                                              }, 040);
                                                            }, 040);
                                                          }, 040);
                                                        }, 040);
                                                      }, 040);
                                                    }, 040);
                                                  }, 040);
                                                }, 040);
                                              }, 040);
                                            }, 040);
                                          }, 040);
                                        }, 040);
                                      }, 040)
                                    }, 040)
                                  }, 040)
                                }, 040);
                              }, 040);
                            }, 040);
                          }, 040);
                        }, 040);
                      }, 040);
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('リアルでできないことでもデジタル(バーチャル)なら実現できる');
    });
  });

  $(function(){
    $('.digital-font04').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('多pgwolpp;gwe');
          setTimeout(() => {
            $(this).text('多くknmpwgjpwe');
            setTimeout(() => {
              $(this).text('多くのkgwweew');
              setTimeout(() => {
                $(this).text('多くの人;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('多くの人が,gw,:we]');
                  setTimeout(() => {
                    $(this).text('多くの人がク.[lgew[lg[we');
                    setTimeout(() => {
                      $(this).text('多くの人がクリbweobfoqwe');
                      setTimeout(() => {
                        $(this).text('多くの人がクリエg,wr[kger[p;w');
                        setTimeout(() => {
                          $(this).text('多くの人がクリエー@kr@[pk@krwe,w');
                          setTimeout(() => {
                            $(this).text('多くの人がクリエータf.her[;:h[er.h');
                            setTimeout(() => {
                              $(this).text('多くの人がクリエーターg.wer[].h[]:e.');
                              setTimeout(() => {
                                $(this).text('多くの人がクリエーターにge;rwhg');
                                setTimeout(() => {
                                  $(this).text('多くの人がクリエーターになrjpoer@qwrqw');
                                  setTimeout(() => {
                                    $(this).text('多くの人がクリエーターになれmnpgwfwf');
                                    setTimeout(() => {
                                      $(this).text('多くの人がクリエーターになれるhrrerjerer');
                                      setTimeout(() => {
                                        $(this).text('多くの人がクリエーターになれる可nlwebobewgp');
                                        setTimeout(() => {
                                          $(this).text('多くの人がクリエーターになれる可能nfoewonwege');
                                          setTimeout(() => {
                                            $(this).text('多くの人がクリエーターになれる可能性knmfpenwpnwe');
                                            setTimeout(() => {
                                              $(this).text('多くの人がクリエーターになれる可能性がfhfowefwe');
                                              setTimeout(() => {
                                                $(this).text('多くの人がクリエーターになれる可能性が増yrfepjpefkvs');
                                                setTimeout(() => {
                                                  $(this).text('多くの人がクリエーターになれる可能性が増え@l.[elg[wegwq');
                                                  setTimeout(() => {
                                                    $(this).text('多くの人がクリエーターになれる可能性が増えた');
                                                    }, 040);
                                                  }, 040);
                                                }, 040);
                                              }, 040);
                                            }, 040);
                                          }, 040);
                                        }, 040);
                                      }, 040)
                                    }, 040)
                                  }, 040)
                                }, 040);
                              }, 040);
                            }, 040);
                          }, 040);
                        }, 040);
                      }, 040);
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('多くの人がクリエーターになれる可能性が増えた');
    });

  $(function(){
    $('.digital-font05').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('シpgwolpp;gwe');
          setTimeout(() => {
            $(this).text('シスknmpwgjpwe');
            setTimeout(() => {
              $(this).text('システkgwweew');
              setTimeout(() => {
                $(this).text('システム;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('システム開,gw,:we]');
                  setTimeout(() => {
                    $(this).text('システム開発');
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('システム開発');
    });

  $(function(){
    $('.digital-font06').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('開pgwolpp;gwe');
          setTimeout(() => {
            $(this).text('開発knmpwgjpwe');
            setTimeout(() => {
              $(this).text('開発っkgwweew');
              setTimeout(() => {
                $(this).text('開発って;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('開発ってど,gw,:we]');
                  setTimeout(() => {
                    $(this).text('開発ってどうehwbfe');
                    setTimeout(() => {
                      $(this).text('開発ってどう進kutahetyre');
                      setTimeout(() => {
                        $(this).text('開発ってどう進むehwbfe');
                        setTimeout(() => {
                          $(this).text('開発ってどう進むの？');
                          }, 040);
                        }, 040);
                      }, 040);
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('開発ってどう進むの？');
    });

  $(function(){
    $('.digital-font07').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('Dpgwolpp;gwe');
          setTimeout(() => {
            $(this).text('Deknmpwgjpwe');
            setTimeout(() => {
              $(this).text('Devkgwweew');
              setTimeout(() => {
                $(this).text('Dev-;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('Dev-O,gw,:we]');
                  setTimeout(() => {
                    $(this).text('Dev-Opehwbfe');
                    setTimeout(() => {
                      $(this).text('Dev-Opskutahetyre');
                      setTimeout(() => {
                        $(this).text('Dev-Opsっehwbfe');
                        setTimeout(() => {
                          $(this).text('Dev-Opsってnoewnofwe');
                          setTimeout(() => {
                            $(this).text('Dev-Opsってなonoewnnw');
                            setTimeout(() => {
                              $(this).text('Dev-Opsってなにqfz,@gv,wer,');
                              setTimeout(() => {
                                $(this).text('Dev-Opsってなに？');
                                }, 040);
                              }, 040);
                            }, 040);
                          }, 040);
                        }, 040);
                      }, 040);
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('Dev-Opsってなに？');
    });

  $(function(){
    $('.digital-font08').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('どpgwolpp;gwe');
          setTimeout(() => {
            $(this).text('どのknmpwgjpwe');
            setTimeout(() => {
              $(this).text('どのぐkgwweew');
              setTimeout(() => {
                $(this).text('どのぐら;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('どのぐらい,gw,:we]');
                  setTimeout(() => {
                    $(this).text('どのぐらいの.[lgew[lg[we');
                    setTimeout(() => {
                      $(this).text('どのぐらいの費bweobfoqwe');
                      setTimeout(() => {
                        $(this).text('どのぐらいの費用g,wr[kger[p;w');
                        setTimeout(() => {
                          $(this).text('どのぐらいの費用で@kr@[pk@krwe,w');
                          setTimeout(() => {
                            $(this).text('どのぐらいの費用ででf.her[;:h[er.h');
                            setTimeout(() => {
                              $(this).text('どのぐらいの費用でできg.wer[].h[]:e.');
                              setTimeout(() => {
                                $(this).text('どのぐらいの費用でできge;rwhg');
                                setTimeout(() => {
                                  $(this).text('どのぐらいの費用でできるrjpoer@qwrqw');
                                  setTimeout(() => {
                                    $(this).text('どのぐらいの費用でできるのmnpgwfwf');
                                    setTimeout(() => {
                                      $(this).text('どのぐらいの費用でできるの？');
                                      }, 040)
                                    }, 040)
                                  }, 040)
                                }, 040);
                              }, 040);
                            }, 040);
                          }, 040);
                        }, 040);
                      }, 040);
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('どのぐらいの費用でできるの？');
    });

  $(function(){
    $('.digital-font09').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('こpgwolpp;gwe');
          setTimeout(() => {
            $(this).text('こんknmpwgjpwe');
            setTimeout(() => {
              $(this).text('こんなkgwweew');
              setTimeout(() => {
                $(this).text('こんなこ;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('こんなこと,gw,:we]');
                  setTimeout(() => {
                    $(this).text('こんなことがpehwbfe');
                    setTimeout(() => {
                      $(this).text('こんなことがでkutahetyre');
                      setTimeout(() => {
                        $(this).text('こんなことができehwbfe');
                        setTimeout(() => {
                          $(this).text('こんなことができるnoewnofwe');
                          setTimeout(() => {
                            $(this).text('こんなことができる!!');
                            }, 040);
                          }, 040);
                        }, 040);
                      }, 040);
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('こんなことができる!!');
    });

  $(function(){
    $('.digital-font10').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('プpgwolpp;gwe');
          setTimeout(() => {
            $(this).text('プロknmpwgjpwe');
            setTimeout(() => {
              $(this).text('プログkgwweew');
              setTimeout(() => {
                $(this).text('プログラ;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('プログラミ,gw,:we]');
                  setTimeout(() => {
                    $(this).text('プログラミンpehwbfe');
                    setTimeout(() => {
                      $(this).text('プログラミング');
                      }, 040);
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('プログラミング');
    });

  $(function(){
    $('.digital-font11').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('プpgwolpp;gwe');
          setTimeout(() => {
            $(this).text('プロknmpwgjpwe');
            setTimeout(() => {
              $(this).text('プログkgwweew');
              setTimeout(() => {
                $(this).text('プログラ;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('プログラミ,gw,:we]');
                  setTimeout(() => {
                    $(this).text('プログラミンpehwbfe');
                    setTimeout(() => {
                      $(this).text('プログラミングkutahetyre');
                      setTimeout(() => {
                        $(this).text('プログラミング言ehwbfe');
                        setTimeout(() => {
                          $(this).text('プログラミング言語noewnofwe');
                          setTimeout(() => {
                            $(this).text('プログラミング言語っbndoweorqw');
                            setTimeout(() => {
                              $(this).text('プログラミング言語ってtryetr;:lv,er');
                              setTimeout(() => {
                                $(this).text('プログラミング言語って何qfwemgwe@m,');
                                setTimeout(() => {
                                  $(this).text('プログラミング言語って何？');
                                  }, 040);
                                }, 040);
                              }, 040);
                            }, 040);
                          }, 040);
                        }, 040);
                      }, 040);
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('プログラミング言語って何？');
    });

  $(function(){
    $('.digital-font12').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('適pgwolpp;gwe');
          setTimeout(() => {
            $(this).text('適正knmpwgjpwe');
            setTimeout(() => {
              $(this).text('適正はkgwweew');
              setTimeout(() => {
                $(this).text('適正はあ;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('適正はある,gw,:we]');
                  setTimeout(() => {
                    $(this).text('適正はあるがpehwbfe');
                    setTimeout(() => {
                      $(this).text('適正はあるが誰kutahetyre');
                      setTimeout(() => {
                        $(this).text('適正はあるが誰でehwbfe');
                        setTimeout(() => {
                          $(this).text('適正はあるが誰でもnoewnofwe');
                          setTimeout(() => {
                            $(this).text('適正はあるが誰でもでbndoweorqw');
                            setTimeout(() => {
                              $(this).text('適正はあるが誰でもできtryetr;:lv,er');
                              setTimeout(() => {
                                $(this).text('適正はあるが誰でもできる');
                                }, 040);
                              }, 040);
                            }, 040);
                          }, 040);
                        }, 040);
                      }, 040);
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('適正はあるが誰でもできる');
    });

  $(function(){
    $('.digital-font13').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('アpgwolpp;gwe');
          setTimeout(() => {
            $(this).text('アルknmpwgjpwe');
            setTimeout(() => {
              $(this).text('アルゴkgwweew');
              setTimeout(() => {
                $(this).text('アルゴリ;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('アルゴリズ,gw,:we]');
                  setTimeout(() => {
                    $(this).text('アルゴリズム');
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('アルゴリズム');
    });

  $(function(){
    $('.digital-font14').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('Cpgwolpp;gwe');
          setTimeout(() => {
            $(this).text('Coknmpwgjpwe');
            setTimeout(() => {
              $(this).text('Comkgwweew');
              setTimeout(() => {
                $(this).text('Comp;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('Compa,gw,:we]');
                  setTimeout(() => {
                    $(this).text('Compan@weirw');
                    setTimeout(() => {
                      $(this).text('Company');
                      }, 040);
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('Company');
    });

  $(function(){
    $('.digital-font15').hover(function(){
      setTimeout(() => {
        $(this).text('mpgmwpnmgep');
        setTimeout(() => {
          $(this).text('やりpgwolpp;gwe');
          setTimeout(() => {
            $(this).text('やりたknmpwgjpwe');
            setTimeout(() => {
              $(this).text('やりたいkgwweew');
              setTimeout(() => {
                $(this).text('やりたいこ;l:grwgfm,we');
                setTimeout(() => {
                  $(this).text('やりたいこと夢,gw,:we]');
                  setTimeout(() => {
                    $(this).text('やりたいこと夢を.[lgew[lg[we');
                    setTimeout(() => {
                      $(this).text('やりたいこと夢を目bweobfoqwe');
                      setTimeout(() => {
                        $(this).text('やりたいこと夢を目標、g,wr[kger[p;w');
                        setTimeout(() => {
                          $(this).text('やりたいこと夢を目標、現@kr@[pk@krwe,w');
                          setTimeout(() => {
                            $(this).text('やりたいこと夢を目標、現実f.her[;:h[er.h');
                            setTimeout(() => {
                              $(this).text('やりたいこと夢を目標、現実へg.wer[].h[]:e.');
                              setTimeout(() => {
                                $(this).text('やりたいこと夢を目標、現実へ落ge;rwhg');
                                setTimeout(() => {
                                  $(this).text('やりたいこと夢を目標、現実へ落としrjpoer@qwrqw');
                                  setTimeout(() => {
                                    $(this).text('やりたいこと夢を目標、現実へ落とし込mnpgwfwf');
                                    setTimeout(() => {
                                      $(this).text('やりたいこと夢を目標、現実へ落とし込んhrrerjerer');
                                      setTimeout(() => {
                                        $(this).text('やりたいこと夢を目標、現実へ落とし込んでnlwebobewgp');
                                        setTimeout(() => {
                                          $(this).text('やりたいこと夢を目標、現実へ落とし込んでいnfoewonwege');
                                          setTimeout(() => {
                                            $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくknmfpenwpnwe');
                                            setTimeout(() => {
                                              $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくたfhfowefwe');
                                              setTimeout(() => {
                                                $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくためjfepjpefkvs');
                                                setTimeout(() => {
                                                  $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくための@l.[elg[wegwq');
                                                  setTimeout(() => {
                                                    $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくためのプrgwgw0wjwh');
                                                    setTimeout(() => {
                                                      $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくためのプロmwmognweop');
                                                      setTimeout(() => {
                                                        $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくためのプロフなngewnpwen');
                                                        setTimeout(() => {
                                                          $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくためのプロフェならm@f@qwe@fgeqw');
                                                          setTimeout(() => {
                                                            $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくためのプロフェッなら実mpfmqwmfqwe@');
                                                            setTimeout(() => {
                                                              $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくためのプロフェッシwejjwg@e@');
                                                              setTimeout(() => {
                                                                $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくためのプロフェッショwfhfwqjhp');
                                                                setTimeout(() => {
                                                                  $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくためのプロフェッショナl,g[we,[fweve');
                                                                  setTimeout(() => {
                                                                    $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくためのプロフェッショナル');
                                                                  }, 040);
                                                                }, 040);
                                                              }, 040);
                                                            }, 040);
                                                          }, 040);
                                                        }, 040);
                                                      }, 040);
                                                    }, 040);
                                                  }, 040);
                                                }, 040);
                                              }, 040);
                                            }, 040);
                                          }, 040);
                                        }, 040);
                                      }, 040)
                                    }, 040)
                                  }, 040)
                                }, 040);
                              }, 040);
                            }, 040);
                          }, 040);
                        }, 040);
                      }, 040);
                    }, 040);
                  }, 040);
                }, 040);
              }, 040); 
            }, 040);  
          }, 040); 
        }, 040); 
      }, 040);   
    },function(){
      $(this).text('やりたいこと夢を目標、現実へ落とし込んでいくためのプロフェッショナル');
    });
  });






  });



