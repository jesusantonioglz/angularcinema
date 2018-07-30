import { Component, OnInit } from '@angular/core';
// servicios
import { GraphicsService } from '../../servicios/graphics.service';
// AmCharts
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
// Observable
import { Observable } from 'rxjs';


@Component({
    selector: 'app-page-graphs',
    templateUrl: './page-graphs.component.html',
    styleUrls: ['./page-graphs.component.scss']
})
export class PageGraphsComponent implements OnInit {

    private chart: AmChart;
    public movies: Movies[];


    constructor(
        private AmCharts: AmChartsService,
        private servicio: GraphicsService
    ) {

        this.servicio.getMovies()
            .subscribe(item => {
                this.movies = item;
                this.createGraph();
            })
    }

    ngOnInit() {

    }

    generateChartData() {

        var chartData = [];

        this.movies.map(movie => {

            chartData.push({
                "category": movie.Titulo,
                "column-1": movie.promedio
            });

        });

        return chartData;

    }

    createGraph() {
        this.chart = this.AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "categoryField": "category",
            "angle": 30,
            "depth3D": 30,
            "plotAreaBorderAlpha": 0.75,
            "plotAreaFillAlphas": 0.76,
            "startDuration": 1,
            "fontSize": 12,
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Valoración Promedio",
                    "type": "column",
                    "valueField": "column-1"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Valoraciones"
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "alpha": 0,
                    "id": "Title-1",
                    "size": 7,
                    "text": "Chart Title"
                }
            ],
            "dataProvider": this.generateChartData()
        });
    }

}

interface Movies {
    Sinopsis?: string;
    Titulo?: string;
    promedio?: number;
    valoraciones?: [{ userId: string, valoracionDada: number }];
    wallpaper?: string;
}
