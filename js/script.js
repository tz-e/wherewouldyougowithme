function submitButton() {
    console.log(document.getElementById("role").value);

};

$(document).ready(function() {
    $('#type-of-vacation').on('change', function() {
        if ($(this).val() == 'countryside') {
            $("#question_one_countryside").show();
            $("#question_one_city").hide();
        } else {
            $("#question_one_city").show();
            $("#question_one_countryside").hide();
        }
        $("#question_two_hard_countryside").hide();
        $("#question_two_easy_countryside").hide();
        $("#question_two_metropolis_city").hide();
        $("#question_two_small_city").hide();

        $("#result").hide();
        $("#faroe").hide();
        $("#iceland").hide();
        $("#scotland").hide();
        $("#ireland").hide();
        $("#porto").hide();
        $("#saint_petersburg").hide();
        $("#vienna").hide();
        $("#loira").hide();
    });



    /*--------------------------------------------------------
    -------------------CITY-----------------------------------
    --------------------------------------------------------*/
    $('#type-of-city').on('change', function() {
        $("#question_one_city").show();
        if ($(this).val() == 'metropolis') {
            $("#question_two_metropolis_city").show();
            $("#question_two_small_city").hide();
        } else {
            $("#question_two_small_city").show();
            $("#question_two_metropolis_city").hide();
        }
        $("#question_one_countryside").hide();
        $("#question_two_hard_countryside").hide();
        $("#question_two_easy_countryside").hide();

        $("#result").hide();
        $("#faroe").hide();
        $("#iceland").hide();
        $("#scotland").hide();
        $("#ireland").hide();
        $("#porto").hide();
        $("#saint_petersburg").hide();
        $("#vienna").hide();
        $("#loira").hide();
    });

    $('#choice-of-big-city').on('change', function() {
        $("#question_one_city").show();
        $("#question_two_metropolis_city").show();
        $("#result").show();
        if ($(this).val() == 'monuments') {
            $("#saint_petersburg").hide();
            $("#vienna").show();
        } else {
            $("#saint_petersburg").show();
            $("#vienna").hide();
        }
        $("#question_two_small_city").hide();
        $("#question_one_countryside").hide();
        $("#question_two_hard_countryside").hide();
        $("#question_two_easy_countryside").hide();

        $("#faroe").hide();
        $("#iceland").hide();
        $("#scotland").hide();
        $("#ireland").hide();
        $("#porto").hide();
        $("#loira").hide();
    });

    $('#choice-of-small-city').on('change', function() {
        $("#question_one_city").show();
        $("#question_two_small_city").show();
        $("#result").show();
        if ($(this).val() == 'port-portugal') {
            $("#porto").show();
            $("#loira").hide();
        } else {
            $("#porto").hide();
            $("#loira").show();
        }

        $("#question_two_metropolis_city").hide();
        $("#question_one_countryside").hide();
        $("#question_two_hard_countryside").hide();
        $("#question_two_easy_countryside").hide();

        $("#saint_petersburg").hide();
        $("#vienna").hide();
        $("#faroe").hide();
        $("#iceland").hide();
        $("#scotland").hide();
        $("#ireland").hide();
    });

    /*--------------------------------------------------------
    -------------------COUNTRYSIDE----------------------------
    --------------------------------------------------------*/
    $('#type-of-countryside').on('change', function() {
        $("#question_one_countryside").show();
        if ($(this).val() == 'trekking') {
            $("#question_two_hard_countryside").show();
            $("#question_two_easy_countryside").hide();
        } else {
            $("#question_two_hard_countryside").hide();
            $("#question_two_easy_countryside").show();
        }

        $("#question_one_city").hide();
        $("#question_two_small_city").hide();
        $("#question_two_metropolis_city").hide();

        $("#result").hide();
        $("#faroe").hide();
        $("#iceland").hide();
        $("#scotland").hide();
        $("#ireland").hide();
        $("#porto").hide();
        $("#saint_petersburg").hide();
        $("#vienna").hide();
        $("#loira").hide();
    });

    $('#choice-of-hard-countryside').on('change', function() {
        $("#question_one_countryside").show();
        $("#question_two_hard_countryside").show();
        $("#result").show();
        if ($(this).val() == 'waterfall') {
            $("#faroe").hide();
            $("#iceland").show();

        } else {
            $("#faroe").show();
            $("#iceland").hide();
        }
        $("#question_two_easy_countryside").hide();
        $("#question_one_city").hide();
        $("#question_two_small_city").hide();
        $("#question_two_metropolis_city").hide();

        $("#scotland").hide();
        $("#ireland").hide();
        $("#porto").hide();
        $("#saint_petersburg").hide();
        $("#vienna").hide();
        $("#loira").hide();
    });


    $('#choice-of-easy-countryside').on('change', function() {
        $("#question_one_countryside").show();
        $("#question_two_easy_countryside").show();
        $("#result").show();
        if ($(this).val() == 'castles') {
            $("#scotland").show();
            $("#ireland").hide();

        } else {
            $("#scotland").hide();
            $("#ireland").show();
        }
        $("#question_two_hard_countryside").hide();
        $("#question_one_city").hide();
        $("#question_two_small_city").hide();
        $("#question_two_metropolis_city").hide();

        $("#faroe").hide();
        $("#iceland").hide();
        $("#porto").hide();
        $("#saint_petersburg").hide();
        $("#vienna").hide();
        $("#loira").hide();
    });
});