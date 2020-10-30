$(function() {
    $(".devour").on("click", function() {
        let id = $(this).data("id");
        let devour = $(this).data("devour");
        console.log(id)
        console.log(devour)

        let devouredStatus = {
            devoured: devour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredStatus
        }).then(function() {
            console.log(devour);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let addBurger = {
            name: $("#burgerz").val().trim(),
            devoured: 0
        };

        console.log(addBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger
        }).then(function() {
                location.reload();
            }
        );
    });
});