$( () => {
    
    // toggle class open 
    $("header .contener .links .icon").click( function () {
        $(this).toggleClass("open");
    });

    // add class active to link clicked
    $("header .contener .links ul li").click( function () {

        // remove class active to all links
        $(this).siblings().children("a").removeClass("active");

        // add class
        $(this).children("a").addClass("active");
    })

    // window app
    // run anmation or action when scroll to section
    const fetuerHeightPage = $(".feature").offset().top;

    $(window).on("scroll", () => {

        const scrollingMatch = $(window).scrollTop();

        if (scrollingMatch >= fetuerHeightPage) {

            $("header").css({backgroundColor: "#36546d"})

        } else {

            $("header").css({backgroundColor: "white"})
        }
    })

    // Dynamic tap
    // hide show sections 
    // $("header .contener .links ul li").on("click", function () {

    //     const sectionName = $(this).children("a").text();

    //     // hide all sections 
    //     $("body > section").hide()

    //     // show section 
    //     $(`body > section#${sectionName}`).show().css({marginTop: "68px"});
    // })


    // scroll to section 
    $("header .contener .links ul li").on("click", function () {

        const sectionHeight = $("body section#" + $(this).children("a").text()).offset().top;
        
        $("html, body").animate({
            scrollTop: sectionHeight - $("header").innerHeight(),
        })
    })



    // scroll to top App

    const buttonScroll = $(".scroll-top");

    // show and hide button
    $(window).scroll( () => {

        checkScrolling();      
    })

    checkScrolling();   

    function checkScrolling() {

        const scrollingMatch = $(window).scrollTop();

        if(scrollingMatch >= $(".home").innerHeight()) {
            
            buttonScroll.show()

        } else {

            buttonScroll.hide()
        }
    }

    // run action when click button
    buttonScroll.click( () => {
        $("body,html").animate({
            scrollTop: 0
        }, 500)
    })

})