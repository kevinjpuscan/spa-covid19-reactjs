import React from 'react';
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';

import {
    ContainerChart
} from './styles';

import Spinner from '../../components/Spinner';


export default function ChartLine({confirmed,deaths,recovered}){
    let [dataLoaded, setDataLoaded] = React.useState("");

    const [option,setOption] =React.useState({
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'Nombre del País',
            text: 'Evolución del virus',
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            //fechas
            data: []
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100
        }, {
            start: 0,
            end: 100,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name: 'confirmados',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: 'rgb(255, 70, 131)'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                },
                //confirmados
                data: []
            },
            {
                name: 'fallecidos',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: 'black'
                },
                
                //fallecidos
                data: []
            },
            {
                name: 'recuperados',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: 'green'
                },
            
                //recuperados
                data: []
            }
        ]
    }) ;


    const formatData= function (arrayData){
        let finalData={
            category:[],
            series:[]
        };

        arrayData.forEach(element => {
            finalData.category.push(element.Date.split('T')[0]);
            finalData.series.push(element.Cases);
        });
        return finalData;
    };

    const updateOptions= function (){
        let newOption=option;
        newOption.xAxis.data=formatData(confirmed).category;
        newOption.series[0].data=formatData(confirmed).series;
        newOption.series[1].data=formatData(deaths).series;
        newOption.series[2].data=formatData(recovered).series;

        setOption(newOption);
        setDataLoaded(true);

    };

    React.useEffect(() => {
        setDataLoaded(false);
        if(confirmed){
            updateOptions();
        }
        //updateOptions();

        return () => {
    
        };
    
        //eslint-disable-next-line
      }, [confirmed]);

    return(
        <ContainerChart>
            {dataLoaded? (
                <ReactEcharts option={option}>
                </ReactEcharts>
            ):(
                <Spinner></Spinner>
            )}
            
        </ContainerChart>
    )
}