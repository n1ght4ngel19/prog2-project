// var isbn = $('.book').data('isbn');

// $.ajax({
//   dataType: 'json',
//   url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn,
//   success: handleResponse
// });

// function handleResponse( response ) {
//   $.each( response.items, function( i, item ) {
    
//     var title    = item.volumeInfo.title,
//         author   = item.volumeInfo.authors[0],        
//         thumb    = item.volumeInfo.imageLinks.thumbnail;
    
//     $('.title').text( title );
//     $('.author').text( author );
//     $('.thumbnail').attr('src', thumb);
//   });
// }

$(document).ready(function() {

    $(function() {
        var isOpen = false;

        $("#toggle-side-navbar").click(function() {
            if(!isOpen) {
                $("#side-navbar").css("display", "block");
                isOpen = !isOpen;
            } else {
                $("#side-navbar").css("display", "none");
                isOpen = !isOpen;
            }
        });
    });

    $("#main-tabs").tabs();

    $("#sidenav").accordion({
        collapsible: true,
    });

    $(function() {
        $(".btn").click(function() {
            var attr = $(this).attr("data-genre");

            $(".btn").removeClass("active");
            $(this).addClass("active");

            $(".book").hide();

            switch (attr) {
                case "fantasy":
                    $("." + attr).show();
                    break;
                case "science-fiction":
                    $("." + attr).show();
                    break;
                case "cyberpunk":
                    $("." + attr).show();
                    break;
                default:
                    $(".book").show();
                    break;
            }
        });
    });

$(function() {
    $(".cover").click(function() {
            $("#home-books").dialog()
    })
});





})