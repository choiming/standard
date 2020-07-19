
        //라이트박스
          $(".lightbox").lightGallery({
            thumbnail: true,
            autoplay: true,
            pause: 3000,
            progressBar: true
        }); 
         
        //레이어 팝업
        $(".layer").click(function(e){
            e.preventDefault();
            //$("#layer").css("display","block");
            //$("#layer").show();
            //$("#layer").fadeIn();
            $("#layer").slideDown();
        });

        $("#layer .close").click(function(e){
            e.preventDefault();
            //$("#layer").css("display","block");
            //$("#layer").show();
            //$("#layer").fadeOut();
            $("#layer").slideUp();
        });

        
        //윈도우팝업
        $(".window").click(function(e){
            e.preventDefault();
            //window.open("파일명", "팝업이름", "옵션설정");
            //옵션 : left, top, width, height, status, toolbor, location, menubar, scrollbars, fullscreen, channelmode
            window.open('sample_popup.html', 'popup01', 'width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
        });
        
        //탭메뉴
        var $tab_list = $(".tab_menu");
        
        $tab_list.find("ul ul").hide();
        $tab_list.find("li.active > ul").show();
        
        function tabMenu(e) { 
            e.preventDefault();
            var $this = $(this);
            $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide()
        }
        $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);
        
        //배너슬라이드
        $(document).ready(function(){
            $(".ban").slick({
                infinite:true,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true
            });
        });

        //갤러리
        $(".gallery_img").slick({
            fade: true,
            pauseOnHover: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 1 
        })
        $(".play").click(function(){
            $(".gallery_img").slick("slickPlay");
            
        })
        $(".pause").click(function(){
            $(".gallery_img").slick("slickPause");
            
        })
        $(".prev").click(function(){
            $(".gallery_img").slick("slickPrev");
            
        })
        $(".next").click(function(){
            $(".gallery_img").slick("slickNext");
            
        })


        //버튼을 클릭하면 전체 메뉴가 보이게
        $(".tit .btn").click(function(e){
            e.preventDefault();
            //$("#cont_nav").css("display","block"); 나타나게 함
            //$("#cont_nav").show(); 나타나게 함
            //$("#cont_nav").fadeIn(); 서서히 나타나는 효과
            //$("#cont_nav").slideDown(); 슬라이드효과--위것들은 한번밖에 못함
            //$("#cont_nav").toggle(); show와 hide가 합쳐진 기능
            //$("#cont_nav").fadeToggle(); 서서히 나타내는거 두번
            $("#cont_nav").slideToggle(200);
            //$(".tit .btn").addClass("on"); 온 클래스만 작업
            //$(".tit .btn").toggleClass("on"); 자기자신 표현 this
            $(this).toggleClass("on");
        });