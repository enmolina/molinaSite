$(document).ready(function(){
    var results = [
      "You will find a thing. It may be important.",
      "Stop eating now. Food poisoning is no fun.",
      "Sleep with one eye open tonight.",
      "Your reality check about to bounce.",
      "The end is near, might as well have dessert.",
      "Run.",
      "You will die alone and poorly dressed.",
      "Tomorrow is Saturday. And Sunday comes afterwards."
              ];

    var unknown=["I'm not familiar with that... sorry!"];
    var clickCount = 0;

    // this is the same as below
    /*$().click( function() {
            function() {
                    clickCount++;
                    if(clickCount == 0) {
                    }  else if( clickCount == 1) {

                    }
                    prompt("emily ain't got no cooties");

    } );
    */

    // $("#MoonQuadrant").on("click", function() {
    //     clickCount++;
    //     if(clickCount == 0) {
    //     }  else if( clickCount == 1) {

    //     }
    //     prompt("emily ain't got no cooties");
    // });


    $(".turquoise").on("click", onClickHandler);
    $(".fuchsia").on("click", onClickHandler);
    $(".green").on("click", onClickHandler);
    $(".yellow").on("click", onClickHandler);


    function onClickHandler(event) {
        $(".fuchsia").text("8");
        $(".turquoise").text("6");
        $(".green").text("2");
        $(".yellow").text("4");

        //turn off all first click handlers
        $(".fuchsia").off( "click", onClickHandlerFirstTime);
        $(".turquoise").off(  "click", onClickHandlerFirstTime);
        $(".green").off( "click", onClickHandlerFirstTime);
        $(".yellow").off(  "click", onClickHandlerFirstTime);

        //turn on all second click handlers
        $(".fuchsia").on( "click", onClickHandlerAgain);
        $(".turquoise").on( "click", onClickHandlerAgain);
        $(".green").on( "click", onClickHandlerAgain);
        $(".yellow").on( "click", onClickHandlerAgain);
    }


    function onClickHandlerAgain(event) {

        var id = event.currentTarget.id;
        console.log(id);
        if( id == "8") {
            $("8").text("Fortune 1.");
        } else if( id == "6") {
            $(".turquoise").text("Fortune 2.");
            } else if( id == "2") {
                $(".green").text("Fortune 3.");
                } else if( id == "4") {
                    $(".yellow").text("Fortune 4.");
                    }

    }


        $(".turquoise").append("<p> This is going to be a new paragraph with your selection: " + signChoice +" </p>");//.html("<p> This is going to be a new paragraph with your selection: " + signChoice +" </p>"); //.css({background: '#CC0'}); //.text("YOu chose this prompt: " + signChoice);

        function action1(choice) {
            //change each div element to have the image or content that you want
        }


        function action2(choice) {

        }

        function action3(choice) {

        }
});