;
(function ($) {
    $.fn.cokkieReset = function () {
        return this.each(function (i, elem) {
            var elem_ = $(elem);
            $(function () {
                elem_.click(function () {
                    var cookielength_ = $(".wrap__box__inner__a").length;
                    for (var i = 0; i < cookielength_; i++) {
                        var expire = new Date();
                        expire.setTime(expire.getTime() - 1000);
                        document.cookie = 'link' + i + '=' + " ";
                        'expires=' + expire.toUTCString();
                    };
                    $(".wrap__box").removeClass("visited");
                });
            });
        });
    };


    $.fn.andygrid = function (option) {
        return this.each(function (i, elem) {
            var elem_ = $(elem);

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                isMobile = true;
            } else {
                isMobile = false;
            };


            $(function () {
                var defolt = {
                    "margin": 20,
                    "cell": 260,
                    "rireki": false,
                    "furufuru": false,
                    "captionBg": "#ffffff",
                    "shuffle": true,
                    "cssCostom": false,
                };
            
                
                
                    var setting = $.extend({},defolt, option);
                
                
                if (!setting.cssCostom) {
                    csshajime();
                }
                var winWharf = elem_.width() / 2;
                elem_.prepend("<div class='loading' style='position:absolute;width:100%;height:100%;background:#fff;z-index:999;'><span class='loading__img' style='background:#000;width:30px;height:30px;display:block;margin:300px auto 0;border-radius:100%;'></span></div>");
                elem_.find(".loading").css({
                    width: "100%",
                    height: "100%",
                    background: "#fff",
                    zIndex: "999"

                });
                elem_.find("loading__img").css({
                    left: winWharf + "px",
                    top: "300px",
                });
                var loadingAnimate = setInterval(elem_.find("loading__img").animate({
                    opacity: 0
                }, 500, function () {
                    $(this).animate({
                        opacity: 1
                    }, 300);
                }), 800);



                var winWharf = elem_.width() / 2;
                var campanyHharf = 160;
                if (!isMobile) {
                    elem_.find(".wrap__box").css({
                        top: campanyHharf,
                        left: winWharf,
                        opacity: 0
                    });
                } else {

                    if (setting.furufuru) {
                        kakudo()
                    };

                };

                /////////
                if (!elem_.find(".andygridCopyright")[0]) {
                    elem_.append("<div class='andygridCopyright' style='position:absolute;bottom:0;right:0;opacity:0.05;font-size:8px;'>(c) 2015 Kotaro Ando <a href='http://www.iidesign.website'>www.iidesign.website</a></div>");
                };

                //onload
                $(window).on("load", function () {
                    //setInterval(grid,3100);
                    //	csshajime();
                    //        var winWharf = elem_.width()/2;
                    //			var campanyHharf=160;
                    //			if(!isMobile){
                    //				elem_.find(".wrap__box").css({top:campanyHharf,left:winWharf,opacity:0});
                    //			}else{
                    //				
                    //			if(setting.furufuru){kakudo()};	
                    //				
                    //			};

                    elem_.find(".loading").fadeOut();
                    clearInterval(loadingAnimate);
                    elem_.find(".wrap__box").hover(function () {
                        var this_ = $(this);
                        elem_.find(".wrap__box__inner__a").css({
                            display: "none"
                        });
                        this_.find(".wrap__box__inner__caption,.wrap__box__inner__caption--img").stop(true, true).animate({
                            opacity: 1
                        }, 600, function () {
                            this_.find(".wrap__box__inner__a").css({
                                display: "block"
                            });

                        });
                    }, function () {
                        var this_ = $(this);
                        this_.find(".wrap__box__inner__caption,.wrap__box__inner__caption--img").stop(true, true).animate({
                            opacity: 0
                        }, 600, function () {
                            this_.find(".wrap__box__inner__a").css({
                                display: "none"
                            });
                        });

                    });
                    var scrTop = $(window).scrollTop();
                    var winH = $(window).height();
                    var campany = elem_.offset().top;
                    if (campany < scrTop + winH - 250) {

                        if (!isMobile) {
                            window.scrollBy(0, -1);
                            window.scrollBy(0, 1);
                        };

                    };
                    if (isMobile) {
                        grid();
                    };

                });

                var timer = false;
                var widthBf_ = $(window).width();
                $(window).on("resize", function () {



                    if (timer !== false) {
                        clearTimeout(timer);
                    };
                    timer = setTimeout(function () {
                        var boxTeisu = new Array();


                        var widthAf_ = $(window).width();
                        if (widthBf_ != widthAf_) {

                            //if(!isMobile){
                            grid();
                            widthBf_ = $(window).width();
                            //};
                        };






                    }, 700);


                });
                var flag = 0;
                var timer2 = false;
                $(window).on("scroll", function () {
                    if (timer2 !== false) {
                        clearTimeout(timer2);
                    };
                    timer2 = setTimeout(function () {
                        var scrTop = $(window).scrollTop();
                        var winH = $(window).height();
                        var campany = elem_.offset().top;
                        if (campany < scrTop + winH - 20) {
                            if (flag == 0 && (!isMobile)) {
                                flag++;
                                if (!isMobile) {
                                    grid();
                                };
                            }

                        };
                    }, 20);

                });


                function csshajime() {
                    $("div").css("display", "block");
                    elem_.css({
                        width: "100%",
                        display: "block",
                        heignt: "600px",
                        position: "relative"
                    });
                    elem_.find(".wrap__box").css({
                        position: "absolute",
                        textAlign: "center",
                        width: "200px",
                        height: "200px",
                        overflow: "hidden",
                        top: "-1500px",
                        left: "-1600px",
                        display: "block",
                        position: "absolute"
                    });
                    elem_.find(".wrap__box__inner").css({
                        width: "100%",
                        height: "600px",
                        margin: "20px",
                        position: "relative",
                        overflow: "hidden",
                        display: "block"

                    });
                    elem_.find(".wrap__box__inner__img").css({
                        width: "100%",
                        height: "auto",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        zIndex: "0",
                        display: "block"
                    });
                    elem_.find(".wrap__box__inner__a").css({
                        width: "100%",
                        height: "auto",
                        display: "block",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        zIndex: "10"

                    });
                    elem_.find(".wrap__box__inner__caption").css({
                        width: "100%",
                        height: "110%",
                        margin: "0px",
                        position: "relative",
                        background: setting.captionBg,
                        opacity: 0,
                        top: "0px",
                        left: "0px",
                        zIndex: "9",
                        display: "table"

                    });
                    elem_.find(".wrap__box__inner__caption__span").css({
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        fontSize: "30px",
                        display: "table-cell",
                        verticalAlign: "middle"

                    });
                    elem_.find(".wrap__box__inner__caption--img").css({
                        width: "100%",
                        height: "auto",
                        margin: "0px",
                        display: "block",
                        position: "absolute",
                        opacity: 0,
                        top: "0px",
                        left: "0px",
                        zIndex: "0",

                    });



                };

                //	function visit(){
                //		
                //		elem_.find(".visited").find(".wrap__box__inner").css("cssText","backgroudColor:#000000");
                //		elem_.find(".visited").find(".wrap__box__inner__img").css("cssText","opacity:0.6 !important");
                //		
                //		};
                function setcss(e) {
                    elem_.css({

                        position: "relative",
                        height: "1000px"


                    });
                    elem_.find(".wrap__box").css({
                        position: "absolute"
                    });
                    elem_.find(".wrap__box__inner").css({

                        margin: e,

                    });
                    elem_.find(".wrap__box__inner__caption").css({

                        margin: (e / 2) * (-1),

                    });
                };

                ///cokkie
                if (setting.rireki) {
                    cokkieRireki();

                };

                function cokkieRireki() {
                    $(window).on("load", function () {
                        cokkieSet();
                        cokkie();
                        //visit();
                        elem_.find(".wrap__box__inner__a").click(function () {
                            cokkie();

                        });
                    });

                    function cokkie() {
                        var company__boxLength = parseInt(elem_.find(".wrap__box").length);

                        for (i = 0; i < company__boxLength; i++) {

                            var this_ = elem_.find(".wrap__box").eq(i);

                            var thisHref_ = this_.find(".wrap__box__inner__a").attr("href");

                            var thisUrlVlue_ = thisHref_.indexOf("//");

                            //alert(thisUrlVlue_);
                            var thisUrl_ = thisHref_.slice(thisUrlVlue_ + 2);
                            var thisUrl_ = thisUrl_.slice(0, -1);

                            //alert(thisUrl_);
                            if (cokkieGet(thisUrl_)) {
                                this_.addClass("visited");
                            } else {

                                this_.removeClass("visited");
                            };
                        };
                    };

                    function cokkieSet() {
                        elem_.find(".wrap__box__inner__a").click(function () {
                            var href_ = $(this).add("href");
                            var eq_ = parseInt(elem_.find(".wrap__box__inner__a").index(this));
                            var expire = new Date();
                            expire.setTime(expire.getTime() + 1000 * 3600 * 24);

                            document.cookie = 'link' + eq_ + '=' + encodeURIComponent(href_[0]);
                            'expires=' + expire.toUTCString();
                        });

                    };

                    function cokkieGet(url_) {
                        var cokkieName_ = encodeURIComponent(url_);

                        var allCokkies_ = document.cookie;
                        var cokkieIndex_ = allCokkies_.indexOf(cokkieName_);
                        var han = -1;
                        //alert(cokkieIndex_);
                        if (cokkieIndex_ != -1) {

                            return true;

                        };
                        return false;

                    };
                };
                //ふるふるファンクション

                // 端末の角度が変わった時
                function kakudo() {
                    window.addEventListener('devicemotion', function (e) {
                        return furu(e);
                    }, true);
                };

                // 端末を振ったときの挙動
                var timer3 = false;

                function furu(e) {
                    var x = e.accelerationIncludingGravity.x; // X方向の加速度
                    var y = e.accelerationIncludingGravity.y; // Y方向の加速度
                    var z = e.accelerationIncludingGravity.z; // Z方向の加速度

                    // 加速度が一定以上のとき
                    if (Math.abs(x) > 25 || Math.abs(y) > 25 || Math.abs(z) > 25) {
                        // ここに振っているときの動作を入れる

                        if (timer3 !== false) {
                            clearTimeout(timer3);
                        };
                        timer3 = setTimeout(function () {
                            grid();
                        }, 900);
                    };
                };



                //グリッド
                function grid() {

                
                    var margin_ = setting.margin;
                    var winW = elem_.width() - margin_;
                    var cell = setting.cell;
                    var box = elem_.find(".wrap__box");
                    var boxLength = box.length;
                    var xpx = winW / (parseInt(winW / cell)); //セルの横幅px
                    var grid_x_length = parseInt(winW / xpx); //グリッドの横の数
                    var grid_y_length = parseInt(boxLength / grid_x_length); //グリッドの縦の数
                    var cell_length = grid_x_length * grid_y_length; //グリッドのセルの数
                    var grid = new Array(boxLength);
                    var boxObj = new Array();
                    var boxTeisu = new Array();

                    if (grid_x_length > 1) {
                        Mbile = true;

                    } else {
                        Mbile = false;
                    }
                    setcss(margin_);
                    //ボックスのidを入れた配列を作る
                    var boxNoArray = new Array();
                    for (var i = 0; i < boxLength; i++) {
                        boxNoArray[i] = i;
                    };

                    if (!elem_.find(".andygridCopyright")[0]) {
                        elem_.append("<div class='andygridCopyright' style='position:absolute;bottom:0;right:0;opacity:0.05;font-size:8px;'>(c) 2015 Kotaro Ando <a href='http://www.iidesign.website'>www.iidesign.website</a></div>");
                    };


                    //シャッフルやー
                    function shuffle(array) {
                        var n = array.length,
                            t, i;

                        while (n) {
                            i = Math.floor(Math.random() * n--);
                            t = array[n];
                            array[n] = array[i];
                            array[i] = t;
                        }

                        return array;
                    };

                    if (setting.shuffle) {
                        shuffle(boxNoArray);
                    };
                    //定数の定義
                    for (var i = 0; i <= boxLength; i++) {
                        var imgWidth = box.eq(boxNoArray[i]).find(".wrap__box__inner__img").attr("width");
                        var imgHight = box.eq(boxNoArray[i]).find(".wrap__box__inner__img").attr("height");
                        boxTeisu[i] = imgHight / imgWidth;
                    };



                    //判定

                    var textmoji = String.fromCharCode(97, 110, 100, 121, 103, 114, 105, 100, 67, 111, 112, 121, 114, 105, 103, 104, 116);
                    var copyright = elem_.find(".andygridCopyright").text();

                    var keyW = String.fromCharCode(119, 119, 119, 46, 105, 105, 100, 101, 115, 105, 103, 110, 46, 119, 101, 98, 115, 105, 116, 101);

                    var msg_ = String.fromCharCode(33879, 20316, 27177, 34920, 31034, 12434, 28040, 21435, 12375, 12394, 12356, 12391, 12367, 12384, 12373, 12356);
                    if (copyright.indexOf(keyW) == -1) {
                        alert(msg_);
                        return false;
                    };



                    //グリッドの定義
                    for (var i = 0; i <= boxLength; i++) {
                        var namex_ = nameX(i);
                        var namey_ = nameY(i);

                        var ob = [namex_, namey_];
                        grid[boxNoArray[i]] = ob;
                    }
                    //座標の定義
                    for (var i = 0; i <= boxLength + 2; i++) {

                        var leftpx = (grid[boxNoArray[i]][0]) * xpx;
                        var a321 = i - grid_x_length;
                        var b321 = 0;

                        while (a321 >= 0) { //ここを柔軟な条件に対応できるよう改変予定（現状可変ボックス非対応）
                            b321 += boxTeisu[a321] * xpx;
                            a321 -= grid_x_length;


                        }
                        if (b321 == null) {
                            b321 = 0;
                        };
                        var toppx = b321; //立て可変はここが肝
                        var bHeit = (parseInt(((boxTeisu[i] * xpx) * 100)) / 100);
                        boxObj[i] = {
                            topPx: toppx,
                            leftPx: leftpx,
                            btmPx: toppx + bHeit,
                            boxTeisu_: boxTeisu[i],
                            boxWidth: xpx,
                            boxHeight: bHeit,
                            gridNameX: grid[boxNoArray[i]][0],
                            gridNameY: grid[boxNoArray[i]][1]
                        };

                    };
                    //最後のボックスのtop位置を取得、MAXとminを入れ替える			
                    var irekae = function () { //最後からのインデックス取得maxとminの
                        var lastArray = new Array();
                        for (var i = 0; i < grid_x_length; i++) {
                            var a = boxLength - i - 1;
                            if (isNaN(boxObj[a]["boxTeisu_"])) {
                                b = 0
                            };
                            lastArray[i] = boxObj[a]["btmPx"];

                        };
                        var MaxBox = Math.max.apply(null, lastArray);
                        var minBox = Math.min.apply(null, lastArray);
                        var Maxindex = lastArray.indexOf(MaxBox);
                        var minindex = lastArray.indexOf(minBox);
                        var Maxindex = boxLength - Maxindex - 1;
                        var minindex = boxLength - minindex - 1;

                        if ((!isNaN(minindex)) && (grid_x_length > 1)) {
                            if (boxObj[Maxindex]["btmPx"] > (boxObj[minindex]["btmPx"] + boxObj[Maxindex]["boxHeight"])) {
                                boxObj[Maxindex]["topPx"] = boxObj[minindex]["topPx"] + boxObj[minindex]["boxHeight"];
                                boxObj[Maxindex]["leftPx"] = boxObj[minindex]["leftPx"];
                            }

                        };
                        return MaxBox;
                    };
                    if (grid_x_length > 1) {
                        for (var i = 0; i < 3; i++) {
                            var maxbox = irekae();
                        };
                    } else {
                        var maxbox = irekae();
                    };
                    elem_.css({
                        height: maxbox + margin_ + "px"
                    });

                    for (var i = 0; i < boxObj.length; i++) { //ボックスの配置		
                        box.eq(boxNoArray[i]).css({
                            width: boxObj[i]["boxWidth"] + "px",
                            height: boxObj[i]["boxHeight"] + "px"
                        });
                        box.eq(boxNoArray[i]).animate({
                            top: boxObj[i]["topPx"] + "px",
                            left: boxObj[i]["leftPx"] + "px",
                            opacity: 1
                        }, 1500);
                        box.eq(boxNoArray[i]).find(".wrap__box__inner__img,.wrap__box__inner__caption--img").css({
                            width: boxObj[i]["boxWidth"] - margin_ + "px",
                            height: boxObj[i]["boxHeight"] - margin_ + "px"
                        });
                        box.eq(boxNoArray[i]).find(".wrap__box__inner__caption,.wrap__box__inner__caption__span").css({
                            width: boxObj[i]["boxWidth"] + "px",
                            height: boxObj[i]["boxHeight"] + "px"
                        });
                        box.eq(boxNoArray[i]).find(".wrap__box__inner__a").css({
                            width: boxObj[i]["boxWidth"] - margin_ + "px",
                            height: boxObj[i]["boxHeight"] - margin_ + "px"
                        });
                        box.eq(boxNoArray[i]).find(".wrap__box__inner").css({
                            width: boxObj[i]["boxWidth"] + "px",
                            height: boxObj[i]["boxHeight"] - margin_ + "px"
                        });

                    };

                    function nameY(e) { //nameyの計算
                        var e_ = parseInt(e / grid_x_length);
                        return e_;
                    };

                    function nameX(e) { //namexの計算
                        var e_ = parseInt(e % grid_x_length);

                        return e_;
                    };

                };



            });

        });

    };
})(jQuery);