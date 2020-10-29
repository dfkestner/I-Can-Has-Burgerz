$(function() {
    $(".devour").on("click", function(event) {
        let id = $(this).data("id");
        let devour = $(this).data("devoured");

        let devouredStatus = {
            devoured: devour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredStatus
        }).then(function() {
            console.log(data);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let addBurger = {
            name: $("#burgerz").val().trim(),
            devoured: $("[burger_name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger
        }).then(function() {
                console.log(data);
                location.reload();
            }
        );
    });
});