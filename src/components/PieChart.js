import React from 'react';
import { Pie} from '@ant-design/charts';
import '../css/PieChart.css';

function PieChart() {

    const dataPie = [
        {
          type: 'México',
          value: 130737,
        },
        {
          type: 'Colombia',
          value: 21468,
        },
        {
          type: 'Perú',
          value: 18098,
        },
        {
          type: 'Ecuador',
          value: 17912,
        },
        {
          type: 'Argentina',
          value: 15282,
        },
        {
          type: 'Bolivia',
          value: 11650,
        },
        {
            type: 'España',
            value: 7149,
        },
        {
            type: 'Otros',
            value: 45469,
          },
      ];
    
      const configPie = {
        appendPadding: 10,
        data: dataPie,
        angleField: 'value',
        colorField: 'type',
        height: 450,
        radius: 0.8,
        label: {
          type: 'inner',
          offset: '-0.5',
          content: '{name} {percentage}',
          style: {
            fill: '#fff',
            fontSize: 14,
            textAlign: 'center',
          },
        },
      };

    return (
        <Pie {...configPie} style={{ backgroundColor: '#1F263C'}} />      
    );
}

export default PieChart;