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
    });
});