  $(document).ready(function(){
        $.ajax({
            url: "databace.php",
            cache: false
        }).done(function(data) {
            console.log("done");
            console.log(data);
			showHouses(data);
        }).fail(function() {
            console.log("error");
        }).always(function() {
            console.log("complete");
        });
    });
