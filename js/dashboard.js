$(function () {
    // ------------------------------------------------------
    // @Line Charts
    // ------------------------------------------------------

    let lineChartBox = document.getElementById('line-chart');

    if (lineChartBox) {
        let lineCtx = lineChartBox.getContext('2d');
        lineChartBox.height = 80;

        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Series A',
                    backgroundColor: 'rgba(237, 231, 246, 0.5)',
                    borderColor: color.colors['deep-purple-500'],
                    pointBackgroundColor: color.colors['deep-purple-700'],
                    borderWidth: 2,
                    data: [60, 50, 70, 60, 50, 70, 60]
                }, {
                    label: 'Series B',
                    backgroundColor: 'rgba(232, 245, 233, 0.5)',
                    borderColor: color.colors['blue-500'],
                    pointBackgroundColor: color.colors['blue-700'],
                    borderWidth: 2,
                    data: [70, 75, 85, 70, 75, 85, 70]
                }]
            },

            options: {
                legend: {
                    display: false
                }
            }

        });
    }
});
