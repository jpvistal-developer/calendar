$(function() {
    var thistd;
    var timeslotval;
    $("td").on("click", function() {
        $("#dialog").dialog("open");
        $('#form-error').text('')
        thistd = $(this).children();
        timeslotval = $(this).children().children().children().text();
        timeslotvallen = $(this).children().children().children().length;
    });


    $("#dialog").dialog({
        autoOpen: false,
        width: 450,
        height: 310,
        show: {
            effect: "blind",
            duration: 300
        },
        hide: {
            effect: "explode",
            duration: 300
        },
        buttons: [{
            text: "DONE",
            click: function() {
                if ($('#subject-input').val() != '') {
                    let subject = $('#subject-input').val();
                    let timeslot = $('#slot-input').val();
                    let backgroundcolor = $('#event-color-input').val();
                    if (timeslotval == timeslot || timeslotvallen == 4) {
                        $('#form-error').text('SLOT IS ALREADY TAKEN')
                    } else {
                        if (timeslot == 'AM') {
                            $(thistd).prepend('<div style = "background-color: ' + backgroundcolor + '" class = "events-item"> <span>' + timeslot + '</span>:' + subject + '<span class="close ui-icon ui-icon-closethick"></span></div>');
                        } else if (timeslot == 'PM') {
                            $(thistd).append('<div style = "background-color: ' + backgroundcolor + '" class = "events-item"> <span>' + timeslot + '</span>:' + subject + '<span class="close ui-icon ui-icon-closethick"></span></d iv > ');
                        }
                        $('#subject-input').val('');
                        $('#dialog').dialog("close");
                    }
                } else {
                    $('#form-error').text('PLEASE FILL IN ALL DATA!')
                }
            },
            class: "done"
        }]
    });

    $(".event-holder").on('click', '.close', function(event) {
        event.stopPropagation();
        $(this).parent().remove()
    });

    $(thistd).sort(function(a, b) {
        // ...
    }).appendTo();
});



$(function() {
    $("div.droptrue").sortable({
        connectWith: "div"
    });

    $("div.dropfalse").sortable({
        connectWith: "div",
        dropOnEmpty: false,
        cancel: ".ui-state-disabled"
    });
});