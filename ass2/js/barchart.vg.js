document.getElementById('selectDropdown').addEventListener('change', renderBasedOnDropdowns)


function renderBasedOnDropdowns() {
    var selectedSelect = document.getElementById('selectDropdown').value;
    renderChart(selectedSelect);
}

function renderChart(select) {
    var spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {
            "url": "https://raw.githubusercontent.com/Xyangh/3179a2/main/ass2/data/2024_QSWorld_University_Rankings_top1000.csv",
            "title": "Ranking of various universities on different indicators",
            "format": {
                "type": "csv",
                "parse": {
                    [select]: "number"  // This line ensures that the selected select is parsed as a number
                }
            }
        },
        "mark": "bar",
        "encoding": {
            "y": {
                "field": "Institution Name",
                "type": "ordinal",
                "sort": {
                    "field": select,
                    "order": "descending" // This line ensures the positive sequence
                }
            },
            "x": {
                "field": select,
                "type": "quantitative"
            },
            "color": {
                "field": select,
                "type": "quantitative",
                "legend": {
                    "title": select
                },
                "scale": {
                    "scheme": "greenblue"
                }
            },
            "tooltip": [{
                    "field": "Institution Name",
                    "type": "ordinal"
                },
                {
                    "field": "Country",
                    "type": "nominal"
                },
                {
                    "field": select,
                    "type": "quantitative"
                }
            ]
        }
    };

    vegaEmbed('#vis', spec);
}

// Initial render
renderChart('Overall SCORE');
