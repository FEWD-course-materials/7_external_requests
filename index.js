$(document).ready(function() {
    generateQuote();

    $(".generate-quote").click(generateQuote);

    function generateQuote() {
        $.ajax({
            url: "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
            dataType: "json",
            method: "GET",
        }).done(function(data) {
            $(".quote").html(data.quoteText);
            $(".author").html(data.quoteAuthor);
        });
    };
})