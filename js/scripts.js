$(document).ready(function() {
    /*
    --------------------
    | BUTTON ADD ORDER |
    --------------------
/* FUNCTION showDATA = SHOW DATA WITH AJAX FROM DB */

    function showData() {
        
            event.preventDefault();
            var $results = $(".tab-body");
            var itemCount = 1; // used to remove button
            var obj = { //used to remove btn
                "rowId": itemCount,
                "firstname": $("#input-first").val(),
                "lastname": $("#input-last").val(),
                "date": $("#datepicker").val(),
                "time": $("#input-time").val(),
                "long": $("#select-long").val(),
                "end": $("#select-long").val(),
            };

            $.ajax({
                url: "display.php",
                type: "GET",
                dataType: 'json',
                data: $(".tab-body").serialize(),

                success: function(data) {
                    $(".tab-body").find("tr").remove(); //remove tr elements before showing actual from db 

                    for ($i = 0; $i < 27; $i++) {
                        $results.append('<tr class="tab-row' + itemCount + '"><td>' + data[$i][1] + '</td><td>' + data[$i][2] + '</td><td>' + data[$i][3] + '</td><td>' + data[$i][4] + '</td><td>' + data[$i][5] + '</td><td>xxxx</td><td><button id=' + itemCount + '><i class="fa fa-times" aria-hidden="true"></i></button></td>' + '</tr>');

                        $("#" + itemCount).click(function() { // click the remove button
                            var buttonId = $(this).attr("id");
                            //write the logic for removing from the array
                            $(".tab-row" + buttonId).remove();

                            // remove row from database
                            $.ajax({
                                url: "delete.php",
                                type: "POST",
                                async: true,
                                data: {
                                    firstname: firstName,
                                    lastname: lastName,
                                    date: dateInput,
                                    time: timeInput,
                                    period: longInput
                                },
                                dataType: 'json'

                            })
                        });
                        itemCount++;

                    }
                }
            })
        
    }
    /*FUNCTION sendDATA = SEND DATA WITH AJAX TO DB and ADD ROW */

    function sendData() {
        $(".btn-add").click(function(event) {
            event.preventDefault();
            var firstName = $("#input-first").val();
            var lastName = $("#input-last").val();
            var dateInput = $("#datepicker").val();
            var timeInput = $("#input-time").val();
            var longInput = $("#select-long").val();

            if ((firstName != "") && (lastName != "") && (dateInput != "") && (timeInput != "") && (longInput != "")) {
                $.ajax({
                    url: "insert.php",
                    type: "POST",
                    async: true,
                    data: {
                        firstname: firstName,
                        lastname: lastName,
                        date: dateInput,
                        time: timeInput,
                        period: longInput
                    },
                    dataType: 'json'

                })
                alert("DODANO NOWY TERMIN");

            } else {
                if (firstName === "") {
                    $("#input-first").addClass('toggleError');

                } else if (lastName === "") {
                    alert("Musisz podać nazwisko");

                } else if (dateInput === "") {
                    alert("Musisz wybrać dzień");

                } else if (timeInput === "") {
                    alert("Wybierz prawidłową godzinę");
                }

            }
            showData();

        });
        
    }


    
    
    /* ADD DATEPICKER UI */
    $("#datepicker").datepicker();

    /* CALL THE FUNCTIONS */
    showData();
    sendData();
});
