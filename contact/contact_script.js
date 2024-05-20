$(document).ready(function () {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    $("#contactForm").submit(function (event) {
        event.preventDefault(); 
        modal.style.display = "block"; 
    });
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $("#date").datepicker({
        changeMonth: true,
        changeYear: true
    });

    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            "Okay": function () {
                $(this).dialog("close");
            }
        }
    });

    $("#contactForm").validate({
        rules: {
            name: "required",
            surname: "required",
            email: {
                required: true,
                email: true
            },
            date: {
                required: true,
                date: true
            },
            message: "required"
        },
        messages: {
            name: "Please enter your name",
            surname: "Please enter your surname",
            email: "Please enter a valid email address",
            date: "Please enter a valid date",
            message: "Please enter a message"
        },
        submitHandler: function (form) {
            $("#dialog").dialog("open");
            return false;
        }
    });
});
