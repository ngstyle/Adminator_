$(function () {
    // https://bootstrap-datepicker.readthedocs.io/en/stable/events.html

    $('.start-date').datepicker().on('changeDate',function () {
        $('.start-date').datepicker('hide');
    });

    $('.end-date').datepicker().on('changeDate',function () {
        $('.end-date').datepicker('hide');
    });
});
