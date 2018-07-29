import { Component, OnInit } from '@angular/core';
// servicios
import { GraphicsService } from '../../servicios/graphics.service';
// AmCharts
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-page-graphs',
  templateUrl: './page-graphs.component.html',
  styleUrls: ['./page-graphs.component.scss']
})
export class PageGraphsComponent implements OnInit {

  private chart: AmChart;
  public movies: any;


  constructor(
    private AmCharts: AmChartsService,
    private servicio: GraphicsService,
  ) {

    this.servicio.getMovies()
  	.subscribe( item => {
  		this.movies = item;
  		console.log(this.movies);
  	})
  }

  ngOnInit() {

    console.log(this.movies);

      /*this.chart = this.AmCharts.makeChart("chartdiv", {

        "theme": "light",
        "type": "serial",
        "startDuration": 2,

        "dataProvider": this.generateChartData(),


        "valueAxes": [{
          "position": "left",
          "axisAlpha":0,
          "gridAlpha":0
        }],

        "graphs": [{
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "colorField": "color",
          "fillAlphas": 0.85,
          "lineAlpha": 0.1,
          "type": "column",
          "topRadius":1,
          "valueField": "promedio" //promedio, estaba visits
        }],

        "depth3D": 40,

        "angle": 30,

        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },

        "categoryField": "Titulo", //Titulo, estaba country

        "categoryAxis": {
          "gridPosition": "start",
          "axisAlpha":0,
          "gridAlpha":0
        },

        "export": {
          "enabled": true
        }
      }, 0);*/

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
            "size": 15,
            "text": "Chart Title"
          }
        ],
        "dataProvider": this.generateChartData()
      });
  }

  generateChartData(){

    var chartData=[];

    for(let item in this.movies){

      chartData.push({
        "category": this.movies.Titulo,
        "column-1": this.movies.promedio
      });

      return chartData;

    }

  }

}

/*      [{
          "country": "USA",
          "visits": 4025,
          "color": "#FF0F00"
        }, {
          "country": "China",
          "visits": 1882,
          "color": "#FF6600"
        }, {
          "country": "Japan",
          "visits": 1809,
          "color": "#FF9E01"
        }, {
          "country": "Germany",
          "visits": 1322,
          "color": "#FCD202"
        }, {
          "country": "UK",
          "visits": 1122,
          "color": "#F8FF01"
        }, {
          "country": "France",
          "visits": 1114,
          "color": "#B0DE09"
        }, {
          "country": "India",
          "visits": 984,
          "color": "#04D215"
        }, {
          "country": "Spain",
          "visits": 711,
          "color": "#0D8ECF"
        }, {
          "country": "Netherlands",
          "visits": 665,
          "color": "#0D52D1"
        }, {
          "country": "Russia",
          "visits": 580,
          "color": "#2A0CD0"
        }, {
          "country": "South Korea",
          "visits": 443,
          "color": "#8A0CCF"
        }, {
          "country": "Canada",
          "visits": 441,
          "color": "#CD0D74"
        }, {
          "country": "Brazil",
          "visits": 395,
          "color": "#754DEB"
        }, {
          "country": "Italy",
          "visits": 386,
          "color": "#DDDDDD"
        }, {
          "country": "Taiwan",
          "visits": 338,
          "color": "#333333"
        }],*/
