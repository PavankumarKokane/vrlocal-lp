$(document).ready(function () {
    var d = new Date();
    $(".copyrightYear").html(d.getFullYear());

    var winHT = $(window).height();
    var winWD = $(window).width();
    isFloorplan = 0;
    isBrochure = 0;

    $(".goto-home").on("click", function () {
        $("html,body").animate(
            {
                scrollTop: 0,
            },
            1000
        );
    });

    $(".scroll-next").click(function () {
        var cls = $(this).closest("section").next().offset().top - 50;
        $("html, body").animate({ scrollTop: cls }, 1000);
    });

    var bannerheight = $(".form-main-div").height() + 50;
    $(".banner_height").css("height", bannerheight);

    $(".menu-icon-mobile").on("click", function () {
        $(".nav-links").slideToggle();
    });

    if (winWD <= 1024) {
        $(".nav-links a").on("click", function () {
            $(".menu-icon-mobile").trigger("click");
        });

        $(".mob_enq_click, .frmclose").on("click", function () {
            isBrochure = 0;
            isFloorplan = 0;
            $(".form-container").toggleClass("show");
        });
    }

    var childrenSelector = $(".nav-links a");
    var aChildren = $(".nav-links a"); // find the a children of the list items
    if (winWD <= 1024) var gap = 55;
    // $(".header-wrapper").outerHeight(); //Navigation height
    else var gap = 100;
    var aArray = []; // create the empty aArray
    for (var i = 0; i < childrenSelector.length; i++) {
        var aChild = aChildren[i];
        if (!$(aChild).hasClass("extLink")) {
            if ($(aChild).attr("rel")) {
                var ahref = $(aChild).attr("rel");
                aArray.push(ahref);
            }
        }
    }

    //On Scroll - Add class active to active tab
    $(window).scroll(function () {
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();
        for (i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $("#" + theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $("#" + theID).outerHeight(); // get the height of the div in question
            if (windowPos >= divPos - gap && windowPos < divPos - gap + divHeight) {
                if (!$("a[rel='" + theID + "']").hasClass("active")) {
                    // ga('set', 'page', '/'+theID);
                    // ga('send', 'pageview');
                    $("a[rel='" + theID + "']").addClass("active");
                }
            } else {
                $("a[rel='" + theID + "']").removeClass("active");
            }
        }

        //If document has scrolled to the end. Add active class to the last navigation menu
        if (windowPos + windowHeight == docHeight) {
            if (!$(".nav-links a:not(.extLink):last-child").hasClass("active")) {
                var navActiveCurrent = $(".active").attr("rel");
                $("a[rel='" + navActiveCurrent + "']").removeClass("active");
                $(".nav-links a:not(.extLink):last-child").addClass("active");
            }
        }
    });

    //On Click
    $(".nav-links a").on("click", function () {
        if (!$(this).hasClass("extLink")) {
            var href = $(this).attr("rel");
            if (winWD <= 700) var gap = 150;
            // $(".header-wrapper").outerHeight(); //Navigation height
            else var gap = 96;

            $("html,body").animate(
                {
                    scrollTop: $("#" + href + " " + ".section-name").offset().top - gap,
                },
                1000
            );
        }
    });
});

$(window).scroll(function () {
    $(".lazy").each(function () {
        if ($(this).attr("data-src")) {
            this.tagName == "IMG" || this.tagName == "IFRAME" ? $(this).attr("src", $(this).data("src")) : $(this).css("background-image", "url(" + $(this).data("src") + ")");
            $(this).removeAttr("data-src");
        }
    });
});

$(document).ready(function () {

    $(".form-set").submit(function (e) {
        e.preventDefault();
        $(this).trigger("reset");
    });

    $(".book-audit-form").on("click", function () {
        $("#overlay1").css({ display: "block" });
    });
    $("#close2").on("click", function () {
        $("#overlay1").css({ display: "none" });
    });

    var winWD = $(window).width();
    if (winWD < 768) {
        $(".open-form").on("click", function () {
            $("#overlay").css({ display: "block" });
        });
        $("#close1").on("click", function () {
            $("#overlay").css({ display: "none" });
        });
    } else {
        $(".open-form").on("click", function () {
            $("html, body").animate(
                {
                    scrollTop: $("#banner").offset().top,
                },
                2000
            );
        });
    }

    $(".testimonials-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: '140px',
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        fade: false,
        infinite: true,
        arrows: true,
        speed: 1000,
        prevArrow: $(".button-prev1"),
        nextArrow: $(".button-next1"),
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding: "140px",
                },
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "140px",
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".our-client-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        fade: false,
        infinite: true,
        arrows: true,
        speed: 1000,
        prevArrow: $(".button-prev2"),
        nextArrow: $(".button-next2"),
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });

    $(".banner-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        fade: false,
        //variableWidth: true,
        infinite: true,
        asNavFor: ".contact-form-slider",
        arrows: false,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".contact-form-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        appendDots: $(".banner-dot-slider"),
        fade: false,
        infinite: true,
        asNavFor: ".banner-slider",
        adaptiveHeight: true,
        arrows: false,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".vrlocal-points").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        fade: false,
        infinite: true,
        arrows: true,
        prevArrow: $(".vrlocal-points-prev"),
        nextArrow: $(".vrlocal-points-next"),
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 990,
                settings: {
                    centerMode: true,
                    centerPadding: "90px",
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: "90px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // $('.banner-dot-slider .list-index[data-slide]').click(function(e) {
    //   e.preventDefault();
    //   var slideno = $(this).data('slide');
    //   $('.contact-form-slider').slick('slickGoTo', slideno - 1);
    // });

    $(".list-index").click(function () {
        $(".list-index").removeClass("active");
        $(this).addClass("active");
    });

    var winWD = $(window).width();
    if (winWD < 768) {
        $(".case-studies-points").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            fade: false,
            infinite: true,
            arrows: true,
            prevArrow: $(".case-studies-prev"),
            nextArrow: $(".case-studies-next"),
            speed: 1000,
            centerMode: true,
            centerPadding: "20px",
        });
    }

    if (winWD > 767) {
        // 	$("#services").flipster({
        //     style: 'flat',
        //     spacing: -0.25,
        //     buttons: false,
        // });
        $(".services-slider").on("init", function () {
            $(".slick-active").prev().removeClass("nextdiv").addClass("prevdiv");
            $(".slick-active").next().removeClass("prevdiv").addClass("nextdiv");
        });

        $(".services-slider")
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "150px",
                autoplay: false,
                dots: false,
                fade: false,
                infinite: true,
                arrows: true,
                speed: 1000,
                prevArrow: $(".button-prev"),
                nextArrow: $(".button-next"),
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                        },
                    },
                    {
                        breakpoint: 990,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerPadding: "100px",
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            })
            .on("afterChange", function () {
                //console.log($(".slick-active"));
                $(".slick-active").prev().removeClass("nextdiv").addClass("prevdiv");
                $(".slick-active").next().removeClass("prevdiv").addClass("nextdiv");
            });
    }

    $("#mobile-no,#mobile-no1").on("input", function () {
        if (/^0/.test(this.value)) {
            this.value = this.value.replace(/^0/, "");
        }
        if (/^1/.test(this.value)) {
            this.value = this.value.replace(/^1/, "");
        }
        if (/^2/.test(this.value)) {
            this.value = this.value.replace(/^2/, "");
        }
        if (/^3/.test(this.value)) {
            this.value = this.value.replace(/^3/, "");
        }
        if (/^4/.test(this.value)) {
            this.value = this.value.replace(/^4/, "");
        }
        if (/^5/.test(this.value)) {
            this.value = this.value.replace(/^5/, "");
        }
    });
    $(".alpha-only").keypress(function (event) {
        var inputValue = event.charCode;
        if (!(inputValue >= 65 && inputValue <= 121) && inputValue != 32 && inputValue != 0) {
            event.preventDefault();
        }
    });
    $("#mobile-no,#mobile-no1").keypress(function (e) {
        var length = $(this).val().length;
        if (length > 9) {
            return false;
        } else if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        } else if (length == 0 && e.which == 48) {
            return false;
        }
    });

});