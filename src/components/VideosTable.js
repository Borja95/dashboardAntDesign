import React from 'react';
import '../css/VideosTable.css';
import {Table} from 'antd';

function VideosTable(props) {

    const columns = [
        {
          title: 'Vídeo',
          dataIndex: 'video',
          key: 'video',
        },
        {
          title: 'Fecha',
          dataIndex: 'fecha',
          key: 'fecha',
        },
        {
          title: 'Visualizaciones',
          dataIndex: 'visualizaciones',
          key: 'visualizaciones',
        },
      ];
      
        const dataSource = [
          {
            key: '1',
            video: 'Función SORT en Javascript || Ordenar Arreglos (Arrays) || Tutorial en Español (2020)',
            fecha: "3 de octubre del 2020",
            visualizaciones: 48,
          },
          {
              key: '2',
              video: 'Introducción a Web Scraping con Node JS y Puppeteer || Tutorial en Español',
              fecha: "4 de octubre del 2020",
              visualizaciones: 80,
            },
            {
              key: '3',
              video: 'Carrusel Básico en React JS || Carousel Slider || React JS y Reactstrap',
              fecha: "8 de octubre del 2020",
              visualizaciones: 119,
            },
        ];

    return (
        <Table dataSource={dataSource} columns={columns} className="tablaVideos"/>
    );
}

export default VideosTable;