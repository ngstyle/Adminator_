$(function () {

    let drawSparklines = function drawSparklines() {
        // console.log("drawSparklines...");

        if ($('#sparklinedash').length > 0) {
            $('#sparklinedash').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
                type: 'bar',
                height: '20',
                barWidth: '3',
                resize: true,
                barSpacing: '3',
                barColor: '#4caf50'
            });
        }

        if ($('#sparklinedash2').length > 0) {
            $('#sparklinedash2').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
                type: 'bar',
                height: '20',
                barWidth: '3',
                resize: true,
                barSpacing: '3',
                barColor: '#9675ce'
            });
        }

        if ($('#sparklinedash3').length > 0) {
            $('#sparklinedash3').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
                type: 'bar',
                height: '20',
                barWidth: '3',
                resize: true,
                barSpacing: '3',
                barColor: '#03a9f3'
            });
        }

        if ($('#sparklinedash4').length > 0) {
            $('#sparklinedash4').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
                type: 'bar',
                height: '20',
                barWidth: '3',
                resize: true,
                barSpacing: '3',
                barColor: '#f96262'
            });
        }
    };

    drawSparklines();

    // Redraw sparklines on resize
    $(window).resize(_.debounce(drawSparklines, 150));


    // ------------------------------------------------------
    // @Other Sparklines
    // ------------------------------------------------------
    $('#sparkline').sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
        type: 'line',
        resize: true,
        height: '20'
    });

    $('#compositebar').sparkline('html', {
        type: 'bar',
        resize: true,
        barColor: '#aaf',
        height: '20'
    });

    $('#compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
        composite: true,
        fillColor: false,
        lineColor: 'red',
        resize: true,
        height: '20'
    });

    $('#normalline').sparkline('html', {
        fillColor: false,
        normalRangeMin: -1,
        resize: true,
        normalRangeMax: 8,
        height: '20'
    });

    $('.sparktristate').sparkline('html', {
        type: 'tristate',
        resize: true,
        height: '20'
    });

    $('.sparktristatecols').sparkline('html', {
        type: 'tristate',
        colorMap: {
            '-2': '#fa7',
            resize: true,
            '2': '#44f',
            height: '20'
        }
    });

    let values = [5, 4, 5, -2, 0, 3, -5, 6, 7, 9, 9, 5, -3, -2, 2, -4];
    let valuesAlt = [1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1];

    $('.sparkline').sparkline(values, {
        type: 'line',
        barWidth: 4,
        barSpacing: 5,
        fillColor: '',
        lineColor: color.colors['red-500'],
        lineWidth: 2,
        spotRadius: 3,
        spotColor: color.colors['red-500'],
        maxSpotColor: color.colors['red-500'],
        minSpotColor: color.colors['red-500'],
        highlightSpotColor: color.colors['red-500'],
        highlightLineColor: '',
        tooltipSuffix: ' Bzzt',
        tooltipPrefix: 'Hello ',
        width: 100,
        height: undefined,
        barColor: '9f0',
        negBarColor: 'ff0',
        stackedBarColor: ['ff0', '9f0', '999', 'f60'],
        sliceColors: ['ff0', '9f0', '000', 'f60'],
        offset: '30',
        borderWidth: 1,
        borderColor: '000'
    });

    $('.sparkbar').sparkline(values, {
        type: 'bar',
        barWidth: 4,
        barSpacing: 1,
        fillColor: '',
        lineColor: color.colors['deep-purple-500'],
        tooltipSuffix: 'Celsius',
        width: 100,
        barColor: '39f',
        negBarColor: color.colors['deep-purple-500'],
        stackedBarColor: ['ff0', '9f0', '999', 'f60'],
        sliceColors: ['ff0', '9f0', '000', 'f60'],
        offset: '30',
        borderWidth: 1,
        borderColor: '000'
    });

    $('.sparktri').sparkline(valuesAlt, {
        type: 'tristate',
        barWidth: 4,
        barSpacing: 1,
        fillColor: '',
        lineColor: color.colors['light-blue-500'],
        tooltipSuffix: 'Celsius',
        width: 100,
        barColor: color.colors['light-blue-500'],
        posBarColor: color.colors['light-blue-500'],
        negBarColor: 'f90',
        zeroBarColor: '000',
        stackedBarColor: ['ff0', '9f0', '999', 'f60'],
        sliceColors: ['ff0', '9f0', '000', 'f60'],
        offset: '30',
        borderWidth: 1,
        borderColor: '000'
    });

    $('.sparkdisc').sparkline(values, {
        type: 'discrete',
        barWidth: 4,
        barSpacing: 5,
        fillColor: '',
        lineColor: '9f0',
        tooltipSuffix: 'Celsius',
        width: 100,
        barColor: '9f0',

        negBarColor: 'f90',

        stackedBarColor: ['ff0', '9f0', '999', 'f60'],
        sliceColors: ['ff0', '9f0', '000', 'f60'],
        offset: '30',
        borderWidth: 1,
        borderColor: '000'
    });

    $('.sparkbull').sparkline(values, {
        type: 'bullet',
        barWidth: 4,
        barSpacing: 5,
        fillColor: '',
        lineColor: color.colors['amber-500'],
        tooltipSuffix: 'Celsius',
        height: 'auto',
        width: 'auto',
        targetWidth: 'auto',
        barColor: color.colors['amber-500'],
        negBarColor: 'ff0',
        stackedBarColor: ['ff0', '9f0', '999', 'f60'],
        sliceColors: ['ff0', '9f0', '000', 'f60'],
        offset: '30',
        borderWidth: 1,
        borderColor: '000'
    });

    $('.sparkbox').sparkline(values, {
        type: 'box',
        barWidth: 4,
        barSpacing: 5,
        fillColor: '',
        lineColor: '9f0',
        tooltipSuffix: 'Celsius',
        width: 100,
        barColor: '9f0',
        negBarColor: 'ff0',
        stackedBarColor: ['ff0', '9f0', '999', 'f60'],
        sliceColors: ['ff0', '9f0', '000', 'f60'],
        offset: '30',
        borderWidth: 1,
        borderColor: '000'
    });

});
