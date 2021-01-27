// "hello, I'm Sara Zandi", "Sweet like candy",

// ..................start sara picture........................//

    var inkbox = document.getElementById("inked-painted");
    var colorbox = document.getElementById("colored");
    var fillerImage = document.getElementById("inked");

    inkbox.addEventListener("mousemove",trackLocation,false);
    inkbox.addEventListener("touchstart",trackLocation,false);
    inkbox.addEventListener("touchmove",trackLocation,false);

    function trackLocation(e)
    {
        var rect = inked.getBoundingClientRect();
        var position = ((e.pageX - rect.left) / inked.offsetWidth)*100;
        if (position <= 100) { colorbox.style.width = position+"%"; }
    }

    inkbox.addEventListener( "touchstart", trackLocation, false);
    inkbox.addEventListener( "touchmove", trackLocation, false);

// ..................start Type........................//

    $(function(){

        $("#hello").typed({
            strings: [ "hello, I'm Sara", "Lets work together",],
            typeSpeed: 30,
            backDelay: 500,
            loop: true,
            // defaults to false for infinite loop
            loopCount: 2,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#hello").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }




    $(function(){

        $("#typed").typed({
            strings: ["I make the web a pretty place", "I designed and built this site from the ground up"],
            typeSpeed: 40,
            backDelay: 500,
            loop: true,
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }

// ..................end Type........................//



// ..................start slider........................//


        $(document).ready(function(){
        var options = {
            nextButton: true,
            prevButton: true,
            pagination: true,
            animateStartingFrameIn: true,
            autoPlay: true,
            autoPlayDelay: 3000,
            preloader: true,
            preloadTheseFrames: [1],
            preloadTheseImages: [
                "images/tn-model1.png",
                "images/tn-model2.png",
                "images/tn-model3.png"
            ]
        };
        
        var mySequence = $("#sequence").sequence(options).data("sequence");
    });

