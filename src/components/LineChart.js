import React from 'react';
import { Line} from '@ant-design/charts';

function LineChart(props) {

    const dataLine = [
        { mes: 'Junio', visualizaciones: 17945 },
        { mes: 'Julio', visualizaciones: 24011 },
        { mes: 'Agosto', visualizaciones: 46493 },
        { mes: 'Septiembre', visualizaciones: 105293 },
        { mes: 'Octubre', visualizaciones: 77190 }
      ];
    
      const configLine = {
        data: dataLine,
        height: 410,
        xField: 'mes',
        yField: 'visualizaciones',
        color: '#01B075',
        point: {
          size: 5,
          shape: 'diamond',
          color: '#01B075'
        },
        label: {
          style: {
            fill: '#aaa',
            fontSize: 16,
            stroke: '#01B075'
          },
        },
      };
    
   

    return (
        <Line {...configLine}  style={{ backgroundColor: '#1F263C', padding: '20px'}}/>
    );
}

export default LineChart;